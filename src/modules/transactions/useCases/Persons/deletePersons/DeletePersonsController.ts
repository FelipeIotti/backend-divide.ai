import {Request, Response} from 'express';
import { container } from 'tsyringe';
import { DeletePersonsUseCase} from './DeletePersonsUseCase';

export class DeletePersonsController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;

    const deletePersonsUseCase = container.resolve(DeletePersonsUseCase);
    
   await deletePersonsUseCase.execute({id});

    return response.status(201).send();
  }
}