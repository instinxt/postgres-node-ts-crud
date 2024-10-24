import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import todoRoutes from "./routes/todoRoutes";
import { connectDatabase } from "./config/db";
import { swaggerSpec } from "../swagger";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/todos", todoRoutes);

app.listen(PORT, async () => {
	await connectDatabase();
	console.log(`Server running on port ${PORT}`);
});
