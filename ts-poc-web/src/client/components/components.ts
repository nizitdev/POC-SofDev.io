import { TodoViewModel } from "./todo/todo-view-model";
import { ShellViewModel } from "./shell/shell-view-model";
import { ContactViewModel } from "./contact/contact-view-model";
import { TeacherViewModel } from "./school/teacher/teacher-view-model";

export const components: Array<Function> = [
    ShellViewModel,
    TodoViewModel,
    ContactViewModel,
    TeacherViewModel
];