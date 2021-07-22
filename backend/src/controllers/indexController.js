const pool = require("../database/database");

// GET
const getToDos = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM todo");
    res.status(200).json(response.rows);
  } catch (error) {
    console.error(error);
  }
};

// GET
const getToDoById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.status(200).json(response.rows);
  } catch (error) {
    console.error(error);
  }
};

// POST
const createToDo = async (req, res) => {
  try {
    const { description } = req.body;
    const response = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    res.status(200).json(response.rows[0]);
    res.send("To-Do added");
  } catch (error) {
    console.error(error);
  }
};

// PUT
const updateToDoById = async (req, res) => {
  try {
    const id = req.params.id;
    const { description } = req.body;
    const response = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
    res.json("To-Do sucessfully updated");
  } catch (error) {
    console.error(error);
  }
};

// DELETE
const deleteToDoById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.status(200).json(`To-Do ${id} sucessfully deleted`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getToDos,
  getToDoById,
  createToDo,
  updateToDoById,
  deleteToDoById,
};
