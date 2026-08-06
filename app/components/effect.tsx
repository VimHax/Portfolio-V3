import { useEffect, useRef } from "react";
import { ImprovedNoise } from "./noise";
import { interpolate, type Color } from "~/util";

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
  const ref = useRef<HTMLCanvasElement>(null);
  const isHoveringRef = useRef<{
    hovering: boolean;
    lastUpdate: number | null;
  }>({
    hovering: false,
    lastUpdate: null,
  });

  useEffect(() => {
    isHoveringRef.current.hovering = hovering;
    isHoveringRef.current.lastUpdate = Date.now();
  }, [hovering]);

  useEffect(() => {
    if (ref.current === null) return;
    const canvas = ref.current;
    const maybeCtx = canvas.getContext("2d");
    if (maybeCtx === null) return;
    const ctx = maybeCtx;

    const timeOffset = 0;
    const startTime = Date.now();

    function render(
      getColor: (brightness: number, opacity: number) => string,
      timeOffset: number,
    ) {
      const time = Date.now();
      const size = 50;
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

          const noise = ImprovedNoise.noise(
            x / 5,
            y / 5,
            time / 1250 + timeOffset,
          );

          const distFromBottom = yIdx / (verticalCount - 1);
          const opacity = Math.min(
            Math.max(
              Math.pow(
                1.05 * distFromBottom,
                isHoveringRef.current.lastUpdate === null
                  ? 6
                  : isHoveringRef.current.hovering
                    ? interpolate(
                        6,
                        2,
                        (time - isHoveringRef.current.lastUpdate) / 250,
                      )
                    : interpolate(
                        2,
                        6,
                        (time - isHoveringRef.current.lastUpdate) / 250,
                      ),
              ),
              0,
            ),
            1,
          );

          const fadeOpacity = Math.min((time - startTime) / 1000, 1);
          const cutoffOpacity = fadeOpacity * opacity;

          const color = getColor(noise, cutoffOpacity);
          ctx.strokeStyle = color;
          ctx.fillStyle = color;
          ctx.lineWidth = 1;

          ctx.fillRect(x, y, width, height);
          y += height;
          yIdx++;
        }

        x += width;
      }
    }

    const interval = setInterval(
      () =>
        requestAnimationFrame(() => {
          canvas.width = canvas.clientWidth;
          canvas.height = canvas.clientHeight;

          ctx.clearRect(0, 0, canvas.width, canvas.height);

          render(
            (b, o) =>
              `rgba(${interpolate(startColor[0], endColor[0], b)}, ${interpolate(startColor[1], endColor[1], b)}, ${interpolate(startColor[2], endColor[2], b)}, ${o.toFixed(2)})`,
            timeOffset,
          );
        }),
      1000 / 15,
    );

    return () => clearInterval(interval);
  }, []);

  return <canvas ref={ref} className={className} />;
}
