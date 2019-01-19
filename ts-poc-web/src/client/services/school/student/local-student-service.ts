import { given } from "@nivinjoseph/n-defensive";
import { StudentService } from "../student/student-service";
import { Student } from "../../../models/school/student";
import { StudentMarkEntry } from "../../../models/school/studentMarkEntry";
import { Subject } from "../../../models/school/subject";
// import { User } from "../../../models/school/user";

export class LocalStudentService implements StudentService {
    private readonly _student: Array<Student>;
    private _counter: number;
    private readonly _subject: Array<Subject>;

    private readonly _studentMarkEntry: Array<StudentMarkEntry>;

    public constructor() {
        const student = new Array<Student>();
        const count = 5;
        const studentMarkEntry = new Array<StudentMarkEntry>();

        const subject = new Array<Subject>();

        subject.push({
            id: "1",
            name: "Mathematics",
        });
        subject.push({
            id: "2",
            name: "Hindi",
        });
        subject.push({
            id: "3",
            name: "Science",
        });
        subject.push({
            id: "4",
            name: "Social Science",
        });
        subject.push({
            id: "5",
            name: "English",
        });
        this._subject = subject;
        for (let i = 0; i < count; i++) {
            student.push({
                id: "id" + i,
                name: "Student" + i,
                division: "class-" + i,
                sex: "Male",
                isDeleted: false
            });



        }

        this._studentMarkEntry = studentMarkEntry;
        this._student = student;
        this._counter = count;
    }



    public getStudentMarkEntries(): Promise<ReadonlyArray<StudentMarkEntry>> {
        return Promise.resolve(this._studentMarkEntry);
    }
    public getStudentMark(studentId: string): Promise<ReadonlyArray<StudentMarkEntry>> {
        given(studentId, "studentId").ensureHasValue().ensureIsString();
         
        return Promise.resolve(this._studentMarkEntry.filter(t => t.student_id === studentId));
    }
    public getSubjects(): Promise<ReadonlyArray<Subject>> {
        return Promise.resolve(this._subject);
    }
    public getStudentMarkEntry(id: string): Promise<StudentMarkEntry> {
        
        given(id, "id")
        .ensureHasValue()
        .ensureIsString()
        .ensure(t => this._studentMarkEntry.some(u => u.id === t), "Student not found");
        return Promise.resolve(this._studentMarkEntry.find(t => t.student_id === id) as StudentMarkEntry);
    }
    public getStudent(id: string): Promise<Student> {
      
        given(id, "id")
        .ensureHasValue()
        .ensureIsString()
        .ensure(t => this._student.some(u => u.id === t), "Student not found");

        return Promise.resolve(this._student.find(t => t.id === id) as Student);
    }

    public getStudents(): Promise<ReadonlyArray<Student>> {
        return Promise.resolve(this._student);
    }


    public createStudentMarkEntry(student_id: string, studentName: string, subject: string, mark: string): Promise<StudentMarkEntry> {
        
        given(studentName, "studentName").ensureHasValue().ensureIsString();
        given(subject, "subject").ensureIsString();
        given(mark, "mark").ensureHasValue().ensureIsString();

        const studentMarkSEntry: StudentMarkEntry = {
            id: "id" + this._counter,
            subject: subject,
            mark: mark,
            student_id: student_id,
            studentName: studentName,
        };

        this._studentMarkEntry.push(studentMarkSEntry);
        return Promise.resolve(studentMarkSEntry);
    }
    public updateStudentMarkEntry(id: string, student_id: string, studentName: string, subject: string, mark: string): Promise<void> {
       
        given(id, "id")
        .ensureHasValue()
        .ensureIsString()
        .ensure(t => this._studentMarkEntry.some(u => u.id === t), "Student not found");

        given(studentName, "studentName").ensureHasValue().ensureIsString();
        given(subject, "subject").ensureIsString();
        given(mark, "mark").ensureHasValue().ensureIsString();

        const studentMarkSEntry = this._studentMarkEntry.find(t => t.id === id) as StudentMarkEntry ;
        studentMarkSEntry.studentName = studentName;
        studentMarkSEntry.subject = subject;
        studentMarkSEntry.mark = mark;
        studentMarkSEntry.student_id = student_id;
        return Promise.resolve();
    }

    public createStudent(name: string, sex: string, division: string): Promise<Student> {
        
        given(name, "name").ensureHasValue().ensureIsString();
        given(sex, "sex").ensureIsString();
        given(division, "division").ensureHasValue().ensureIsString();

        const student: Student = {
            id: "id" + this._counter,
            name: name,
            sex: sex,
            isDeleted: false,
            division: division
        };

        this._student.push(student);
        return Promise.resolve(student);
    }

    public updateStudent(id: string, name: string, sex: string, division: string): Promise<void> {
       
        given(id, "id")
        .ensureHasValue()
        .ensureIsString()
        .ensure(t => this._student.some(u => u.id === t), "Student not found");

        given(name, "name").ensureHasValue().ensureIsString();
        given(sex, "sex").ensureIsString();
        given(division, "division").ensureHasValue().ensureIsString();

        const student = this._student.find(t => t.id === id) as Student;
        student.name = name;
        student.sex = sex;
        student.division = division;

        return Promise.resolve();
    }


    public deleteStudent(id: string): Promise<void> {
       
        given(id, "id")
        .ensureHasValue()
        .ensureIsString()
        .ensure(t => this._student.some(u => u.id === t), "Student not found");
        const student = this._student.find(t => t.id === id) as Student;
        student.isDeleted = true;

        return Promise.resolve();
    }
}