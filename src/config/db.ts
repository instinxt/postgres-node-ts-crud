import { DataSource } from "typeorm";
import { Todo } from "../entity/Todo";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT!),
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	entities: [Todo],
	synchronize: true,
});

export const connectDatabase = async () => {
	await AppDataSource.initialize();
	console.log("Connected to Database...");
};
