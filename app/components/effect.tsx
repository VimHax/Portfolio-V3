import { useEffect, useMemo, useRef } from "react";
import { ImprovedNoise } from "./noise";
import {
  clamp,
  getScaleFactor,
  interpolate,
  interpolateColor,
  type Color,
} from "~/util";
import { useIntersectionObserver } from "~/hooks";

interface HoverState {
  hovering: boolean;
  lastUpdate: number | null;
}

export default function Effect({
  className,
  startColor,
  endColor,
  hovering,
}: {
  className?: string;
  startColor: Color;
  endColor: Color;
  hovering: boolean;
}) {
  const randomOffset = useMemo(() => Math.round(Math.random() * 1_000_000), []);
  const [ref, intersectingRef, subscribe] =
    useIntersectionObserver<HTMLCanvasElement>();
  const stateRef = useRef<HoverState>({
    hovering: false,
    lastUpdate: null,
  });

  useEffect(() => {
    stateRef.current.hovering = hovering;
    stateRef.current.lastUpdate = Date.now();
  }, [hovering]);

  useEffect(() => {
    if (ref.current === null) return;
    const canvas = ref.current;
    const maybeCtx = canvas.getContext("2d");
    if (maybeCtx === null) return;
    const ctx = maybeCtx;

    const startTime = Date.now();

    function hoverTransition(time: number) {
      const duration = 250;
      return stateRef.current.lastUpdate === null
        ? 1
        : clamp((time - stateRef.current.lastUpdate) / duration, 0, 1);
    }

    function fadeTransition(time: number) {
      const duration = 1_000;
      return clamp((time - startTime) / duration, 0, 1);
    }

    function renderNoise(
      time: number,
      getColor: (mix: number, opacity: number) => string,
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

          const distFromBottom = yIdx / (verticalCount - 1);
          const transition = hoverTransition(time);
          const [a, b, c] = [
            [1.05, 3, 1.75],
            [1.05, 2.5, 1.5],
            [1.05, 5, 2],
          ][window.innerWidth < 640 ? 0 : window.innerWidth < 1024 ? 1 : 2];
          const gradientOpacity = clamp(
            Math.pow(
              a * distFromBottom,
              interpolate(
                b,
                c,
                stateRef.current.hovering ? transition : 1 - transition,
              ),
            ),
            0,
            1,
          );

          const opacity = gradientOpacity * fadeTransition(time);

          if (opacity > 0) {
            const speed = 1 / 1_000;
            const noise = ImprovedNoise.noise(
              x / scaleFactor / 100,
              y / 500,
              time * speed + randomOffset,
            );

            const interpolated = interpolate(noise, 1, opacity);
            ctx.lineWidth = 1;
            ctx.fillStyle = getColor(noise, interpolated * opacity);
            ctx.strokeStyle = getColor(noise, interpolated * opacity * 0.5);

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
        (m, o) =>
          `rgba(${[...interpolateColor(startColor, endColor, m), clamp(o, 0, 1).toFixed(2)].join(",")})`,
      );
    }

    let loop = true;
    let timeout: NodeJS.Timeout | null = null;
    let frameHandle: number | null = null;
    const delay = 1_000 / 15;

    function isActive(time: number): boolean {
      return fadeTransition(time) < 1 || hoverTransition(time) < 1;
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

  return <canvas ref={ref} className={className} />;
}
