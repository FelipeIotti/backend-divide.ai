import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';

import '@shared/container/index';

import { router } from './routes/index';
import { AppError } from '@shared/errors/AppErros';
import { createConnection } from 'typeorm';

createConnection();
const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.use((err: Error, request:Request, response:Response, next: NextFunction)=>{
  if(err instanceof AppError){
    return response.status(err.statusCode).json({message:err.message});
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`
  })
});

app.listen(3333, ()=> console.log('🚀 Server is running on port 3333 🚀'));
