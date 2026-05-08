"use client";
import classes from "./hero.module.css";
import ScreensCarousel from "~/components/screens-carousel/ui";
import CasePageHero from "~/components/case-page-hero/ui";
import {
  myaudzaCarouselIconsMap,
  myaudzaCarouselItems,
  myaudzaHero,
} from "../../model";

export default function MyaudzaHero() {
  return (
    <div className={`flex-column ${classes.hero}`}>
      <CasePageHero {...myaudzaHero} className={classes.container} />
      <ScreensCarousel
        className={classes.carousel}
        itemClassName={classes.carouselItem}
        items={myaudzaCarouselItems}
        iconsMap={myaudzaCarouselIconsMap}
      />
    </div>
  );
}
