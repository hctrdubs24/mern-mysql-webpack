import { createPool } from "mysql2/promise";
import { DATABASE, HOST, PASSWORD, USER } from "../config.js";

export const pool = createPool({
  host: HOST,
  user: USER,
  port: 3306,
  password: PASSWORD,
  database: DATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
});

/**
 * 

host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "tasksdb",
 */
