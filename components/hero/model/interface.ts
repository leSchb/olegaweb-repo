export interface IHeroItem {
  Icon: React.FC<React.SVGProps<React.SVGElementType>>;
  title: string;
  href?: string;
  big?: boolean;
  mobileBig?: boolean;
  bgColor?: string;
  textColor?: string;
}
