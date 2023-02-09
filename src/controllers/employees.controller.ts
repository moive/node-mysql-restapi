import type { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import type { IDataEmployee } from '../interfaces/employee.interface';
import { createEmployeeService } from '../services/employees.service';

export const getEmployees = (_req: Request, res: Response): Response => {
  return res.send('get data');
};

export const createEmployee = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, salary } = req.body;
    const result: any = await createEmployeeService(name, salary);

    const employee: IDataEmployee = {
      id: result.insertId,
      name,
      salary
    };

    return res.send({ ok: true, employee });
  } catch (e) {
    return handleHttp(res, 'ERROR AUTH LOGIN FAILED', e);
  }
};

export const updateEmployee = (_req: Request, res: Response): Response => {
  return res.send('put data');
};

export const deleteEmployee = (_req: Request, res: Response): Response => {
  return res.send('delete data');
};
