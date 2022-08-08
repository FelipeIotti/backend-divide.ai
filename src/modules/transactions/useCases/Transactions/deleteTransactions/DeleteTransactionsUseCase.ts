import { ITransactionsRepository } from "@modules/transactions/repositories/ITransactionsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
}

@injectable()
export class DeleteTransactionsUseCase {
  constructor(
      @inject("TransactionsRepository")
      private transactionsRepository: ITransactionsRepository,
    ){}

  async execute({id}:IRequest): Promise<void> {
    
    await this.transactionsRepository.delete(id);
    
    
  }
}