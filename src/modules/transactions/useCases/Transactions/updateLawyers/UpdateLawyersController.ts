import {Request, Response} from 'express';
import { container } from 'tsyringe';
import { UpdateLawyersUseCase } from './UpdateLawyersUseCase';

export class UpdateLawyersController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {name,oab,phone,email,specialty,cpf} = request.body;
    const {id} = request.params;

    const updateLawyersUseCase = container.resolve(UpdateLawyersUseCase)

    await updateLawyersUseCase.execute({id,name,oab,phone,email,specialty,cpf});

    return response.status(201).send();
  }
}