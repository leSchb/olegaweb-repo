import classNames from "classnames";
import classes from "./available-notification.module.css";
import Icon from "~/public/header/available.svg";
import Container from "~/shared/components/container/ui";

interface Props {
  className?: string;
}

export default function AvailableNotification({ className }: Props) {
  return (
    <Container
      className={classNames(
        `flex-row align-center gap-3 pointer`,
        classes.container,
        className,
      )}
      bgColor="light-gray"
    >
      <Icon className={classes.icon} />
      <span className="bounded black regular">Доступен для найма</span>
    </Container>
  );
}
