import { ListTodosViewModel } from "./list-todos/list-todos-view-model";
import { ManageTodoViewModel } from "./manage-todo/manage-todo-view-model";
import { ListContactViewModel } from "./list-contacts/list-contact-view-model";
import { ManageContactViewModel } from "./manage-contact/manage-contact-view-model";
import { ListAdminViewModel } from "./school/admin/admin-view-model";
import { ListTeachersViewModel } from "./school/list-teachers/list-teacher-view-model";
import { ManageTeacherViewModel } from "./school/manage-teacher/manage-teacher-view-model";
import { ListStudentViewModel } from "./school/list-students/list-student-view-model";
import { ManageStudentViewModel } from "./school/manage-student/manage-student-view-model";
import { ManageStudentMarkViewModel } from "./school/manage-studentMarkEntry/manage-studentMarkEntry-view-model";
import { ListStudentMarkViewModel } from "./school/list-studentMarks/list-studentMarks-view-model";

export const pages: Array<Function> = [
   ListTodosViewModel,
   ManageTodoViewModel,
   ManageContactViewModel,
   ListContactViewModel,
   ListAdminViewModel,
   ListTeachersViewModel,
   ManageTeacherViewModel,
   ListStudentViewModel,
   ManageStudentViewModel,
   ManageStudentMarkViewModel,
   ListStudentMarkViewModel,
];

