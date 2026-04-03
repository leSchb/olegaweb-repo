export type ChooseRoleCardSize = "default" | "big";
export type ChooseRoleCardColor = "light-gray" | "black";

export interface IChooseRoleCard {
  title: string;
  text: string;
  linkText: string;
  linkHref: string;
  size: ChooseRoleCardSize;
  color: ChooseRoleCardColor;
}
