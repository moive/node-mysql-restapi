import { Router } from 'express';
import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee
} from '../controllers/employees.controller';

const router = Router();

router.get('/', getEmployees);

router.post('/', createEmployee);

router.put('/', updateEmployee);

router.delete('/', deleteEmployee);

export { router as employeesRouter };
