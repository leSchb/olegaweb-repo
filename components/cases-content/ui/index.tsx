import classNames from "classnames";
import classes from "./cases-content.module.css";
import CasesCard from "./item";
import { casesCards } from "../model";

export default function CasesContent() {
  return (
    <div className={classNames("scrollbar", classes.wrapper)}>
      <ul className={classNames("grid", classes.container)}>
        {casesCards.map((item, index) => (
          <CasesCard key={item.title + index} {...item} />
        ))}
      </ul>
    </div>
  );
}
