import classes from "./services-card.module.css";
import Container from "~/shared/components/container/ui";
import ServicesCardServices from "./services";
import Button from "~/shared/components/button";
import { IServicesCard } from "../../model";
import { servicesColorsMeta } from "../../model/const";

type Props = IServicesCard;

export default function ServicesCard({
  title,
  subtitle,
  services,
  deadline,
  buttonText,
  color,
}: Props) {
  const colorMeta = servicesColorsMeta[color];
  return (
    <Container
      as="li"
      className={`flex-column justify-between gap-6 ${classes.container}`}
      bgColor={colorMeta.bgColor}
      needHoverAnimation={false}
    >
      <div className={`flex-column gap-6`}>
        <div className="flex-column gap-3">
          <h5 className={`bounded bold text-20-16 ${colorMeta.text.default}`}>
            {title}
          </h5>
          <p className={`onest text-16-12 ${colorMeta.text.subtitle}`}>
            {subtitle}
          </p>
        </div>
        <ServicesCardServices
          textColor={colorMeta.text.default}
          cardColor={colorMeta.blockColor}
          services={services}
        />
      </div>
      <div className="flex-column gap-4">
        <p className={`self-center onest text-16-12 ${colorMeta.text.default}`}>
          сроки — <span className="bold">{deadline}</span>
        </p>
        <Button as={"a"} href="#contacts" bgColor={colorMeta.button.bgColor} className={classes.button}>
          <span
            className={`bounded medium text-14-12 ${colorMeta.button.textColor}`}
          >
            {buttonText}
          </span>
        </Button>
      </div>
    </Container>
  );
}
