import classNames from "classnames";

import classes from "./steps.module.css";
import SectionContainer from "~/components/section-container/ui";
import CasePageStep from "./step";
import { ICasePageStep } from "../model";

interface Props {
  steps: ICasePageStep[];
  imagesDir: string;
  className?: string;
  stepClassName?: string;
}

export default function CasePageSteps({
  steps,
  imagesDir,
  className,
  stepClassName,
}: Props) {
  return (
    <SectionContainer
      className={classNames(className, classes.container, "flex-column")}
      id="key-modules"
      role={"list"}
    >
      {steps.map((item, index) => (
        <CasePageStep
          key={item.title + index}
          step={item}
          imagesDir={imagesDir}
          stepsCount={steps.length}
          className={stepClassName}
          index={index}
        />
      ))}
    </SectionContainer>
  );
}
