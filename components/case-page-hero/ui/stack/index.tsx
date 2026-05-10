import classNames from "classnames";

import classes from "./stack.module.css";
import Image from "next/image";
import { IStackItem } from "../../model/interface";

interface Props {
  stack: IStackItem[];
  className?: string;
}

export default function CaseStack({ stack, className }: Props) {
  return (
    <div
      role={"list"}
      className={classNames(className, classes.container, "flex-row")}
    >
      {stack.map((item, index) => (
        <Image
          key={item.src + index}
          role="listitem"
          className={classes.image}
          width={40}
          height={40}
          alt={item.alt}
          src={item.src}
        />
      ))}
    </div>
  );
}
