import { INumbersCard, INumbersCardColors } from ".";

export const numbersCardColorsMeta: INumbersCardColors = {
  default: {
    bgColor: "light-gray",
    textColor: "black",
    subTextColor: "text-gray",
  },
  border: {
    bgColor: "transparent",
    textColor: "red-main",
  },
  red: {
    bgColor: "red-main",
    textColor: "white",
  },
  black: {
    bgColor: "black",
    textColor: "white",
  },
};

export const numbersCards: INumbersCard[] = [
  {
    title: "5+ лет",
    text: "в дизайне интерфейсов",
    size: "large",
    color: "black",
  },
  {
    title: "10+ сценариев",
    text: "для сложных интерфейсов",
    size: "big",
    color: "border",
  },
  {
    title: "30+ проектов",
    text: "сервисов, лендингов и сайтов",
    size: "small",
    color: "default",
  },
  {
    title: "3+ года",
    text: "в продуктовых командах",
    size: "big",
    color: "red",
  },
  {
    title: "75+",
    text: "уникальных экранов",
    size: "small",
    color: "default",
  },
];
