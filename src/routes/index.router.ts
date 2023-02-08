import { Router } from 'express';
import { pool } from '../database';

const router = Router();

router.get('/', async (_req, res) => {
  const [result]: any = await pool.query('SELECT 1 + 1 AS Result');
  const test = result[0];
  return res.json(test);
});

export { router as indexRouter };
