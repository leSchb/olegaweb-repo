import classes from "./title.module.css";
import HeroTitleTags from "./tags";

export default function HeroTitle() {
  return (
    <div className={`flex-column ${classes.container}`}>
      <HeroTitleTags />
      <h1 className="heading black h1">
        Делаю UX/UI для продуктов <br />и сервисов{" "}
        <span className={`${classes.accent} gray bounded cursor-default`}>
          без духоты и бесконечных правок
        </span>
      </h1>
    </div>
  );
}
