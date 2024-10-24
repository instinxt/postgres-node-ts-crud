import { Request, Response } from "express";
import { AppDataSource } from "../config/db";
import { Todo } from "../entity/Todo";

const todoRepository = AppDataSource.getRepository(Todo);

export const createTodo = async (req: Request, res: Response) => {
	const { title } = req.body;
	const newTodo = todoRepository.create({ title });
	await todoRepository.save(newTodo);
	res.status(201).json({ message: "Todo successfully created" });
};

export const getAllTodos = async (req: Request, res: Response) => {
	const todos = await todoRepository.find();
	res.status(200).json(todos);
};

export const getTodoById = async (req: Request, res: Response) => {
	const { id } = req.params;
	const todo = await todoRepository.findOneBy({ id: Number(id) });

	if (!todo) {
		res.status(404).json({ message: "Todo not found" });
		return;
	}

	res.status(200).json(todo);
};

export const updateTodo = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { title, completed } = req.body;
	const todoToUpdate = await todoRepository.findOneBy({ id: Number(id) });

	if (!todoToUpdate) {
		res.status(404).json({ message: "Todo not found" });
		return;
	}

	// Update the fields
	todoToUpdate.title = title !== undefined ? title : todoToUpdate.title;
	todoToUpdate.completed =
		completed !== undefined ? completed : todoToUpdate.completed;

	await todoRepository.save(todoToUpdate);

	res.status(200).json(todoToUpdate);
};

export const deleteTodo = async (req: Request, res: Response) => {
	const { id } = req.params;
	const todoToDelete = await todoRepository.findOneBy({ id: Number(id) });

	if (!todoToDelete) {
		res.status(404).json({ message: "Todo not found" });
		return;
	}

	await todoRepository.remove(todoToDelete);

	// 200 provides better UX than 204 status
	res.status(200).json({ message: "Todo deleted successfully" });
};
