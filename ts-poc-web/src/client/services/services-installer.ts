import { ComponentInstaller, Registry } from "@nivinjoseph/n-ject";
import { RemoteTodoService } from "./todo/remote-todo-service";
// import { LocalTodoService } from "./todo/local-todo-service";
import { LocalContactService  } from "./contact/local-contact-service";
import { LocalTeacherService } from "./school/teacher/local-teacher-service";


export class ServicesInstaller implements ComponentInstaller
{
    public install(registry: Registry): void
    {
        // registry.registerSingleton("TodoService", LocalTodoService);
        registry.registerSingleton("ContactService", LocalContactService);
        registry.registerSingleton("TeacherService", LocalTeacherService);
         registry.registerSingleton("TodoService", RemoteTodoService);
    }
}