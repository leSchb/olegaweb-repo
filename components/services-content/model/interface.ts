export interface IServicesColor {
  bgColor: string;
  blockColor: string;
  button: {
    bgColor: string;
    textColor: string;
  };
  text: {
    default: string;
    subtitle: string;
  };
}

export type ServicesCardColor = "white" | "black" | "red";

export type ServicesColorMeta = Record<ServicesCardColor, IServicesColor>;

export interface IServicesService {
  title: string;
  price: string;
}

export interface IServicesCard {
  title: string;
  subtitle: string;
  services: IServicesService[];
  deadline: string;
  buttonText: string;
  color: ServicesCardColor;
}
