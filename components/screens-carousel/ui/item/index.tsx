import classNames from "classnames";

import classes from "./carousel-item.module.css";
import Container from "~/shared/components/container/ui";
import Image from "next/image";
import { IScreensCarouselItem } from "../../model/interface";
import { RecordKeyType, SvgType } from "~/shared/model";

interface Props<T extends RecordKeyType> extends IScreensCarouselItem<T> {
  iconsMap: Record<T, SvgType>;
  className?: string;
}

export default function ScreensCarouselItem<T extends RecordKeyType>({
  image,
  title,
  text,
  icon,
  iconsMap,
  className,
}: Props<T>) {
  const Icon = iconsMap[icon as T] as unknown as SvgType;

  return (
    <>
      <Container
        bgColor={"light-gray"}
        className={classNames(
          `flex-column justify-between gap-4 mandatory-x-item`,
          classes.container,
          className,
        )}
        role="listitem"
      >
        <Icon className={classes.icon} />
        <div className="flex-column gap-2">
          <h2 className="bounded black text-12">{title}</h2>
          <p className="bounded text-12 text-gray">{text}</p>
        </div>
      </Container>

      <Image
        src={`/myaudza/carousel/${image}.png`}
        alt={""}
        width={416}
        height={260}
        className={`${classes.image} mandatory-x-item`}
        role="listitem"
      />
    </>
  );
}
