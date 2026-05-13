export interface IScreensCarouselItem<
  IconType extends string | number | symbol,
> {
  card?: {
    title: string;
    text: string;
    icon: IconType;
  };
  image: string;
}
