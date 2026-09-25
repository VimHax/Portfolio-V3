import Animate from "./animate";
import type { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

const FadeIn: React.FC<Props> = ({ children }) => (
  <Animate
    initial={async (animate, target) => {
      await animate(target, { opacity: 0 }, { duration: 0 });
    }}
    animation={async (animate, target) => {
      await animate(target, { opacity: 1 }, { duration: 0.5, ease: "linear" });
    }}
  >
    {children}
  </Animate>
);

export default FadeIn;
