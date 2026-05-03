import { ICasesCard } from "./interface";

export const casesCards: ICasesCard[] = [
  {
    image: "/cases/myaudza.png",
    title: "Мяудза",
    text: "дизайн веб и десктоп интерфейсов платформы для управления задачами и командами",
    size: "large",
    linkHref: "/myaudza",
  },
  {
    image: "/cases/klerk.png",
    title: "Клерк.ру",
    text: "разработка интерфейсов сервисов и личных кабинетов пользователей",
    size: "big",
    linkHref: "/klerk",
  },
  {
    image: "/cases/mebel.png",
    title: "IronMebel",
    text: "проектирование интерфейса управления заказами для дилеров мебельной компании",
    size: "default",
    linkHref: "/iron-mebel",
  },
  {
    image: "/cases/landings.png",
    title: "Лэндинги",
    text: "коммерческие сайты и e-commerce",
    size: "default",
    manyImages: true,
  },
];
