import classNames from "classnames";

import { IBlockContainerTextColor } from "../../model";

interface Props {
  title: string;
  subtitle: string;
  textColor?: IBlockContainerTextColor;
  className?: string;
}

export default function BlockContainerTitle({
  title,
  subtitle,
  textColor,
  className,
}: Props) {
  return (
    <div className={classNames(`flex-column gap-3`, className)}>
      <h5
        className={classNames(
          `bounded bold text-20-14`,
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
