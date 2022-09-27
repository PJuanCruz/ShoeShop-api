import dotenv from 'dotenv';
import express from 'express';
import connectDataBase from './config/mongodb.js';
import morgan from 'morgan';
import productRouter from './routes/products.js';
import { errorHandler, notFound } from './middlewares/errors.js';

dotenv.config();

const app = express();

app.use(morgan('dev'));

app.use('/api/products', productRouter);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDataBase();
    app.listen(PORT, console.log(`Server listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
