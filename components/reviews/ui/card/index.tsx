import classes from "./reviews-card.module.css";
import Icon from "~/public/reviews/profiru.svg";
import Stars from "~/public/reviews/stars.svg";
import Container from "~/shared/components/container/ui";
import { IReviewsCard } from "../../model";

type Props = IReviewsCard;

export default function ReviewsCard({ name, review }: Props) {
  return (
    <Container
      bgColor="light-gray"
      className={`flex-column gap-5 mandatory-x-item ${classes.container}`}
    >
      <div className="flex-row align-center gap-3">
        <Icon />
        <h5 className="bounded medium text-16-14">{name}</h5>
      </div>
      <Stars />
      <p className="onest gray text-16-12">{review}</p>
    </Container>
  );
}
