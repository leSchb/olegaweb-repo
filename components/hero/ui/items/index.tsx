import classes from "./items.module.css";
import HeroItem from "./item";
import { heroItems } from "../../model";

export default function HeroItems() {
  return (
    <ul className={`grid ${classes.container}`}>
      {heroItems.map((item, index) => (
        <HeroItem key={item.title + index} {...item} />
      ))}
    </ul>
  );
}
