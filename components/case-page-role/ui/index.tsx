import classNames from "classnames";

import classes from "./role.module.css";
import SectionContainer from "~/components/section-container/ui";
import CaseRoleText from "./text";
import CaseRoleCards from "./cards";
import { ICaseRole } from "../model";

interface Props extends ICaseRole {
  className?: string;
}

export default function CaseRole({ role, cards, className }: Props) {
  return (
    <SectionContainer
      className={classNames(className, classes.container, "flex")}
      id="my-role"
    >
      <CaseRoleText role={role} />
      <CaseRoleCards cards={cards} />
    </SectionContainer>
  );
}
