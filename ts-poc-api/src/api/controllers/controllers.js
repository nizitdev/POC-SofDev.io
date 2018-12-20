"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_all_todos_controller_1 = require("./queries/get-all-todos-controller");
const get_todo_controller_1 = require("./queries/get-todo-controller");
const create_todo_controller_1 = require("./commands/create-todo-controller");
const update_todo_command_1 = require("./commands/update-todo-command");
const mark_todo_as_completed_1 = require("./commands/mark-todo-as-completed");
const delete_todo_controller_1 = require("./commands/delete-todo-controller");
exports.controllers = [
    get_all_todos_controller_1.GetAllTodosController,
    get_todo_controller_1.GetTodoController,
    create_todo_controller_1.CreateTodoController,
    update_todo_command_1.UpdateTodoController,
    mark_todo_as_completed_1.MarkTodoAsCompletedController,
    delete_todo_controller_1.DeleteTodoController
];
//# sourceMappingURL=controllers.js.map