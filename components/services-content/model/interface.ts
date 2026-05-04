import { IBlockContainer } from "~/components/block-container/model/interface";

export interface IServicesService {
  title: string;
  price: string;
}

export interface IServicesCard extends IBlockContainer {
  services: IServicesService[];
  deadline: string;
}
