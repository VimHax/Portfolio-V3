import type { ReactNode, RefObject } from "react";
import clsx from "clsx";
import s from "./tweet-container.module.css";
import "./theme.css";

type Props = {
  className?: string;
  children: ReactNode;
  ref?: RefObject<HTMLDivElement>;
};

export const TweetContainer = ({ ref, className, children }: Props) => (
  <div ref={ref} className={clsx("react-tweet-theme", s.root, className)}>
    <article className={s.article}>{children}</article>
  </div>
);
