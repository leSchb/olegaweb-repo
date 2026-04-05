"use client";
import classNames from "classnames";
import { useBurgerMenu } from "../lib/hooks";

import classes from "./burger-menu.module.css";
import Point1 from "~/public/footer/1-point.svg";
import Container from "~/shared/components/container/ui";
import BurgerTwoPoints from "./two-points";
import NavComponent from "~/components/nav/ui";
import AvailableNotification from "~/components/available-notification/ui";

interface Props {
  isOpened: boolean;
  onClose: () => void;
}

export default function BurgerMenu({ isOpened, onClose }: Props) {
  useBurgerMenu({ isOpened });

  return (
    <Container
      bgColor="black"
      className={classNames(
        `fixed flex-column ${classes.wrapper}`,
        isOpened ? classes.opened : classes.closed,
      )}
      needHoverAnimation={false}
    >
      <div className={`flex-column justify-between ${classes.container}`}>
        <div className={`flex-column ${classes.content}`}>
          <BurgerTwoPoints onClose={onClose} />
          <h2 className="white bounded text-28">Меню</h2>
          <NavComponent onLinkClick={onClose} />
        </div>
        <div className="flex-row justify-between gap-4">
          <AvailableNotification />
          <Point1 className="flex-1" />
        </div>
      </div>
    </Container>
  );
}
