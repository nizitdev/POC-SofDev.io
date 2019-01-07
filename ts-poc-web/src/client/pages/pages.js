"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_todos_view_model_1 = require("./list-todos/list-todos-view-model");
const manage_todo_view_model_1 = require("./manage-todo/manage-todo-view-model");
const list_contact_view_model_1 = require("./list-contacts/list-contact-view-model");
const manage_contact_view_model_1 = require("./manage-contact/manage-contact-view-model");
const admin_view_model_1 = require("./school/admin/admin-view-model");
const list_teacher_view_model_1 = require("./school/list-teachers/list-teacher-view-model");
const manage_teacher_view_model_1 = require("./school/manage-teacher/manage-teacher-view-model");
const list_student_view_model_1 = require("./school/list-students/list-student-view-model");
exports.pages = [
    list_todos_view_model_1.ListTodosViewModel,
    manage_todo_view_model_1.ManageTodoViewModel,
    manage_contact_view_model_1.ManageContactViewModel,
    list_contact_view_model_1.ListContactViewModel,
    admin_view_model_1.ListAdminViewModel,
    list_teacher_view_model_1.ListTeachersViewModel,
    manage_teacher_view_model_1.ManageTeacherViewModel,
    list_student_view_model_1.ListStudentViewModel,
];
//# sourceMappingURL=pages.js.map