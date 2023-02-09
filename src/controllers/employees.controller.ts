import type { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import type { IDataEmployee } from '../interfaces/employee.interface';
import {
  createEmployeeService,
  getEmployeeService,
  getEmployeesService
} from '../services/employees.service';

export const getEmployees = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const result = await getEmployeesService();
    return res.send({ ok: true, data: result });
  } catch (e) {
    return handleHttp(res, 'ERROR GET EMPLOYEES', e);
  }
};

export const getEmployee = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;
    const newVal = Number(id);
    if (Number.isNaN(newVal)) {
      return handleHttp(res, 'NOT FOUND', 'Id is not number', 404);
    }
    const result = await getEmployeeService(newVal);
    if (result.length <= 0) {
      return handleHttp(res, 'NOT FOUND', 'Empty', 404);
    }
    return res.send({ ok: true, data: result });
  } catch (e) {
    return handleHttp(res, 'ERROR GET EMPLOYEE', e);
  }
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
    return handleHttp(res, 'CONNECTION ERROR FAILED', e);
  }
};

export const updateEmployee = (_req: Request, res: Response): Response => {
  return res.send('put data!');
};

export const deleteEmployee = (_req: Request, res: Response): Response => {
  return res.send('delete data');
};
