"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const remote_todo_service_1 = require("./todo/remote-todo-service");
const local_contact_service_1 = require("./contact/local-contact-service");
const local_admin_service_1 = require("./school/admin/local-admin-service");
const local_teacher_service_1 = require("./school/teacher/local-teacher-service");
class ServicesInstaller {
    install(registry) {
        registry.registerSingleton("ContactService", local_contact_service_1.LocalContactService);
        registry.registerSingleton("TeacherService", local_teacher_service_1.LocalTeacherService);
        registry.registerSingleton("AdminService", local_admin_service_1.LocalAdminService);
        registry.registerSingleton("TodoService", remote_todo_service_1.RemoteTodoService);
    }
}
exports.ServicesInstaller = ServicesInstaller;
//# sourceMappingURL=services-installer.js.map