import { ILawyersDTO } from "@modules/fees/dtos/ILawyersDTO";
import { IClientsRepository } from "@modules/fees/repositories/IClientsRepository";
import { IFeesRepository } from "@modules/fees/repositories/IFeesRepository";
import { IGroupActionRepository } from "@modules/fees/repositories/IGroupActionRepository";
import { ILawyersRepository } from "@modules/fees/repositories/ILawyersRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
  name: string;
  oab: string;
  phone: string;
  email: string;
  specialty: string;
  cpf: string;
}

@injectable()
export class UpdateLawyersUseCase {
  constructor(
      @inject("LawyersRepository")
      private lawyersRepository: ILawyersRepository,
      @inject("FeesRepository")
      private feesRepository: IFeesRepository,
    ){}

  async execute({id,name,oab,phone,email,specialty,cpf}:IRequest): Promise<void> {
    
    const lawyer = await this.lawyersRepository.findById(id);

    let fees = await this.feesRepository.findByNameLawyer1(lawyer.name);

    if(fees){
      fees.lawyers1= name;
      await this.feesRepository.update(fees);
    }
   
    if(!fees){
      fees = await this.feesRepository.findByNameLawyer2(lawyer.name);

      if(fees){
        fees.lawyers2= name;
        await this.feesRepository.update(fees);
      }
    }

    if(!fees){
      fees = await this.feesRepository.findByNameLawyer3(lawyer.name);

      if(fees){
        fees.lawyers3= name;
        await this.feesRepository.update(fees);
      }
    }

    if(!fees){
      fees = await this.feesRepository.findByNameLawyer4(lawyer.name);

      if(fees){
        fees.lawyers4= name;
        await this.feesRepository.update(fees);
      }
    }


    lawyer.name = name
    lawyer.oab = oab;
    lawyer.phone = phone;
    lawyer.email = email;
    lawyer.specialty = specialty;
    lawyer.cpf = cpf;
    
    await this.lawyersRepository.update(lawyer);
  }
}