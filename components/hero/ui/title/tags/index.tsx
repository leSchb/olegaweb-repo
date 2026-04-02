import classes from "./tags.module.css";

const tags: string[] = ["Web", "Mobile", "Saas", "B2B", "B2C"];

export default function HeroTitleTags() {
  return (
    <ul className={`flex-row align-center ${classes.container}`}>
      {tags.map((item, index) => (
        <li key={item + index} className={`cursor-default ${classes.item}`}>
          <span className="bounded black regular">{item}</span>
        </li>
      ))}
    </ul>
  );
}
