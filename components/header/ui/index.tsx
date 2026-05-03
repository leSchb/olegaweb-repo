"use client";
import { useState } from "react";
import { useHeader } from "../lib/hooks";

import classNames from "classnames";
import classes from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import AvailableNotification from "~/components/available-notification/ui";
import NavComponent from "~/components/nav/ui";
import SectionContainer from "~/components/section-container/ui";
import HeaderMenuButton from "./menu-button";
import BurgerMenu from "~/components/burger-menu/ui";

interface Props {
  needNav?: boolean;
  burgerDefaultDisplayed?: boolean;
}

export default function Header({
  needNav = true,
  burgerDefaultDisplayed = false,
}: Props) {
  const { headerRef } = useHeader();
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  return (
    <>
      <SectionContainer
        as={"header"}
        className={classNames(
          "flex-row align-center justify-between bg-white",
          classes.container,
        )}
        ref={headerRef}
      >
        <Link href={"/"}>
          <Image
            src={"/header/logo.svg"}
            width={125}
            height={20}
            alt={"olegaweb"}
            className={classes.image}
          />
        </Link>
        <div className={`flex-row align-center gap-5 ${classes.actions}`}>
          {needNav && <NavComponent className={classes.nav} />}
          <AvailableNotification className={classes.available} />
        </div>
        <HeaderMenuButton onClick={() => setMenuOpened(!menuOpened)} />
      </SectionContainer>
      <BurgerMenu isOpened={menuOpened} onClose={() => setMenuOpened(false)} />
    </>
  );
}
