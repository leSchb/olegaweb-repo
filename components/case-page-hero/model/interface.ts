import { IImage } from "~/shared/model";

export type CaseHeroBgColor = "light-gray" | null;

export interface ICaseProject {
  name: string;
  description: string;
}

export interface ICaseButton {
  text: string;
  bgColor: string;
  color: string;
}

export type IStackItem = IImage;

export interface ICaseHero {
  bgColor: CaseHeroBgColor;
  project: ICaseProject;
  role: string;
  button: ICaseButton;
  stack: IStackItem[];
}
