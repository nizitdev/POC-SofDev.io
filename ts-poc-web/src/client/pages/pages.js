"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_todos_view_model_1 = require("./list-todos/list-todos-view-model");
const manage_todo_view_model_1 = require("./manage-todo/manage-todo-view-model");
const list_contact_view_model_1 = require("./list-contacts/list-contact-view-model");
const manage_contact_view_model_1 = require("./manage-contact/manage-contact-view-model");
exports.pages = [
    list_todos_view_model_1.ListTodosViewModel,
    manage_todo_view_model_1.ManageTodoViewModel,
    manage_contact_view_model_1.ManageContactViewModel,
    list_contact_view_model_1.ListContactViewModel
];
//# sourceMappingURL=pages.js.map