import classNames from "classnames";
import classes from "./legal.module.css";
import Icon from "~/public/footer/1-point.svg";

const legal: string[] = [
  "© 2026",
  "Oleg Zhavoronka",
  "Product / UX-UI дизайнер",
];

export default function FooterLegal() {
  return (
    <div className={`flex gap-4 justify-between ${classes.container}`}>
      {legal.map((item, index) => (
        <p
          key={item + index}
          className={classNames("white onest text-16-14", classes.text)}
        >
          {item}
        </p>
      ))}
      <Icon className={classes.icon} />
    </div>
  );
}
