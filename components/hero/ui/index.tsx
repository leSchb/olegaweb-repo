import classes from "./hero.module.css";
import SectionContainer from "~/components/section-container/ui";
import HeroTitle from "./title";
import HeroItems from "./items";

export default function HeroSection() {
  return (
    <SectionContainer className={`flex-column ${classes.container}`}>
      <HeroTitle />
      <HeroItems />
    </SectionContainer>
  );
}
