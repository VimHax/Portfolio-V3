import { stagger } from "motion";
import Animate, { easeOut } from "./animate";

interface Props {
  title: string;
  delay?: number;
}

const Title: React.FC<Props> = ({ title, delay = 0 }) => (
  <Animate
    initial={async (animate) => {
      await animate(
        "& > div > span",
        { opacity: 0, x: "0.2em", y: "0.75em", rotateY: -90 },
        { duration: 0 },
      );
    }}
    animation={async (animate) => {
      await Promise.all([
        animate(
          "& > div > span",
          { opacity: 1 },
          {
            duration: 0.3,
            delay: stagger(0.02, { startDelay: delay }),
            ease: "linear",
          },
        ),
        animate(
          "& > div > span",
          { x: 0, y: 0, rotateY: 0 },
          {
            duration: 1.2,
            delay: stagger(0.02, { startDelay: delay }),
            ease: easeOut,
          },
        ),
      ]);
    }}
  >
    <span>
      {title
        .trim()
        .split(/(\s+)/)
        .map((word, idx) =>
          word.trim().length === 0 ? (
            word
          ) : (
            <div key={idx} className="inline-block">
              {word.split("").map((c, idx) => (
                <span key={idx} className="inline-block">
                  {c}
                </span>
              ))}
            </div>
          ),
        )}
    </span>
  </Animate>
);

export default Title;
