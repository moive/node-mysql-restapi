import { Request, Response } from 'express';

export const getEmployees = (_req: Request, res: Response) => {
  return res.send('get data');
};

export const createEmployee = (_req: Request, res: Response) => {
  return res.send('post data');
};

export const updateEmployee = (_req: Request, res: Response) => {
  return res.send('put data');
};

export const deleteEmployee = (_req: Request, res: Response) => {
  return res.send('delete data');
};
