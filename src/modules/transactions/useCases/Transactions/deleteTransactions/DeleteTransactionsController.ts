import {Request, Response} from 'express';
import { container } from 'tsyringe';
import { DeleteTransactionsUseCase} from './DeleteTransactionsUseCase';

export class DeleteTransactionsController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;

    const deleteTransactionsUseCase = container.resolve(DeleteTransactionsUseCase);
    
   await deleteTransactionsUseCase.execute({id});

    return response.status(201).send();
  }
}