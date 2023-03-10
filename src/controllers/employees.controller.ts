import type { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import type { IDataEmployee } from '../interfaces/employee.interface';
import {
  createEmployeeService,
  deleteEmployeeService,
  getEmployeeService,
  getEmployeesService,
  updateEmployeeService
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

export const updateEmployee = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;
    const newVal = Number(id);

    if (Number.isNaN(newVal))
      return handleHttp(res, 'NOT FOUND', 'Id is a not a number', 404);

    const resUpdate = await updateEmployeeService(newVal, name, salary);

    if (resUpdate.affectedRows === 0)
      return handleHttp(
        res,
        'NOT FOUND',
        `Id_employee: ${id} is not exist`,
        404
      );

    const [response] = await getEmployeeService(newVal);

    return res.send({ ok: true, data: response });
  } catch (e) {
    return handleHttp(res, 'ERROR DELETE EMPLOYEE', e);
  }
};

export const deleteEmployee = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;
    const newVal = Number(id);

    if (Number.isNaN(newVal)) {
      return handleHttp(res, 'NOT FOUND', 'Employee not found', 404);
    }
    const result = await deleteEmployeeService(newVal);

    if (result.affectedRows <= 0) {
      return handleHttp(res, 'NOT FOUND', 'Employee not found', 404);
    }

    return res.sendStatus(204);
  } catch (e) {
    return handleHttp(res, 'ERROR DELETE EMPLOYEE', e);
  }
};
