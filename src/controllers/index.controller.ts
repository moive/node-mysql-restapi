import { Request, Response } from 'express';

import { pool } from '../database';

export const home = async (_req: Request, res: Response) => {
  const [result]: any = await pool.query('SELECT 1 + 1 AS Result');
  const test = result[0];
  return res.json(test);
};
