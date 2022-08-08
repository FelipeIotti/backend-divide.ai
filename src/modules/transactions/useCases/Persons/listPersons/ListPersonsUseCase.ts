import { inject, injectable } from "tsyringe";
import { Persons } from "../../../infra/typeorm/entities/Persons";
import { IPersonsRepository } from "../../../repositories/IPersonsRepository";

@injectable()
export class ListPersonsUseCase {
  constructor(
    @inject('PersonsRepository')
    private personsRepository: IPersonsRepository) {}

  async execute(): Promise<Persons[]> {
    const persons = await this.personsRepository.list();

    return persons;
  }
}