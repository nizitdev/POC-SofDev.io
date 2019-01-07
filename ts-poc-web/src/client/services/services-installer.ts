import { ComponentInstaller, Registry } from "@nivinjoseph/n-ject";
 // import { RemoteTodoService } from "./todo/remote-todo-service";
import { LocalTodoService } from "./todo/local-todo-service";
import { LocalContactService  } from "./contact/local-contact-service";
import { LocalAdminService } from "./school/admin/local-admin-service";
import { LocalTeacherService } from "./school/teacher/local-teacher-service";
import { LocalStudentService } from "./school/student/local-student-service";


export class ServicesInstaller implements ComponentInstaller
{
    public install(registry: Registry): void
    {
       registry.registerSingleton("TodoService", LocalTodoService);
        registry.registerSingleton("ContactService", LocalContactService);
        registry.registerSingleton("TeacherService", LocalTeacherService);
       registry.registerSingleton("AdminService", LocalAdminService); 
        registry.registerSingleton("StudentService", LocalStudentService);
         //  registry.registerSingleton("TodoService", RemoteTodoService);
    }
}