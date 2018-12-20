"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queryPrefix = "/api/query/";
exports.query = {
    getAllTodos: queryPrefix + "getAllTodos",
    getTodo: queryPrefix + "getTodo/{id: string}"
};
const commandPrefix = "/api/command/";
exports.command = {
    createTodo: commandPrefix + "createTodo",
    updateTodo: commandPrefix + "updateTodo",
    markTodoAsCompleted: commandPrefix + "markTodoAsCompleted",
    deleteTodo: commandPrefix + "deleteTodo"
};
//# sourceMappingURL=routes.js.map