import { observeTarget, unobserveTarget } from "./animations";
import { nonNull } from "../util";
import type { EasingDefinition } from "motion";
import { useAnimate } from "motion/react";
import { type ReactElement, useEffect } from "react";
import { Slot } from "radix-ui";
import { useLocation } from "react-router";

type Animate = ReturnType<typeof useAnimate<Element>>[1];

export const easeOut: EasingDefinition = [0, 0.98, 0.46, 1.01];
export const easeOutBox: EasingDefinition = [0.03, 0.88, 0.06, 1];

interface Props {
  initial: (animate: Animate, target: HTMLElement) => void | Promise<void>;
  animation: (animate: Animate, target: HTMLElement) => void | Promise<void>;
  children: ReactElement;
}

const Animate: React.FC<Props> = ({ children, initial, animation }) => {
  const location = useLocation();
  const [scope, animate] = useAnimate<HTMLElement>();

  useEffect(() => {
    const target = nonNull(scope.current);

    let unobserved = false;
    observeTarget(target, {
      skip: () => {
        unobserved = true;
      },
      initial: () => initial(animate, target),
      start: () => {
        unobserved = true;
        return animation(animate, target);
      },
    });

    return () => {
      if (unobserved) return;
      unobserved = true;
      unobserveTarget(target);
    };
  }, [location.key]);

  return <Slot.Root ref={scope}>{children}</Slot.Root>;
};

export default Animate;
