import { IScreensCarouselItem } from "~/components/screens-carousel/model/interface";
import Kanban from "~/public/myaudza/carousel/kanban.svg";
import Chat from "~/public/myaudza/carousel/chat.svg";
import Stack from "~/public/myaudza/carousel/stack.svg";
import Calendar from "~/public/myaudza/carousel/calendar.svg";
import Box from "~/public/myaudza/carousel/box.svg";
import CashStack from "~/public/myaudza/carousel/cash-stack.svg";
import Trash from "~/public/myaudza/carousel/trash.svg";
import { SvgType } from "~/shared/model";

export type MyaudzaCarouselIconType =
  | "kanban"
  | "chat"
  | "stack"
  | "calendar"
  | "box"
  | "cashStack"
  | "trash";

export const myaudzaCarouselItems: IScreensCarouselItem<MyaudzaCarouselIconType>[] =
  [
    {
      image: "1",
      card: {
        title: "Гибкое управление задачами",
        text: "Статусы, приоритеты и структура проекта в одном месте",
        icon: "kanban",
      },
    },
    {
      image: "2",
      card: {
        title: "Коммуникация внутри продукта",
        text: "Обсуждение задач без перехода в сторонние сервисы",
        icon: "chat",
      },
    },
    {
      image: "3",
      card: {
        title: "Все детали задачи в одном экране",
        text: "Статусы, участники, файлы и обсуждение",
        icon: "stack",
      },
    },
    {
      image: "4",
      card: {
        title: "Планирование по времени",
        text: "Задачи и дедлайны в формате календаря",
        icon: "calendar",
      },
    },
    {
      image: "5",
      card: {
        title: "Структура проектов и команд",
        text: "Иерархия, навигация и быстрый доступ к разделам",
        icon: "box",
      },
    },
    {
      image: "6",
      card: {
        title: "Монетизация через продукт",
        text: "Тарифы и ограничения встроены в пользовательский сценарий",
        icon: "cashStack",
      },
    },
    {
      image: "7",
      card: {
        title: "Контроль и история задач",
        text: "Архив, статусы и управление данными проекта",
        icon: "trash",
      },
    },
  ];

export const myaudzaCarouselIconsMap: Record<MyaudzaCarouselIconType, SvgType> =
  {
    kanban: Kanban,
    chat: Chat,
    stack: Stack,
    calendar: Calendar,
    box: Box,
    cashStack: CashStack,
    trash: Trash,
  };
