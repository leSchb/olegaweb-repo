import classes from "./list.module.css";

interface Props {
  items: string[];
}

export default function CasePageStepList({ items }: Props) {
  return (
    <ul className={`flex-column ${classes.container}`}>
      {items.map((item, index) => (
        <li
          key={item + index}
          className={`flex-row align-center ${classes.item}`}
        >
          <div className={classes.marker}></div>
          <p className="bounded black text-14-12">{item}</p>
        </li>
      ))}
    </ul>
  );
}
