import {Request, Response} from 'express';
import { container } from 'tsyringe';
import { UpdatePersonsUseCase } from './UpdatePersonsUseCase';

export class UpdatePersonsController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {amount} = request.body;
    const {id} = request.params;

    const updatePersonsUseCase = container.resolve(UpdatePersonsUseCase)

    await updatePersonsUseCase.execute({id,amount});

    return response.status(201).send();
  }
}