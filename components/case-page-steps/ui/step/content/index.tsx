import LinkContainer from "~/shared/components/link/ui";
import CasePageStepList from "./list";
import classes from "./text.module.css";
import { ICasePageStep } from "~/components/case-page-steps/model";

type Props = ICasePageStep & {
  index: number;
  stepsCount: number;
};

export default function CasePageStepContent({
  title,
  text,
  list,
  link,
  index,
  stepsCount,
}: Props) {
  return (
    <div className={`flex-column ${classes.wrapper}`}>
      <span className="text-20-16 bold bounded red-main">
        {index}/{stepsCount}
      </span>

      <div className={`flex-column ${classes.container}`}>
        <div className={`flex-column ${classes.textRows}`}>
          <h3 className="bounded bold text-36-24">{title}</h3>
          <p className="text-14-12 bounded text-gray">{text}</p>
        </div>

        {list && <CasePageStepList items={list} />}

        {link && (
          <LinkContainer
            withIcon
            color="red-main"
            href={link.href}
            text={link.title}
            local={false}
            containerClassName="flex-row align-center gap-2"
            className="text-14-12"
          />
        )}
      </div>
    </div>
  );
}
