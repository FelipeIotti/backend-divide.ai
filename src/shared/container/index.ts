import {container} from 'tsyringe';

import { ITransactionsRepository } from '@modules/transactions/repositories/ITransactionsRepository';
import { TransactionsRepository } from '@modules/transactions/infra/typeorm/repositories/TransactionsRepository';

import { IPersonsRepository } from '@modules/transactions/repositories/IPersonsRepository';
import { PersonsRepository } from '@modules/transactions/infra/typeorm/repositories/PersonsRepository';

container.registerSingleton<ITransactionsRepository>('TransactionsRepository',TransactionsRepository);

container.registerSingleton<IPersonsRepository>('PersonsRepository',PersonsRepository);

