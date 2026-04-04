import Image from "next/image";
import classes from "./photo.module.css";

export default function AboutMePhoto() {
  return (
    <div className={classes.image}>
      <Image
        src={"/about-me/photo.png"}
        width={395}
        height={360}
        alt="Парень в серой футболке с короткой стрижкой"
      />
    </div>
  );
}
