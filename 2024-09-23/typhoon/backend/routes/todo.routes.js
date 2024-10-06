const express = require("express");
const { query } = require("express-validator");
const router = express.Router();
const todoController = require("../controllers/todo.controller");
const {
  todoRouteMiddleware,
  todoGetRouteMiddleware,
} = require("../middlewares/todo.middlewares");

router.use(todoRouteMiddleware);

router.get("/", todoGetRouteMiddleware, todoController.read);
router.post("/", query("req.body").notEmpty(), todoController.create);
router.put("/:id", query("req.body").notEmpty(), todoController.update);
router.delete("/:id", todoController.delete);

module.exports = router;
