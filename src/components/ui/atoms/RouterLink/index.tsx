import type { LinkProps } from "next/link";
import Link from "next/link";
import { forwardRef, Ref } from "react";

/**
 * This is a wrapper over `next/link` component.
 * We use this to help us maintain consistency in our codebase.
 */
export const RouterLink = forwardRef(
  (props: LinkProps, ref: Ref<HTMLAnchorElement>) => (
    <Link ref={ref} {...props} />
  )
);
