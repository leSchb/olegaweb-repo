import classNames from "classnames";

import classes from "./button.module.css";
import Container from "../container/ui";
import { ElementType } from "react";
import { ContainerProps } from "../container/ui";

type Props<T extends ElementType> = ContainerProps<T> & {
  activeScale?: boolean;
  justifyCenter?: boolean;
};

export default function Button<T extends ElementType>({
  activeScale = false,
  justifyCenter = true,
  children,
  bgColor = "transparent",
  as,
  className,
  ...rest
}: Props<T>) {
  return (
    <Container
      bgColor={bgColor}
      className={classNames(
        classes.button,
        activeScale && classes.activeScale,
        justifyCenter && classes.justifyCenter,
        className,
      )}
      as={as || "button"}
      {...(rest as ContainerProps<T>)}
    >
      {children}
    </Container>
  );
}
