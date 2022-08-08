import { ITransactionsDTO } from "@modules/transactions/dtos/ITransactionsDTO";
import { ITransactionsRepository } from "@modules/transactions/repositories/ITransactionsRepository";
import { getMongoRepository, MongoRepository} from "typeorm";
import { Transactions } from "../entities/Transactions";

export class TransactionsRepository implements ITransactionsRepository {
  private repository: MongoRepository<Transactions>;

  constructor(){
    this.repository = getMongoRepository(Transactions);
  }

  async create({name,memberPay,amount, category,date,persons,type}: ITransactionsDTO): Promise<void> {
    const transaction = this.repository.create({
      name,
      memberPay,
      amount,
      category,
      date,
      persons,
      type
    });
  
    await this.repository.save(transaction)
  }

  async findById(id: string): Promise<Transactions> {
    const transaction = await this.repository.findOne(id);
    return transaction;
  }

  async findByName(name: string): Promise<Transactions> {
    //console.log(client);
    const layers = await this.repository.findOne({
      where: {
       'name': { $eq: `${name}`}
      }
    });
    
    return layers;
  }

  async list(): Promise<Transactions[]> {
    const lawyers = await this.repository.find();
    return lawyers;
  }

  async update(data: ITransactionsDTO):Promise<void> {
    const transaction = await this.repository.findOne(data.id);

      transaction.name = data.name,
      transaction.amount = data.amount,
      transaction.category = data.category,
      transaction.date = data.date,
      transaction.persons = data.persons
      transaction.type = data.type;

    await this.repository.save(transaction);
  }

  async delete(id: string): Promise<void> {
    const lawyer = await this.repository.findOne(id);
    
    await this.repository.delete(lawyer.id);
  }
}