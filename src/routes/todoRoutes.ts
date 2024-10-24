// routes/todoRoutes.ts
import { Router } from "express";
import {
	createTodo,
	deleteTodo,
	getAllTodos,
	getTodoById,
	updateTodo,
} from "../controller/todoController";

const router = Router();

router.post("/", createTodo);
router.get("/:id", getTodoById);
router.get("/", getAllTodos);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
