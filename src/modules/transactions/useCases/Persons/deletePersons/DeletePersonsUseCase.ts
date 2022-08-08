import { IPersonsRepository } from "@modules/transactions/repositories/IPersonsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
}

@injectable()
export class DeletePersonsUseCase {
  constructor(
      @inject("PersonsRepository")
      private personsRepository: IPersonsRepository,
    ){}

  async execute({id}:IRequest): Promise<void> {
    
    await this.personsRepository.delete(id);
    
    
  }
}