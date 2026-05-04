import classNames from "classnames";

import classes from "./services-card.module.css";
import ServicesCardServices from "./services";
import BlockContainer from "~/components/block-container/ui";
import { IServicesCard } from "../../model";
import { blockContainerColorsMeta } from "~/components/block-container/model";

type Props = {
  cardData: IServicesCard;
};

export default function ServicesCard({ cardData }: Props) {
  const colorMeta = blockContainerColorsMeta[cardData.color];
  const { services, deadline } = cardData;
  return (
    <BlockContainer
      {...cardData}
      className={`flex-column justify-between gap-6 ${classes.container}`}
      buttonClassName={classes.button}
      aboveButton={
        <p
          className={classNames(
            `self-center onest text-16-12`,
            colorMeta.text?.default || "white",
          )}
        >
          сроки — <span className="bold">{deadline}</span>
        </p>
      }
    >
      <ServicesCardServices
        textColor={colorMeta.text?.default || "white"}
        cardColor={colorMeta.blockColor}
        services={services}
      />
    </BlockContainer>
  );
}
