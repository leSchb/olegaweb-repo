import classes from "./work-proccess-card.module.css";
import { IWorkProccessCard } from "../../model";
import Container from "~/shared/components/container/ui";

type Props = IWorkProccessCard;

export default function WorkProccessCard({
  title,
  text,
  Icon,
  postIcon: Post,
}: Props) {
  return (
    <li className={`flex-row mandatory-x-item ${classes.container}`}>
      <Container
        bgColor="light-gray"
        className={`flex-column jusitfy-between gap-4 ${classes.content}`}
      >
        <div className={classes.icon}>
          <Icon />
        </div>
        <div className={`flex-column ${classes.text}`}>
          <h5 className="text-14-12 bounded bold black">{title}</h5>
          <span className="onest text-14-12 gray">{text}</span>
        </div>
      </Container>
      {Post && <Post className={classes.postIcon} />}
    </li>
  );
}
