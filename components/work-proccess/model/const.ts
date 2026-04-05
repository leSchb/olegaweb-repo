import FirstIcon from "~/public/work-proccess/1.svg";
import SecondIcon from "~/public/work-proccess/2.svg";
import ThirdIcon from "~/public/work-proccess/3.svg";
import FourthIcon from "~/public/work-proccess/4.svg";
import FirstPost from "~/public/work-proccess/1-post.svg";
import SecondPost from "~/public/work-proccess/2-post.svg";
import ThirdPost from "~/public/work-proccess/3-post.svg";

import { IWorkProccessCard } from "./interface";

export const workProccessCards: IWorkProccessCard[] = [
  {
    title: "Исследование",
    text: "изучение задачи и пользователей",
    Icon: FirstIcon,
    postIcon: FirstPost,
  },
  {
    title: "UX-проектирование",
    text: "структура и прототипы",
    Icon: SecondIcon,
    postIcon: SecondPost,
  },
  {
    title: "UI-дизайн",
    text: "визуальный интерфейс",
    Icon: ThirdIcon,
    postIcon: ThirdPost,
  },
  {
    title: "Передача в разработку",
    text: "подготовка макетов и поддержка команды",
    Icon: FourthIcon,
    postIcon: null,
  },
];
