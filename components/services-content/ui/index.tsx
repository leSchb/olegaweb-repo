import classes from "./services.module.css";
import ServicesCard from "./card";
import { servicesCards } from "../model/const";

export default function ServicesContent() {
  return (
    <ul className={`grid ${classes.container}`}>
      {servicesCards.map((item, index) => (
        <ServicesCard key={item.color + index} cardData={item} />
      ))}
    </ul>
  );
}
