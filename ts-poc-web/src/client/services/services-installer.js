"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const local_todo_service_1 = require("./todo/local-todo-service");
const local_contact_service_1 = require("./todo/local-contact-service");
class ServicesInstaller {
    install(registry) {
        registry.registerSingleton("TodoService", local_todo_service_1.LocalTodoService);
        registry.registerSingleton("ContactService", local_contact_service_1.LocalContactService);
    }
}
exports.ServicesInstaller = ServicesInstaller;
//# sourceMappingURL=services-installer.js.map