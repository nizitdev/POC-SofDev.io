import { Teacher } from "../../../models/school/teacher";
          

export interface TeacherService
{
    getTeachers(): Promise<ReadonlyArray<Teacher>>;
    getTeacher(id: string): Promise<Teacher>;
    createTeacher(firstName: string, lastName: string, dateOfBirth: string, sex: string, address: string): Promise<Teacher>;
    updateTeacher(id: string, firstName: string, lastName: string, dateOfBirth: string, sex: string, address: string): Promise<void>;
    deleteTeacher(id: string): Promise<void>;
}