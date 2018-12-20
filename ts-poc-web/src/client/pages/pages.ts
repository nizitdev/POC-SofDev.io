import { ListTodosViewModel } from "./list-todos/list-todos-view-model";
import { ManageTodoViewModel } from "./manage-todo/manage-todo-view-model";
import { ListContactViewModel } from "./list-contacts/list-contact-view-model";
import { ManageContactViewModel } from "./manage-contact/manage-contact-view-model";


export const pages: Array<Function> = [
    ListTodosViewModel,
    ManageTodoViewModel,
    ManageContactViewModel,
    ListContactViewModel
];

 