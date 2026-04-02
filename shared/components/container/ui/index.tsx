import { Slot } from "@radix-ui/react-slot";
import classNames from "classnames";

import { ElementType } from "react";
import { PolymorphicProps } from "~/shared/model";

interface ContainerOwnProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  bgColor?: string;
}

export type ContainerProps<T extends ElementType> = PolymorphicProps<
  T,
  ContainerOwnProps
>;

export default function Container<T extends ElementType = "div">({
  className,
  children,
  asChild,
  as,
  bgColor = "white",
  ...rest
}: ContainerProps<T>) {
  const Tag = asChild ? Slot : as || "div";
  return (
    <Tag className={classNames(className, `bg-${bgColor}`)} {...rest}>
      {children}
    </Tag>
  );
}
