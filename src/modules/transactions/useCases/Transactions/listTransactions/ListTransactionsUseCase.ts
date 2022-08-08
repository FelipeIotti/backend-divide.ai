import { inject, injectable } from "tsyringe";
import { Transactions } from "../../../infra/typeorm/entities/Transactions";
import { ITransactionsRepository } from "../../../repositories/ITransactionsRepository";

@injectable()
export class ListTransactionsUseCase {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository) {}

  async execute(): Promise<Transactions[]> {
    const transactions = await this.transactionsRepository.list();

    return transactions;
  }
}