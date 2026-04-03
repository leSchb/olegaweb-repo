import classNames from "classnames";

import classes from "./numbers.module.css";
import NumbersCard from "./card";
import { numbersCards } from "../model";

export default function NumbersContent() {
  return (
    <div className={`scrollbar ${classes.wrapper}`}>
      <ul className={classNames(`grid`, classes.list)}>
        {numbersCards.map((item, index) => (
          <NumbersCard key={item.title + index} {...item} />
        ))}
      </ul>
    </div>
  );
}
