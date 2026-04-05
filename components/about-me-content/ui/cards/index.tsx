import classes from "./cards.module.css";
import AboutMeCard from "./card";
import { aboutMeCards } from "../../model/const";

export default function AboutMeCards() {
  return (
    <ul className={`flex-row mandatory-x-container scrollbar ${classes.container}`}>
      {aboutMeCards.map((item, index) => (
        <AboutMeCard key={item.text + index} {...item} />
      ))}
    </ul>
  );
}
