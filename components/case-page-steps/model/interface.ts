import { ILinkItem } from "~/shared/model";

export interface ICasePageStep {
  title: string;
  text: string;
  list?: string[];
  link?: ILinkItem;
}
