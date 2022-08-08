import { Router } from "express";

import { CreatePersonsController } from "@modules/transactions/useCases/Persons/createPersons/CreatePersonsController";
import { ListPersonsController } from "@modules/transactions/useCases/Persons/listPersons/ListPersonsController";
import { UpdatePersonsController } from "@modules/transactions/useCases/Persons/updtatePersons/UpdatePersonsController";
import { DeletePersonsController } from "@modules/transactions/useCases/Persons/deletePersons/DeletePersonsController";


export const personsRoutes = Router();

const createPersonsController = new CreatePersonsController();
const listPersonsController = new ListPersonsController();
const deletePersonsController = new DeletePersonsController();
const updatePersonsController = new UpdatePersonsController();

personsRoutes.post('/',createPersonsController.handle);

personsRoutes.get('/', listPersonsController.handle);

personsRoutes.delete('/:id', deletePersonsController.handle);

personsRoutes.put('/:id', updatePersonsController.handle);



