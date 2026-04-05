import classes from "./work-proccess.module.css";
import WorkProccessCard from "./card";
import { workProccessCards } from "../model";

export default function WorkProccessContent() {
  return (
    <ul className={`flex-row mandatory-x-container ${classes.container}`}>
      {workProccessCards.map((item, index) => (
        <WorkProccessCard key={item.title + index} {...item} />
      ))}
    </ul>
  );
}
