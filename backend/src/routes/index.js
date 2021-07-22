const { Router } = require("express");
const router = Router();

const {
  getToDos,
  getToDoById,
  createToDo,
  updateToDoById,
  deleteToDoById,
} = require("../controllers/indexController");

router.get("/todos", getToDos);
router.get("/todos/:id", getToDoById);
router.post("/todos", createToDo);
router.put("/todos/:id", updateToDoById);
router.delete("/todos/:id", deleteToDoById);

module.exports = router;
