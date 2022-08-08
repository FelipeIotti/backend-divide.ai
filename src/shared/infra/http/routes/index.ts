import { Router } from "express";
import { personsRoutes } from "./persons.routes";

import { transactionsRoutes } from "./transactions.routes";

export const router = Router();

router.use('/transactions', transactionsRoutes);

router.use('/persons', personsRoutes);

