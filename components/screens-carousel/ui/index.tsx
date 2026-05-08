"use client";
import classNames from "classnames";
import { useScreensCarousel } from "../lib/hooks";

import classes from "./screens-carousel.module.css";
import ScreensCarouselItem from "./item";
import { IScreensCarouselItem } from "../model/interface";
import { RecordKeyType, SvgType } from "~/shared/model";

interface Props<IconType extends RecordKeyType> {
  items: IScreensCarouselItem<IconType>[];
  className?: string;
  itemClassName?: string;
  iconsMap: Record<IconType, SvgType>;
}

export default function ScreensCarousel<IconType extends RecordKeyType>({
  items,
  className,
  itemClassName,
  iconsMap,
}: Props<IconType>) {
  const { startAnimation, stopAnimation, containerRef } = useScreensCarousel();
  return (
    <div
      role="list"
      className={classNames(
        ` flex-row no-scrollbar`,
        className,
        classes.container,
      )}
      ref={containerRef}
      onPointerEnter={stopAnimation}
      onPointerLeave={startAnimation}
    >
      {items.map((item, index) => (
        <ScreensCarouselItem
          {...item}
          key={item.title + index}
          className={itemClassName}
          iconsMap={iconsMap}
        />
      ))}
      {items.map((item, index) => (
        <ScreensCarouselItem
          {...item}
          key={item.title + index + "duplicate"}
          className={itemClassName}
          iconsMap={iconsMap}
        />
      ))}
    </div>
  );
}
