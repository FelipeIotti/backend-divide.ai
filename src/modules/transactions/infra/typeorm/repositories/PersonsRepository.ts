import { IPersonsDTO } from "@modules/transactions/dtos/IPersonsDTO";
import { IPersonsRepository } from "@modules/transactions/repositories/IPersonsRepository";
import { getMongoRepository, MongoRepository} from "typeorm";
import { Persons } from "../entities/Persons";

export class PersonsRepository implements IPersonsRepository {
  private repository: MongoRepository<Persons>;

  constructor(){
    this.repository = getMongoRepository(Persons);
  }

  async create({name, amount}: IPersonsDTO): Promise<void> {
    const transaction = this.repository.create({
      name,
      amount
    });
  
    await this.repository.save(transaction)
  }

  async findById(id: string): Promise<Persons> {
    const transaction = await this.repository.findOne(id);
    return transaction;
  }

  async findByName(name: string): Promise<Persons> {
    //console.log(client);
    const layers = await this.repository.findOne({
      where: {
       'name': { $eq: `${name}`}
      }
    });
    
    return layers;
  }

  async list(): Promise<Persons[]> {
    const lawyers = await this.repository.find();
    return lawyers;
  }

  async update(data: IPersonsDTO):Promise<void> {
    const person = await this.repository.findOne(data.id);
  
    person.name=data.name;
    person.amount=person.amount + data.amount;
    
    await this.repository.save(person);
  }

  async delete(id: string): Promise<void> {
    const person = await this.repository.findOne(id);
    
    await this.repository.delete(person.id);
  }
}