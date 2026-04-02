import { Root } from "@radix-ui/react-slot";
import classNames from "classnames";

import { ContainerProps } from "~/shared/components/container/ui";
import { ElementType } from "react";

type Props<T extends ElementType> = ContainerProps<T>;

export default function SectionContainer<T extends ElementType>({
  children,
  className,
  asChild,
  as,
  ...rest
}: Props<T>) {
  const Tag = asChild ? Root : as || "section";

  return (
    <Tag className={classNames(`section-container`, className)} {...rest}>
      {children}
    </Tag>
  );
}
