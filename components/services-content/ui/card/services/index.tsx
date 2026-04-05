import Container from "~/shared/components/container/ui";
import classes from "./services.module.css";
import { IServicesService } from "~/components/services-content/model";

interface Props {
  cardColor: string;
  textColor: string;
  services: IServicesService[];
}

export default function ServicesCardServices({
  cardColor,
  textColor,
  services,
}: Props) {
  return (
    <ul className="flex-column gap-2">
      {services.map((item, index) => (
        <Container
          key={item.title + index}
          as="li"
          className={`flex-row justify-between ${classes.item}`}
          bgColor={cardColor}
        >
          <span className={`${textColor} onest text-16-12`}>{item.title}</span>
          <span className={`${textColor} onest bold text-16-12`}>
            {item.price}
          </span>
        </Container>
      ))}
    </ul>
  );
}
