import classes from "./reviews.module.css";
import ReviewsCard from "./card";
import ReviewsLink from "./link";
import { reviewsCards } from "../model";

export default function ReviewsContent() {
  return (
    <ul className={`flex-row mandatory-x-container scrollbar ${classes.container}`}>
      <ReviewsLink />
      {reviewsCards.map((item, index) => (
        <ReviewsCard key={item.name + index} {...item} />
      ))}
    </ul>
  );
}
