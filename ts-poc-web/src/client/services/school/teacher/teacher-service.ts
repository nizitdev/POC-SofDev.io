import { User } from "../../../models/school/user";
          

export interface TeacherService
{
    getTeachers(): Promise<ReadonlyArray<User>>;
    getTeacher(id: string): Promise<User>;
    // createTeacher(firstName: string, lastName: string, dateOfBirth: string, sex: string, address: string): Promise<User>;
    // updateTeacher(id: string, firstName: string, lastName: string, dateOfBirth: string, sex: string, address: string): Promise<void>;
    // deleteTeacher(id: string): Promise<void>;
}