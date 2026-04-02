import Icon3Circles from "~/public/hero/3.svg";
import Icon2Circles from "~/public/hero/2.svg";
import Icon1Circle from "~/public/hero/1.svg";
import IconDownload from "~/public/hero/download.svg";
import IconLink from "~/public/hero/link.svg";
import { IHeroItem } from ".";

export const heroItems: IHeroItem[] = [
  {
    Icon: Icon3Circles,
    title: "глубоко \nвникаю",
  },
  {
    Icon: Icon2Circles,
    title: "собираю \nлогику",
  },
  {
    Icon: Icon1Circle,
    title: "довожу \nдо результата",
  },
  {
    Icon: IconDownload,
    title: "Скачать \nрезюме",
    href: "#",
    big: true,
    bgColor: "black",
    textColor: "white",
  },
  {
    Icon: IconLink,
    title: "Смотреть \nкейсы",
    href: "#",
    mobileBig: true,
    bgColor: "red-main",
    textColor: "white",
  },
];
