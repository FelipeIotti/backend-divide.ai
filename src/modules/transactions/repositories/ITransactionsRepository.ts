import { Transactions } from "../infra/typeorm/entities/Transactions";
import { ITransactionsDTO } from "../dtos/ITransactionsDTO";

export interface ITransactionsRepository {
  create(data: ITransactionsDTO): Promise<void>;
  findByName(name: string): Promise<Transactions>;
  findById(id: string): Promise<Transactions>;
  list(): Promise<Transactions[]>;
  update(data: ITransactionsDTO): Promise<void>;
  delete(id: string):Promise<void>;
}