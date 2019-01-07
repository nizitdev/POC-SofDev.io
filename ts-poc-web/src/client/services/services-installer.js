"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const local_todo_service_1 = require("./todo/local-todo-service");
const local_contact_service_1 = require("./contact/local-contact-service");
const local_admin_service_1 = require("./school/admin/local-admin-service");
const local_teacher_service_1 = require("./school/teacher/local-teacher-service");
const local_student_service_1 = require("./school/student/local-student-service");
class ServicesInstaller {
    install(registry) {
        registry.registerSingleton("TodoService", local_todo_service_1.LocalTodoService);
        registry.registerSingleton("ContactService", local_contact_service_1.LocalContactService);
        registry.registerSingleton("TeacherService", local_teacher_service_1.LocalTeacherService);
        registry.registerSingleton("AdminService", local_admin_service_1.LocalAdminService);
        registry.registerSingleton("StudentService", local_student_service_1.LocalStudentService);
    }
}
exports.ServicesInstaller = ServicesInstaller;
//# sourceMappingURL=services-installer.js.map