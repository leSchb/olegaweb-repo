export interface IBlockContainerButton {
  text: string;
  href?: string;
}

export interface IBlockContainer {
  title: string;
  subtitle: string;
  button?: IBlockContainerButton;
  color: BlockContainerColor;
}

export type BlockContainerColor = "white" | "black" | "red" | "redBorder";

export interface IBlockContainerTextColor {
  default: string;
  subtitle: string;
}

export interface IBlockContainerButtonColor {
  bgColor: string;
  textColor: string;
}

export interface IBlockContainerColor {
  bgColor: string;
  blockColor: string;
  button?: IBlockContainerButtonColor;
  text?: IBlockContainerTextColor;
}

export type BlockContainerColorMeta = Record<
  BlockContainerColor,
  IBlockContainerColor
>;
