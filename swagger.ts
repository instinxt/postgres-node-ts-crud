export const swaggerSpec = {
	openapi: "3.0.0",
	info: {
		title: "Todo API",
		description: "API for managing todos",
		version: "1.0.0",
	},
	tags: [
		{
			name: "Todos",
			description: "API for managing todos",
		},
	],
	servers: [
		{
			url: "http://localhost:5000",
		},
	],
	paths: {
		"/todos": {
			post: {
				summary: "Create a new todo",
				tags: ["Todos"],
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									title: {
										type: "string",
										example: "New Todo",
									},
								},
							},
						},
					},
				},
				responses: {
					201: {
						description: "Todo successfully created",
					},
				},
			},
			get: {
				summary: "Get all todos",
				tags: ["Todos"],
				responses: {
					200: {
						description: "List of todos",
					},
				},
			},
		},
		"/todos/{id}": {
			get: {
				summary: "Get a todo by ID",
				tags: ["Todos"],
				parameters: [
					{
						name: "id",
						in: "path",
						required: true,
						description: "ID of the todo to retrieve",
						schema: {
							type: "integer",
						},
					},
				],
				responses: {
					200: {
						description: "Todo found",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										id: {
											type: "integer",
											example: 1,
										},
										title: {
											type: "string",
											example: "New Todo",
										},
										completed: {
											type: "boolean",
											example: false,
										},
									},
								},
							},
						},
					},
					404: {
						description: "Todo not found",
					},
				},
			},
			put: {
				summary: "Update a todo by ID",
				tags: ["Todos"],
				parameters: [
					{
						name: "id",
						in: "path",
						required: true,
						description: "ID of the todo to update",
						schema: {
							type: "integer",
						},
					},
				],
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									title: {
										type: "string",
										example: "Updated Todo",
									},
									completed: {
										type: "boolean",
										example: true,
									},
								},
							},
						},
					},
				},
				responses: {
					200: {
						description: "Todo updated successfully",
					},
					404: {
						description: "Todo not found",
					},
				},
			},
			delete: {
				summary: "Delete a todo by ID",
				tags: ["Todos"],
				parameters: [
					{
						name: "id",
						in: "path",
						required: true,
						description: "ID of the todo to delete",
						schema: {
							type: "integer",
						},
					},
				],
				responses: {
					200: {
						description: "Todo deleted successfully",
					},
					404: {
						description: "Todo not found",
					},
				},
			},
		},
	},
};
