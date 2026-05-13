import classNames from "classnames";

import classes from "./carousel-item.module.css";
import Container from "~/shared/components/container/ui";
import Image from "next/image";
import { IScreensCarouselItem } from "../../model/interface";
import { RecordKeyType, SvgType } from "~/shared/model";

interface Props<T extends RecordKeyType> extends IScreensCarouselItem<T> {
  iconsMap: Record<T, SvgType>;
  className?: string;
  imageDir?: string;
  imageSize?: {
    width: number;
    height: number;
  };
}

export default function ScreensCarouselItem<T extends RecordKeyType>({
  image,
  card,
  iconsMap,
  className,
  imageDir = "/myaudza/carousel/",
  imageSize = { width: 416, height: 260 },
}: Props<T>) {
  const Icon = iconsMap[card?.icon as T] as unknown as SvgType;

  return (
    <>
      {card && (
        <Container
          bgColor={"light-gray"}
          className={classNames(
            `flex-column justify-between gap-4 mandatory-x-item`,
            classes.container,
            className,
          )}
          role="listitem"
        >
          {Icon && <Icon className={classes.icon} />}
          <div className="flex-column gap-2">
            <h2 className="bounded black text-12">{card.title}</h2>
            <p className="bounded text-12 text-gray">{card.text}</p>
          </div>
        </Container>
      )}

      <Image
        src={`${imageDir}${image}.png`}
        alt={""}
        className={`${classes.image} mandatory-x-item`}
        role="listitem"
        style={{
          maxWidth: imageSize.width,
          maxHeight: imageSize.height,
        }}
        {...imageSize}
      />
    </>
  );
}
