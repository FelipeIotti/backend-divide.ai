import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePersonsUseCase } from "./CreatePersonsUseCase";

export class CreatePersonsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {name} = request.body;

    const createPersonsUseCase = container.resolve(CreatePersonsUseCase);

    await createPersonsUseCase.execute({name});

    return response.status(201).send();
  }
}