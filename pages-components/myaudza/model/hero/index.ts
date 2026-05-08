import { ICaseHero } from "~/components/case-page-hero/model/interface";

export const myaudzaHero: ICaseHero = {
  bgColor: null,
  project: {
    name: "Мяудза",
    description: " — задачи, коммуникация и планирование — в одной системе",
  },
  role: "Спроектировал продукт, который объединяет задачи, чаты и процессы в единый рабочий интерфейс",
  button: {
    text: "Смотреть сайт проекта",
    color: "red-main",
    bgColor: "red-main-01",
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
