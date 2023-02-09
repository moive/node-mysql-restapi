import { Router } from 'express';
import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee
} from '../controllers/employees.controller';

const router = Router();

router.get('/', getEmployees);

router.get('/:id', getEmployee);

router.post('/', createEmployee);

router.put('/:id', updateEmployee);

router.delete('/:id', deleteEmployee);

export { router as employeesRouter };
