import classNames from "classnames";

import classes from "./stack.module.css";
import Image from "next/image";
import { IStackItem } from "../../model/interface";

interface Props {
  stack: IStackItem[];
  className?: string;
  button?: React.ReactNode;
}

const StackContent = ({ stack, className }: Omit<Props, "button">) => (
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

export default function CaseStack({ stack, className, button }: Props) {
  if (button) {
    return (
      <div className="flex-row align-end gap-2">
        {button}
        <StackContent stack={stack} className={className} />
      </div>
    );
  }
  return <StackContent stack={stack} className={className} />;
}
