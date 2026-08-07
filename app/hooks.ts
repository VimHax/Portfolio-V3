import { useEffect, useRef } from "react";
import type { Subscription, Unsubscribe } from "./util";

export function useIntersectionObserver<T extends Element>() {
  const ref = useRef<T>(null);
  const intersectingRef = useRef(false);
  const subscriptionsRef = useRef(new Set<Subscription>());

  useEffect(() => {
    if (ref.current === null) return;

    const observer = new IntersectionObserver(([entry]) => {
      const intersecting = entry.isIntersecting;
      if (intersectingRef.current === intersecting) return;
      intersectingRef.current = intersecting;
      for (const subscription of subscriptionsRef.current) {
        subscription();
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [
    ref,
    intersectingRef,
    (f: Subscription): Unsubscribe => {
      if (subscriptionsRef.current.has(f)) {
        throw new Error("Already subscribed!");
      }
      subscriptionsRef.current.add(f);
      return () => subscriptionsRef.current.delete(f);
    },
  ] as const;
}
