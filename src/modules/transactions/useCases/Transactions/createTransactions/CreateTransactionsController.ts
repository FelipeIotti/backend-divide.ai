import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTransactionsUseCase } from "./CreateTransactionsUseCase";

export class CreateTransactionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {name,memberPay, amount, type, category, date, persons} = request.body;

    const createTransactionsUseCase = container.resolve(CreateTransactionsUseCase);

    await createTransactionsUseCase.execute({name,memberPay, amount, type, category, date, persons});

    return response.status(201).send();
  }
}