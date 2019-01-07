import { User } from "../../../models/school/user";
import { Subject } from "../../../models/school/subject";
          
export interface TeacherService
{
    getTeachers(): Promise<ReadonlyArray<User>>;
    getTeacher(id: string): Promise<User>;
     createTeacher(name: string, isAdmin: boolean, password: string, userName: string, classInCharge: string): Promise<User>;
    updateTeacher(id: string, name: string, isAdmin: boolean, password: string, userName: string, classInCharge: string): Promise<void>;
    getSubjects(): Promise<ReadonlyArray<Subject>>;
    // deleteTeacher(id: string): Promise<void>;
}