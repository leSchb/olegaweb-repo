import classes from "./main.module.css";
import Container from "~/shared/components/container/ui";
import AboutMeProgramms from "./programms";
import AboutMeSkills from "./skills";

export default function AboutMeMain() {
  return (
    <Container
      bgColor="light-gray"
      className={`flex-column ${classes.container}`}
      needHoverAnimation={false}
    >
      <div className="flex-column gap-4 flex-1">
        <h2 className="bounded text-24-18">Я продуктовый UX/UI дизайнер</h2>
        <p className="onest text-16-12 gray">~ 6 242 часов реальной работы</p>
      </div>
      <AboutMeProgramms />
      <AboutMeSkills />
    </Container>
  );
}
