"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_view_model_1 = require("./todo/todo-view-model");
const shell_view_model_1 = require("./shell/shell-view-model");
const contact_view_model_1 = require("./contact/contact-view-model");
const teacher_view_model_1 = require("./school/teacher/teacher-view-model");
const student_view_model_1 = require("./school/student/student-view-model");
const studentMark_view_model_1 = require("./school/studentMarks/studentMark-view-model");
exports.components = [
    shell_view_model_1.ShellViewModel,
    todo_view_model_1.TodoViewModel,
    contact_view_model_1.ContactViewModel,
    teacher_view_model_1.TeacherViewModel,
    student_view_model_1.StudentViewModel,
    studentMark_view_model_1.StudentMarkViewModel,
];
//# sourceMappingURL=components.js.map