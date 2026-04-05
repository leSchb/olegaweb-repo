import classNames from "classnames";
import { Root } from "@radix-ui/react-slot";

import { ContainerProps } from "~/shared/components/container/ui";
import { ElementType } from "react";

export type SectionContainerProps<
  T extends ElementType,
  RefT extends HTMLElement,
> = ContainerProps<T, RefT>;

export default function SectionContainer<
  T extends ElementType,
  RefT extends HTMLElement,
>({
  children,
  className,
  asChild,
  as,
  ref,
  ...rest
}: SectionContainerProps<T, RefT>) {
  const Tag = asChild ? Root : as || "section";

  return (
    <Tag
      className={classNames(`section-container`, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </Tag>
  );
}
