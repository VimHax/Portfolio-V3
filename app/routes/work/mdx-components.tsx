import type { ComponentProps } from "react";

export function useMDXComponents() {
  return {
    p: (props: ComponentProps<"p">) => (
      <p
        className="mb-5 max-w-prose self-center text-lg last:mb-16"
        {...props}
      />
    ),
  };
}
