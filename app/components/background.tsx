import { useEffect, useMemo } from "react";
import { ImprovedNoise } from "./noise";
import { clamp, getScaleFactor, type Color } from "~/util";
import { useIntersectionObserver } from "~/hooks";

export default function Background({
  className,
  startColor,
  endColor,
}: {
  className?: string;
  startColor: Color;
  endColor: Color;
}) {
  const randomOffset = useMemo(() => Math.round(Math.random() * 1_000_000), []);
  const [ref, intersectingRef, subscribe] =
    useIntersectionObserver<HTMLCanvasElement>();

  useEffect(() => {
    if (ref.current === null) return;
    const canvas = ref.current;
    const maybeCtx = canvas.getContext("2d");
    if (maybeCtx === null) return;
    const ctx = maybeCtx;

    const startTime = Date.now();

    function fadeTransition(time: number) {
      const duration = 3_000;
      return clamp((time - startTime) / duration, 0, 1);
    }

    function renderNoise(
      time: number,
      offset: number,
      getColor: (opacity: number) => string,
    ) {
      const scaleFactor = getScaleFactor();
      const size = scaleFactor * 50;
      const xOffset = Math.ceil(canvas.width / 2 - size / 2) % size;
      const yOffset = Math.ceil(canvas.height / 2 - size / 2) % size;
      const verticalHalfCount = Math.ceil(
        Math.ceil(canvas.height / 2 - size / 2) / size,
      );
      const verticalCount = verticalHalfCount * 2 + 1;

      let x = 0;
      while (x < canvas.width) {
        const width = x === 0 && xOffset !== 0 ? xOffset : size;

        let y = 0;
        let yIdx = 0;
        while (y < canvas.height) {
          const height = y === 0 && yOffset !== 0 ? yOffset : size;

          const frequency = 1 / scaleFactor / 500;
          const speed = 1 / 5_000;
          const noise = ImprovedNoise.noise(
            x * frequency * 3,
            y * frequency,
            time * speed + randomOffset + offset,
          );

          const distFromTop = yIdx / (verticalCount - 1);
          const gradientOpacity =
            Math.pow(0.25 + (1 - distFromTop) * 0.75, 3) *
            clamp(noise * 2.0, 0, 1);

          const fadeOpacity = fadeTransition(time);
          const opacity =
            gradientOpacity >= 1 - Math.pow(fadeOpacity, 0.25)
              ? gradientOpacity * fadeOpacity
              : 0;

          if (opacity > 0) {
            ctx.lineWidth = 1;
            ctx.fillStyle = getColor(opacity);
            ctx.strokeStyle = getColor(opacity * 0.5);

            ctx.fillRect(x, y, width, height);
            ctx.strokeRect(x, y, width, height);
          }

          y += height;
          yIdx++;
        }

        x += width;
      }
    }

    function render(time: number) {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      renderNoise(
        time,
        0,
        (o) => `rgba(${[...endColor, o.toFixed(2)].join(",")})`,
      );
      renderNoise(
        time,
        1_000_000,
        (o) => `rgba(${[...endColor, o.toFixed(2)].join(",")})`,
      );
    }

    let loop = true;
    let timeout: NodeJS.Timeout | null = null;
    let frameHandle: number | null = null;
    const delay = 1_000 / 15;

    function isActive(time: number): boolean {
      return fadeTransition(time) < 1;
    }

    function isVisible(): boolean {
      return !document.hidden && intersectingRef.current;
    }

    function scheduleFrame() {
      if (!loop) return;
      if (timeout !== null) return;
      if (frameHandle !== null) return;

      const time = Date.now();

      function request() {
        frameHandle = requestAnimationFrame(() => {
          frameHandle = null;
          render(time);
          if (isVisible()) scheduleFrame();
        });
      }

      if (isActive(time)) {
        request();
      } else {
        timeout = setTimeout(() => {
          timeout = null;
          request();
        }, delay);
      }
    }

    function unscheduleFrame() {
      if (timeout !== null) {
        clearTimeout(timeout);
        timeout = null;
      }
      if (frameHandle !== null) {
        cancelAnimationFrame(frameHandle);
        frameHandle = null;
      }
    }

    function onVisibilityUpdate() {
      if (isVisible()) scheduleFrame();
      else unscheduleFrame();
    }

    const controller = new AbortController();
    document.addEventListener("visibilitychange", onVisibilityUpdate, {
      signal: controller.signal,
    });

    const unsubscribe = subscribe(onVisibilityUpdate);

    if (isVisible()) scheduleFrame();

    return () => {
      loop = false;
      unsubscribe();
      controller.abort();
      unscheduleFrame();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className={className}
      style={{ backgroundColor: `rgb(${startColor.join(",")})` }}
    />
  );
}
