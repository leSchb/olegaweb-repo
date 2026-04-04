import classes from "./card.module.css";
import Container from "~/shared/components/container/ui";
import Image from "next/image";
import { IAboutMeCard } from "~/components/about-me-content/model/interface";

type Props = IAboutMeCard;

export default function AboutMeCard({
  image,
  text,
  imageHeigth,
  imageWidth,
}: Props) {
  return (
    <Container
      bgColor="light-gray"
      className={`mandatory-x-item flex-column justify-between ${classes.container}`}
    >
      <Image
        src={image}
        width={imageWidth}
        height={imageHeigth}
        style={{
          width: imageWidth,
          height: imageHeigth,
        }}
        alt=""
      />
      <p className={`text-16-12 onest black`}>{text}</p>
    </Container>
  );
}
