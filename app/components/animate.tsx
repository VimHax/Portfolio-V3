import { observeTarget, unobserveTarget } from "./animations";
import { nonNull } from "../util";
import type { EasingDefinition } from "motion";
import { useAnimate } from "motion/react";
import { type ReactElement, useLayoutEffect, useRef } from "react";
import { Slot } from "radix-ui";

type Animate = ReturnType<typeof useAnimate<Element>>[1];

export const easeOut: EasingDefinition = [0, 0.98, 0.46, 1.01];
export const easeOutBox: EasingDefinition = [0.03, 0.88, 0.06, 1];

interface Props {
  initial: (animate: Animate, target: HTMLElement) => void | Promise<void>;
  animation: (animate: Animate, target: HTMLElement) => void | Promise<void>;
  children: ReactElement;
}

const Animate: React.FC<Props> = ({ children, initial, animation }) => {
  const addedRef = useRef(false);
  const unobservedRef = useRef(false);
  const [scope, animate] = useAnimate<HTMLElement>();

  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      if (addedRef.current) return;
      addedRef.current = true;

      const target = nonNull(scope.current);

      observeTarget(target, {
        skip: () => {
          unobservedRef.current = true;
        },
        initial: () => initial(animate, target),
        start: () => {
          unobservedRef.current = true;
          return animation(animate, target);
        },
      });
    }, []);

    useLayoutEffect(() => {
      return () => {
        addedRef.current = false;
        if (unobservedRef.current) return;
        unobservedRef.current = true;
        unobserveTarget(nonNull(scope.current));
      };
    }, []);
  }

  return <Slot.Root ref={scope}>{children}</Slot.Root>;
};

export default Animate;
