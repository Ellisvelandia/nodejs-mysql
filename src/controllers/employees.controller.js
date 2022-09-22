import { pool } from "../db.js";

export const getEmployees = (req, res) => res.send("obtain employee");

export const createEmployee = async (req, res) => {
  const { name, salary } = req.body
  const [rows] = await pool.query("INSERT INTO employee(name,salary) VALUES (?, ?)",
    [name, salary])
  res.send({ 
    id: rows.insertId,
    name,
    salary,
   });
}; 

export const updateEmployee = (req, res) => res.send("update employee");

export const deleteEmployee = (req, res) => res.send("delete employee");