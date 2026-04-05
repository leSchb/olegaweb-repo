import { IServicesCard, ServicesColorMeta } from "./interface";

export const servicesColorsMeta: ServicesColorMeta = {
  white: {
    bgColor: "light-gray",
    blockColor: "black-05",
    button: {
      bgColor: "black",
      textColor: "white",
    },
    text: {
      default: "black",
      subtitle: "gray",
    },
  },
  black: {
    bgColor: "black",
    blockColor: "white-1",
    button: {
      bgColor: "red-main",
      textColor: "white",
    },
    text: {
      default: "white",
      subtitle: "white",
    },
  },
  red: {
    bgColor: "red-main",
    blockColor: "white-2",
    button: {
      bgColor: "white",
      textColor: "black",
    },
    text: {
      default: "white",
      subtitle: "white",
    },
  },
};

export const servicesCards: IServicesCard[] = [
  {
    title: "Лендинг",
    subtitle: "понятные и аккуратные страницы под продукт или услугу",
    services: [
      {
        title: "дизайн в Figma",
        price: "от 30 000 ₽",
      },
      {
        title: "дизайн + Tilda",
        price: "от 60 000 ₽",
      },
      {
        title: "дизайн + код",
        price: "от 100 000 ₽",
      },
    ],
    deadline: "18-30 дней",
    buttonText: "Обсудить лендинг",
    color: "white",
  },
  {
    title: "UX/UI дизайн продукта",
    subtitle: "сервисы, личные кабинеты и сложные интерфейсы",
    services: [
      {
        title: "дизайн в Figma",
        price: "от 70 000 ₽",
      },
      {
        title: "дизайн + Tilda",
        price: "от 150 000 ₽",
      },
    ],
    deadline: "30-90 дней",
    buttonText: "Обсудить проект",
    color: "black",
  },
  {
    title: "UX/UI дизайн продукта",
    subtitle: "сервисы, личные кабинеты и сложные интерфейсы",
    services: [
      {
        title: "дизайн в Figma",
        price: "от 70 000 ₽",
      },
      {
        title: "дизайн + Tilda",
        price: "от 150 000 ₽",
      },
    ],
    deadline: "30-90 дней",
    buttonText: "Обсудить проект",
    color: "red",
  },
];
