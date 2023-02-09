import { pool } from '../database';

const createEmployeeService = async (
  name: string,
  salary: number
): Promise<any> => {
  const [row]: any = await pool.query(
    'INSERT INTO employee (name, salary) VALUES (?, ?)',
    [name, salary]
  );

  return row;
};

const getEmployeesService = async (): Promise<any> => {
  const [rows] = await pool.query('SELECT * FROM employee');
  return rows;
};

const getEmployeeService = async (id: number): Promise<any> => {
  const [row] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);
  return row;
};

const deleteEmployeeService = async (id: number): Promise<any> => {
  const [row] = await pool.query('DELETE FROM employee WHERE id = ?', [id]);
  return row;
};

export {
  createEmployeeService,
  getEmployeesService,
  getEmployeeService,
  deleteEmployeeService
};
