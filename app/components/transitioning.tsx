import { useEffect } from "react";
import { useViewTransitionState } from "react-router";
import { setTransitioning } from "./animations";

export default function Transitioning() {
  const isTransitioning = useViewTransitionState("/", { relative: "path" });

  useEffect(() => {
    setTransitioning(isTransitioning);
    return () => setTransitioning(false);
  }, [isTransitioning]);

  return null;
}
