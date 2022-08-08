import { IPersonsDTO } from "@modules/transactions/dtos/IPersonsDTO";
import { IPersonsRepository } from "@modules/transactions/repositories/IPersonsRepository";
import { ITransactionsRepository } from "@modules/transactions/repositories/ITransactionsRepository";
import { inject, injectable } from "tsyringe";
import { ObjectID } from "typeorm";

interface IRequest {
  id?: ObjectID;

  name: string;

  memberPay: string;

  amount: number;

  type: string;

  category: string;

  date: Date;

  persons: IPersonsDTO[];
}

@injectable()
export class CreateTransactionsUseCase {
  constructor(
    @inject("TransactionsRepository")
    private transactionsRepository: ITransactionsRepository,
    @inject("PersonsRepository")
    private personsRepository: IPersonsRepository,
  ) {}

  async execute({name, memberPay,amount, type, category, date, persons}: IRequest): Promise<void> {
    
    const memberPays = await  this.personsRepository.findByName(memberPay);
    
    if(memberPays && amount){
      memberPays.amount = -amount;
      await this.personsRepository.update(memberPays);
    }

    const members = await this.personsRepository.list();
    
    members.map(async(member) => {
      const membersToDivide =  persons.find((item)=> item.name === member.name) 

      
      //console.log(membersToDivide )
      if(membersToDivide){
        
        member.amount = membersToDivide.amount;
        
        await this.personsRepository.update(member);
        }
    });


    await this.transactionsRepository.create({name,memberPay, amount, type, category, date, persons});
  }
}