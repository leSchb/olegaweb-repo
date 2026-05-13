import classNames from "classnames";

import classes from "./cases-page-hero.module.css";

import CasePageHeroProject from "./project";
import CaseButton from "./button";
import CaseStack from "./stack";
import SectionContainer from "~/components/section-container/ui";
import { ICaseHero } from "../model/interface";

type Props = ICaseHero & {
  className?: string;
  buttonClassName?: string;
  stackClassName?: string;
  stackButton?: React.ReactNode;
};

export default function CasePageHero({
  bgColor,
  project,
  role,
  button,
  stack,
  className,
  buttonClassName,
  stackClassName,
  stackButton,
}: Props) {
  return (
    <SectionContainer
      className={classNames(`flex-column`, classes.container, className)}
      bgColor={bgColor}
    >
      <CasePageHeroProject {...project} />
      <p className="onest text-16 black">{role}</p>
      <div className={classNames("flex", classes.bottom)}>
        <CaseButton {...button} className={buttonClassName} />
        <CaseStack
          stack={stack}
          className={stackClassName}
          button={stackButton}
        />
      </div>
    </SectionContainer>
  );
}
