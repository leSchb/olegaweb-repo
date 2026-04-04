import Image from "next/image";
import AboutMeBaseSection from "../base-section";
import classes from "./programms.module.css";

const programmsList: string[] = ["figma", "framer", "gpt", "hz", "tilda"];

export default function AboutMeProgramms() {
  return (
    <AboutMeBaseSection title="Программы" className={classes.container}>
      <ul className={`flex-row ${classes.list}`}>
        {programmsList.map((item, index) => (
          <Image
            key={item + index}
            src={`/about-me/${item}.svg`}
            width={48}
            height={48}
            className={classes.image}
            alt={item}
          />
        ))}
      </ul>
    </AboutMeBaseSection>
  );
}
