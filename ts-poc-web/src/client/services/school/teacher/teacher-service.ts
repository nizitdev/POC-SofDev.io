import { User } from "../../../models/school/user";
          

export interface TeacherService
{
    getTeachers(): Promise<ReadonlyArray<User>>;
    getTeacher(id: string): Promise<User>;
     createTeacher(name: string, isAdmin: boolean, password: string, userName: string, classInCharge: string): Promise<User>;
    updateTeacher(id: string, name: string, isAdmin: boolean, password: string, userName: string, classInCharge: string): Promise<void>;
    // deleteTeacher(id: string): Promise<void>;
}