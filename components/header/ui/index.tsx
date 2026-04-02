import classNames from "classnames";
import classes from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import AvailableNotification from "~/components/available-notification/ui";
import NavComponent from "~/components/nav/ui";
import SectionContainer from "~/components/section-container/ui";

interface Props {
  needNav?: boolean;
}

export default function Header({ needNav = true }: Props) {
  return (
    <SectionContainer
      as={"header"}
      className={classNames(
        "flex-row align-center justify-between bg-white",
        classes.container,
      )}
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
      <div className="flex-row align-center gap-5">
        {needNav && <NavComponent className={classes.nav} />}
        <AvailableNotification className={classes.available} />
      </div>
    </SectionContainer>
  );
}
