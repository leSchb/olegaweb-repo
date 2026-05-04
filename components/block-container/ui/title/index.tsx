import classNames from "classnames";
import { IBlockContainerTextColor } from "../../model";

interface Props {
  title: string;
  subtitle: string;
  textColor?: IBlockContainerTextColor;
}

export default function BlockContainerTitle({
  title,
  subtitle,
  textColor,
}: Props) {
  return (
    <div className="flex-column gap-3">
      <h5
        className={classNames(
          `bounded bold text-20-16`,
          textColor?.default || "white",
        )}
      >
        {title}
      </h5>
      <p
        className={classNames(
          `onest text-16-12`,
          textColor?.subtitle || "white",
        )}
      >
        {subtitle}
      </p>
    </div>
  );
}
