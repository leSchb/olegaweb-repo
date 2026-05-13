import classes from "./landings.module.css";
import PageWrapper from "~/components/page-wrapper/ui";
import CasePageHero from "~/components/case-page-hero/ui";
import Button from "~/shared/components/button";
import { klerkHero } from "../model";
import ScreensCarousel from "~/components/screens-carousel/ui";
import { klerkCarouselItems } from "../model/carousel";

export default function KlerkPage() {
  return (
    <PageWrapper>
      <section className="section-container" id={"hero"}>
        <CasePageHero
          {...klerkHero}
          stackButton={
            <Button
              bgColor={"red-main-01"}
              className={classes.heroButton}
              as={"a"}
              href="#!"
            >
              <span className="red-main bounded medium text-14-12">
                Тизер-кейс
              </span>
            </Button>
          }
          className={classes.hero}
        />
      </section>
      <ScreensCarousel
        items={klerkCarouselItems}
        iconsMap={{}}
        imagesDir="/klerk/"
        imageSize={{ width: 576, height: 320 }}
        className={classes.screens}
      />
    </PageWrapper>
  );
}
