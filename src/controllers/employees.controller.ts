import { Request, Response } from 'express';
import { createEmployeeService } from '../services/employees.service';

export const getEmployees = (_req: Request, res: Response) => {
  return res.send('get data');
};

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const { name, salary } = req.body;
    const result: any = await createEmployeeService(name, salary);
    console.log(result);
    return res.send({
      id: result.insertId,
      name,
      salary
    });
  } catch (e) {
    console.log(e);
  }
  return res.send('post data');
};

export const updateEmployee = (_req: Request, res: Response) => {
  return res.send('put data');
};

export const deleteEmployee = (_req: Request, res: Response) => {
  return res.send('delete data');
};
