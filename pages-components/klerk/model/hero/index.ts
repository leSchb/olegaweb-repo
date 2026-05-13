import { ICaseHero } from "~/components/case-page-hero/model/interface";

export const klerkHero: ICaseHero = {
  bgColor: "light-gray",
  project: {
    name: "Клерк",
    description: " — продуктовый дизайн в реальном сервисе",
  },
  role: "Делал продукт и лендинги для платформы с миллионами пользователей",
  button: {
    text: "Смотреть сайт проекта",
    color: "white",
    bgColor: "black",
  },
  stack: [
    {
      src: "/technologies/figma.svg",
      alt: "Figma",
    },
    {
      src: "/technologies/gpt.svg",
      alt: "Chat GPT",
    },
  ],
};
