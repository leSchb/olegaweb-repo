import { IFooterLink } from "./interface";
import Vk from "~/public/footer/vk.svg";
import Tg from "~/public/footer/tg.svg";
import Phone from "~/public/footer/phone.svg";

export const footerLinks: IFooterLink[] = [
  {
    value: "Вконтакте",
    Icon: Vk,
    href: "",
  },
  {
    value: "Телеграм",
    Icon: Tg,
    href: "",
  },
  {
    value: "+7 (918) 088-46-35",
    Icon: Phone,
    href: "tel: +79180884635",
  },
];
