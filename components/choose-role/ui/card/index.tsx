import classNames from "classnames";

import classes from "./choose-role-card.module.css";
import Icon from "~/public/choose-role/link.svg";
import Container from "~/shared/components/container/ui";
import { IChooseRoleCard } from "../../model";

type Props = IChooseRoleCard;

export default function ChooseRoleCard({
  title,
  text,
  linkText,
  linkHref,
  color,
  size,
}: Props) {
  return (
    <Container
      as="li"
      className={classNames(
        `flex-column justify-between`,
        classes.container,
        classes[size],
      )}
      bgColor={color}
    >
      <div className="flex-column gap-2">
        <h5
          className={classNames(
            "choose-role-title bounded",
            color === "black" && "white",
          )}
        >
          {title}
        </h5>
        <p
          className={classNames(
            "card-text onest",
            color === "black" && "dark-gray",
          )}
        >
          {text}
        </p>
      </div>
      <a
        href={linkHref}
        rel="noopener noreferrer"
        className={`flex-row align-center gap-2`}
      >
        <span className="red-main bounded card-link">{linkText}</span>
        <Icon />
      </a>
    </Container>
  );
}
