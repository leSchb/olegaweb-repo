import classNames from "classnames";

import classes from "./block-container.module.css";
import Container from "~/shared/components/container/ui";
import BlockContainerTitle from "./title";
import BlockContainerButton from "./button";
import {
  blockContainerColorsMeta,
  IBlockContainer,
} from "~/components/block-container/model";

type Props = IBlockContainer & {
  children?: React.ReactNode;
  aboveButton?: React.ReactNode;
  buttonClassName?: string;
  className?: string;
  as?: React.ElementType;
};

export default function BlockContainer({
  title,
  subtitle,
  button,
  color,
  children,
  aboveButton,
  buttonClassName,
  className,
  as,
}: Props) {
  const colorMeta = blockContainerColorsMeta[color];
  return (
    <Container
      as={as || "div"}
      className={classNames("flex", className, color === "redBorder" && classes.redBorder)}
      bgColor={colorMeta.bgColor}
      needHoverAnimation={false}
    >
      {children ? (
        <div className={`flex-column gap-6`}>
          <BlockContainerTitle
            title={title}
            subtitle={subtitle}
            textColor={colorMeta.text}
          />
          {children}
        </div>
      ) : (
        <BlockContainerTitle
          title={title}
          subtitle={subtitle}
          textColor={colorMeta.text}
        />
      )}
      {button &&
        (aboveButton ? (
          <div className="flex-column gap-4">
            {aboveButton}
            <BlockContainerButton
              buttonData={button}
              className={buttonClassName}
              buttonColor={colorMeta.button}
            />
          </div>
        ) : (
          <BlockContainerButton
            buttonData={button}
            className={buttonClassName}
            buttonColor={colorMeta.button}
          />
        ))}
    </Container>
  );
}
