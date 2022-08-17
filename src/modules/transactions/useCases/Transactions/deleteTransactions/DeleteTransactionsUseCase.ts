import { IPersonsRepository } from "@modules/transactions/repositories/IPersonsRepository";
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
      @inject("PersonsRepository")
      private personsRepository: IPersonsRepository,
    ){}

  async execute({id}:IRequest): Promise<void> {
    
    const transaction= await this.transactionsRepository.findById(id);

    const memberPay = await this.personsRepository.findByName(transaction.memberPay);

    if(memberPay){
      memberPay.amount= transaction.amount;
      await this.personsRepository.update(memberPay);
    }
    

    const members = await this.personsRepository.list();
    
    members.map(async(member) => {
      const membersToDivide =  transaction.persons.find((item)=> item.name === member.name) 

      
      //console.log(membersToDivide )
      if(membersToDivide){
        
        member.amount = - membersToDivide.amount;
        
        await this.personsRepository.update(member);
        }
    });


    await this.transactionsRepository.delete(id);
  }
}