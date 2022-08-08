import { IPersonsDTO } from "@modules/transactions/dtos/IPersonsDTO";
import { IPersonsRepository } from "@modules/transactions/repositories/IPersonsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
  amount: number;
}

@injectable()
export class UpdatePersonsUseCase {
  constructor(
      @inject("PersonsRepository")
      private personsRepository: IPersonsRepository,
    ){}

  async execute({id,amount}:IRequest): Promise<void > {
    
    const person = await this.personsRepository.findById(id);

      if(person){
        person.amount= person.amount + amount;
        await this.personsRepository.update(person);
      }
    }
    
}