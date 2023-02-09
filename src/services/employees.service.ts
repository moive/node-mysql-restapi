import { pool } from '../database';

const createEmployeeService = async (
  name: string,
  salary: number
): Promise<any> => {
  const [rows]: any = await pool.query(
    'INSERT INTO employee (name, salary) VALUES (?, ?)',
    [name, salary]
  );

  return rows;
};

export { createEmployeeService };
