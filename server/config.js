import { config } from "dotenv";

config();


export const HOST = process.env.MYSQL_HOST;
export const USER = process.env.MYSQL_USER;
export const PASSWORD = process.env.MYSQL_PASSWORD;
export const DATABASE = process.env.MYSQL_DATABASE;


console.log(typeof(DATABASE), DATABASE);