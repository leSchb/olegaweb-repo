import AboutMeBaseSection from "../base-section";
import classes from "./skills.module.css";

const skills: string[] = [
  "product design",
  "figma",
  "ux исследования",
  "tilda",
  "user flows",
  "прототипирование",
  "ии",
  "ux аудит",
  "ui дизайн",
  "дизайн-системы",
  "компонентные библиотеки",
  "usability",
  "interaction design",
];

export default function AboutMeSkills() {
  return (
    <AboutMeBaseSection title="Навыки">
      <ul className={`flex-row ${classes.container}`}>
        {skills.map((item, index) => (
          <li key={item + index} className={`cursor-default ${classes.item}`}>
            <span className="onest red-main text-16-12">{item}</span>
          </li>
        ))}
      </ul>
    </AboutMeBaseSection>
  );
}
