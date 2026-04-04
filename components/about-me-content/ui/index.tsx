import classses from "./about-me.module.css";
import AboutMeCards from "./cards";
import AboutMeMain from "./main";
import AboutMePhoto from "./photo";

export default function AboutMeContent() {
  return (
    <div className={`flex relative ${classses.container}`}>
      <AboutMePhoto />
      <div className={`flex-column ${classses.content}`}>
        <AboutMeMain />
        <AboutMeCards />
      </div>
    </div>
  );
}
