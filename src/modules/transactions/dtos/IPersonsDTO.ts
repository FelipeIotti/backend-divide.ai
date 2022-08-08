import { ObjectID } from "typeorm";

export interface IPersonsDTO {
  id?: ObjectID;

  name: string;

  amount: number;
}