import { Router } from "express";
import { CreateTransactionsController } from "@modules/transactions/useCases/Transactions/createTransactions/CreateTransactionsController";
import { DeleteTransactionsController } from "@modules/transactions/useCases/Transactions/deleteTransactions/DeleteTransactionsController";
import { ListTransactionsController } from "@modules/transactions/useCases/Transactions/listTransactions/ListTransactionsController";


export const transactionsRoutes = Router();

const createTransactionsController = new CreateTransactionsController();
const listTransactionsController = new ListTransactionsController();
const deleteTransactionsController = new DeleteTransactionsController();

transactionsRoutes.post('/',createTransactionsController.handle);

transactionsRoutes.get('/', listTransactionsController.handle);

transactionsRoutes.delete('/:id', deleteTransactionsController.handle);



