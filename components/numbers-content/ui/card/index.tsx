"use client";
import { useMemo } from "react";
import classNames from "classnames";

import classes from "./card.module.css";
import Container from "~/shared/components/container/ui";
import {
  INumbersCard,
  numbersCardColorsMeta,
} from "~/components/numbers-content/model";

type Props = INumbersCard;

export default function NumbersCard({ title, text, color, size }: Props) {
  const colorMeta = useMemo(() => numbersCardColorsMeta[color], [color]);

  return (
    <Container
      as="li"
      className={classNames(
        `flex-column justify-between`,
        classes.container,
        classes[size],
        colorMeta.bgColor === "transparent" && classes.border,
      )}
      bgColor={colorMeta.bgColor}
    >
      <h5 className={classNames(`bounded card-title`, colorMeta.textColor)}>
        {title}
      </h5>
      <p
        className={classNames(
          `onest card-text`,
          colorMeta.subTextColor || colorMeta.textColor,
        )}
      >
        {text}
      </p>
    </Container>
  );
}
