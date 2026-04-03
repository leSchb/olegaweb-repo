import classNames from "classnames";

import classes from "./choose-role.module.css";
import ChooseRoleCard from "./card";
import { chooseRoleCards } from "../model";

export default function ChooseRoleContent() {
  return (
    <ul className={classNames(`flex`, classes.container)}>
      {chooseRoleCards.map((item, index) => (
        <ChooseRoleCard key={item.title + index} {...item} />
      ))}
    </ul>
  );
}
