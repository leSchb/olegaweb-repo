import classNames from "classnames";

import classes from "./item.module.css";
import Icon from "~/public/cases/link.svg";
import Container from "~/shared/components/container/ui";
import Image from "next/image";
import { ICasesCard } from "../../model";

type Props = ICasesCard;

export default function CasesCard({
  title,
  text,
  linkHref,
  size,
  image,
  manyImages,
}: Props) {
  return (
    <Container
      as="li"
      className={classNames(
        "flex-column justify-between relative",
        classes.container,
        classes[size],
      )}
      bgColor="light-gray"
    >
      <Image
        src={image}
        width={manyImages ? 120 : 60}
        height={60}
        className={`${classes.image} ${manyImages && classes.manyImages}`}
        alt={title}
      />
      <div className={`flex-column gap-2`}>
        <h5 className="bounded card-subtitle">{title}</h5>
        <p className="onest card-text">{text}</p>
      </div>
      {linkHref && (
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <Icon />
        </a>
      )}
    </Container>
  );
}
