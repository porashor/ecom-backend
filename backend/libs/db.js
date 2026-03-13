import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();


// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL, 
//   ssl: { rejectUnauthorized: true } 
// });

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : false
});

export default pool;