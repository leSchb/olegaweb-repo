import { BlockContainerColorMeta } from "./interface";

export const blockContainerColorsMeta: BlockContainerColorMeta = {
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
  redBorder: {
    bgColor: "white",
    blockColor: "light-gray",
    button: {
      bgColor: "red-main",
      textColor: "white",
    },
    text: {
      default: "black",
      subtitle: "gray",
    }
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
