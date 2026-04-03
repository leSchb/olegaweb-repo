import classNames from "classnames";

import classes from "./section-with-title.module.css";
import SectionContainer from "~/components/section-container/ui";
import { ElementType } from "react";
import { SectionContainerProps } from "~/components/section-container/ui";

type Props<T extends ElementType> = SectionContainerProps<T> & {
  title: string;
};

export default function SectionWithTitle<T extends ElementType>({
  children,
  title,
  className,
  ...props
}: Props<T>) {
  return (
    <SectionContainer
      {...(props as SectionContainerProps<T>)}
      className={classNames(
        className,
        "flex-column section-container",
        classes.container,
      )}
    >
      <h2 className={`heading bold section-heading-text`}>{title}</h2>
      {children}
    </SectionContainer>
  );
}
