import { Persons } from "../infra/typeorm/entities/Persons";
import { IPersonsDTO } from "../dtos/IPersonsDTO";

export interface IPersonsRepository {
  create(data: IPersonsDTO): Promise<void>;
  findByName(name: string): Promise<Persons>;
  findById(id: string): Promise<Persons>;
  list(): Promise<Persons[]>;
  update(data: IPersonsDTO): Promise<void>;
  delete(id: string):Promise<void>;
}