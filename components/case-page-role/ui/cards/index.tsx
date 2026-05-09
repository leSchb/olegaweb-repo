import classes from "./cards.module.css";
import BlockContainer from "~/components/block-container/ui";
import { IBlockContainer } from "~/components/block-container/model";

interface Props {
  cards: IBlockContainer[];
}

export default function CaseRoleCards({ cards }: Props) {
  return (
    <ul className={`grid ${classes.container}`}>
      {cards.map((item, index) => (
        <BlockContainer
          key={item.title + index}
          {...item}
          className={`${classes.card} flex-column`}
          titleClassName={`${classes.title} justify-between`}
        />
      ))}
    </ul>
  );
}
