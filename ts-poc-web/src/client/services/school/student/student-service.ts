import { Student } from "../../../models/school/student";
import { Subject } from "../../../models/school/subject";
import { StudentMarkEntry } from "../../../models/school/studentMarkEntry";
          

export interface StudentService
{
    getStudents(): Promise<ReadonlyArray<Student>>;
    getStudent(id: string): Promise<Student>;
    createStudent(name: string, sex: string,  division: string): Promise<Student>;
    updateStudent(id: string, name: string, sex: string,  division: string): Promise<void>;
    // deleteTeacher(id: string): Promise<void>;
    getSubjects(): Promise<ReadonlyArray<Subject>>;
    getStudentMarkEntries(): Promise<ReadonlyArray<StudentMarkEntry>>;
    getStudentMarkEntry(id: string): Promise<StudentMarkEntry>;
    createStudentMarkEntry(student_id: string, studentName: string, subject: string,  mark: string): Promise<StudentMarkEntry>;
    updateStudentMarkEntry(id: string, student_id: string, studentName: string, subject: string,  mark: string): Promise<void>;
    getStudentMark(studentId: string): Promise<ReadonlyArray<StudentMarkEntry>>;
}