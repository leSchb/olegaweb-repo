import classes from "./link.module.css";
import Icon from "~/public/reviews/link.svg";
import Star from "~/public/reviews/star.svg";
import ProfiRu from "~/public/reviews/profiru_logo.svg";
import Container from "~/shared/components/container/ui";

export default function ReviewsLink() {
  return (
    <Container
      as="li"
      bgColor="black"
      className={`flex-column justify-between flex-1 relative mandatory-x-item ${classes.container}`}
    >
      <a
        href="#!"
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon />
      </a>
      <div className="flex-row align-center gap-2">
        <Star />
        <span className="bounded bold text-20 white">5.0</span>
      </div>
      <ProfiRu />
    </Container>
  );
}
