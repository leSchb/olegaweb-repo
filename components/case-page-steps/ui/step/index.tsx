import classNames from "classnames";

import classes from "./step.module.css";
import Image from "next/image";
import CasePageStepContent from "./content";
import { ICasePageStep } from "../../model";

interface Props {
  step: ICasePageStep;
  stepsCount: number;
  imagesDir: string;
  index: number;
  className?: string;
}

export default function CasePageStep({
  step,
  imagesDir,
  stepsCount,
  index,
  className,
}: Props) {
  return (
    <div
      role="listitem"
      className={classNames(
        className,
        classes.container,
        "flex justify-between",
      )}
    >
      <CasePageStepContent {...step} stepsCount={stepsCount} index={index} />
      <Image
        src={`${imagesDir}/${index}.png`}
        alt=""
        width={824}
        height={515}
        className={classes.image}
      />
    </div>
  );
}
