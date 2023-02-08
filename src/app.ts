import express from 'express';
import morgan from 'morgan';
import { indexRouter } from './routes/index.router';

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(indexRouter);

export default app;
