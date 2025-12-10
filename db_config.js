import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

export const my_db = await mysql.createConnection({
  host: process.env.DB_LOCALHOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});