import 'dotenv/config';
import { createPool } from 'mysql2/promise';

export const pool = createPool({
  host: 'localhost',
  user: process.env['DB_USER'],
  password: process.env['DB_PASSWORD'],
  port: 3306,
  database: process.env['DB_NAME']
});
