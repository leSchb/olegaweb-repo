export type NumbersCardColorType = "border" | "default" | "red" | "black";
export type NumbersCartSizeType = "large" | "big" | "small";

export interface INumbersCardColor {
  bgColor: string;
  textColor: string;
  subTextColor?: string;
}

export interface INumbersCard {
  title: string;
  text: string;
  size: NumbersCartSizeType;
  color: NumbersCardColorType;
}

export type INumbersCardColors = Record<
  NumbersCardColorType,
  INumbersCardColor
>;
