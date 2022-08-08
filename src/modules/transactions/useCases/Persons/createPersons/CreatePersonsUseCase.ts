import { Persons } from "@modules/transactions/infra/typeorm/entities/Persons";
import { IPersonsRepository } from "@modules/transactions/repositories/IPersonsRepository";
import { inject, injectable } from "tsyringe";
import { ObjectID } from "typeorm";

interface IRequest {
  id?: ObjectID;

  name: string;
}

@injectable()
export class CreatePersonsUseCase {
  constructor(
    @inject("PersonsRepository")
    private personsRepository: IPersonsRepository,
   
  ) {}

  async execute({name}: IRequest): Promise<void> {

    await this.personsRepository.create({name, amount: 0});
  }
}