export type CasesCardSize = "large" | "big" | "default";

export interface ICasesCard {
  image: string;
  title: string;
  text: string;
  size: CasesCardSize;
  linkHref?: string;
  manyImages?: boolean;
}
