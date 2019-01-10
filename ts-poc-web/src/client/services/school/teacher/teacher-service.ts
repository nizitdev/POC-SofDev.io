import { User } from "../../../models/school/user";
import { Qualification } from "../../../models/school/qualification";
export interface TeacherService {
    getTeachers(): Promise<ReadonlyArray<User>>;
    getTeacher(id: string): Promise<User>;
    createTeacher(name: string, isAdmin: boolean, password: string, userName: string, classInCharge: string, qualification: Array<string>): Promise<User>;
    updateTeacher(id: string, name: string, isAdmin: boolean, password: string, userName: string, classInCharge: string, qualification: Array<string>): Promise<void>;
    getQualification(): Promise<ReadonlyArray<Qualification>>;
    deleteTeacher(id: string): Promise<void>;
}