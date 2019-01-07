import { Student } from "../../../models/school/student";
          

export interface StudentService
{
    getStudents(): Promise<ReadonlyArray<Student>>;
    getStudent(id: string): Promise<Student>;
    createStudent(name: string, sex: string,  division: string): Promise<Student>;
    updateStudent(id: string, name: string, sex: string,  division: string): Promise<void>;
    // deleteTeacher(id: string): Promise<void>;
}