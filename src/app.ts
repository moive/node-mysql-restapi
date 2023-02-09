import express from 'express';
import morgan from 'morgan';
import { employeesRouter } from './routes/employees.router';
import { indexRouter } from './routes/index.router';

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(indexRouter);
app.use('/api/employees', employeesRouter);

export default app;
// https://www.youtube.com/watch?v=3dSkc-DIM74
