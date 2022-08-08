import { ObjectID } from "typeorm";
import { IPersonsDTO } from "./IPersonsDTO";

export interface ITransactionsDTO {
  id?: ObjectID;

  name: string;

  memberPay: string;

  amount: number;

  type: string;

  category: string;

  date: Date;

  persons: IPersonsDTO[];
}