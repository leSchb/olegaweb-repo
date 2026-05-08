export interface IScreensCarouselItem<
  IconType extends string | number | symbol,
> {
  title: string;
  text: string;
  image: string;
  icon: IconType;
}
