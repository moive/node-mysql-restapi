import express from 'express';
import morgan from 'morgan';
import { pool } from './database';

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.get('/', async (_req, res) => {
  const [result]: any = await pool.query('SELECT 1 + 1 AS Result');
  const test = result[0];
  return res.json(test);
});

export default app;
