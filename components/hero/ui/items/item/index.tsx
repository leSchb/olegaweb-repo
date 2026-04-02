import classNames from "classnames";

import classes from "./item.module.css";
import Container from "~/shared/components/container/ui";
import { IHeroItem } from "~/components/hero/model";

type Props = IHeroItem;

export default function HeroItem({
  title,
  Icon,
  href,
  textColor,
  bgColor = "light-gray",
  big,
  mobileBig,
}: Props) {
  return (
    <Container
      as="li"
      className={classNames(
        `flex-column flex-start justify-between`,
        classes.container,
        big && classes.big,
        mobileBig && classes.mobileBig,
      )}
      bgColor={bgColor}
    >
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          <Icon className={classes.icon} />
        </a>
      ) : (
        <Icon className={classes.icon} />
      )}
      <span className={`bounded hero-item-text ${textColor} prewrap`}>
        {title}
      </span>
    </Container>
  );
}
