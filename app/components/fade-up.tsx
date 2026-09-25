import Animate, { easeOut } from "./animate";
import type { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

const FadeUp: React.FC<Props> = ({ children }) => (
  <Animate
    initial={async (animate, target) => {
      await animate(target, { opacity: 0, y: 50 }, { duration: 0 });
    }}
    animation={async (animate, target) => {
      await animate(
        target,
        { opacity: 1, y: 0 },
        { duration: 0.5, ease: easeOut },
      );
    }}
  >
    {children}
  </Animate>
);

export default FadeUp;
