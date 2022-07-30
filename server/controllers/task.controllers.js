import { pool } from "../database/db.js";

//* Get all tasks from the DB.
export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query(
      // "SELECT * FROM tasks ORDER BY createdAt ASC;"
      "SELECT * FROM tasks;"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//* Get a task from the DB with the ID
export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    if (result.length === 0)
      return res.status(404).json({ message: "Task no found" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//* Insert a task to the DB
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body,
      [result] = await pool.query(
        "INSERT INTO tasks (title, description) VALUES (?, ?)",
        [title, description]
      );
    res.json({
      id: result.insertId,
      title,
      description,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//* Get a task from the DB with the ID and Delete the task
export const updateTask = async (req, res) => {
  try {
    const result = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//* Get a task from the DB with the ID and Delete the task
export const deleteTask = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Task no found",
      });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
