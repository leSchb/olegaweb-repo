import classNames from "classnames";

import classes from "./button.module.css";
import Button from "~/shared/components/button";
import { ICaseButton } from "../../model/interface";

interface Props extends ICaseButton {
  className?: string;
}

export default function CaseButton({ className, bgColor, color, text }: Props) {
  return (
    <Button
      bgColor={bgColor}
      className={classNames(className, classes.container)}
    >
      <span className={classNames("bounded medium text-14-12", color)}>
        {text}
      </span>
    </Button>
  );
}
