import { useEffect, useRef } from "react";
import { ImprovedNoise } from "./noise";

export default function Hero({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (ref.current === null) return;
    const canvas = ref.current;
    const maybeCtx = canvas.getContext("2d");
    if (maybeCtx === null) return;
    const ctx = maybeCtx;

    const blueOffset = 0;
    const redOffset = 1_000_000;
    const startTime = Date.now();

    function render(getColor: (opacity: number) => string, timeOffset: number) {
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
            x / 500,
            y / 500,
            time / 5000 + timeOffset,
          );

          const distFromTop = yIdx / (verticalCount - 1);
          const distFromCenter = Math.abs(2 * distFromTop - 1);
          const opacity =
            Math.pow(0.25 + (1 - distFromCenter) * 0.75, 3) * noise;

          const fadeOpacity = Math.min((time - startTime) / 3000, 1);
          const cutoffOpacity =
            opacity >= 1 - Math.pow(fadeOpacity, 0.25)
              ? opacity * fadeOpacity
              : 0;

          const color = getColor(cutoffOpacity);
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

          render((o) => `rgba(0, 148, 232, ${o.toFixed(2)})`, blueOffset);
          render((o) => `rgba(219, 0, 79, ${o.toFixed(2)})`, redOffset);
        }),
      1000 / 15,
    );

    return () => clearInterval(interval);
  }, []);

  return <canvas ref={ref} className={className} />;
}
