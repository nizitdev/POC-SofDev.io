import { given } from "@nivinjoseph/n-defensive";
import { StudentService } from "../student/student-service";
import { Student } from "../../../models/school/student";
import { StudentMarkEntry } from "../../../models/school/studentMarkEntry";
import { Subject } from "../../../models/school/subject";

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
            name: "Maths",
        });
        subject.push({
            id: "1",
            name: "Hindi",
        });
        subject.push({
            id: "1",
            name: "Science",
        });
        subject.push({
            id: "1",
            name: "Social",
        });
        subject.push({
            id: "2",
            name: "English",
        });
        this._subject = subject;
        for (let i = 0; i < count; i++) {
            student.push({
                id: "id" + i,
                name: "Student" + i,
                division: "x-a",
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
        debugger;
        return Promise.resolve(this._studentMarkEntry.filter(t => t.student_id === studentId));
    }
    public getSubjects(): Promise<ReadonlyArray<Subject>> {
        return Promise.resolve(this._subject);
    }
    public getStudentMarkEntry(id: string): Promise<StudentMarkEntry> {
        debugger;
        given(id, "id").ensureHasValue().ensureIsString();

        return Promise.resolve(this._studentMarkEntry.find(t => t.student_id === id));
    }
    public getStudent(id: string): Promise<Student> {
        debugger;
        given(id, "id").ensureHasValue().ensureIsString();

        return Promise.resolve(this._student.find(t => t.id === id));
    }

    public getStudents(): Promise<ReadonlyArray<Student>> {
        return Promise.resolve(this._student);
    }


    public createStudentMarkEntry(student_id: string, studentName: string, subject: string, mark: string): Promise<StudentMarkEntry> {
        debugger;
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
        given(id, "id").ensureHasValue().ensureIsString();
        given(studentName, "studentName").ensureHasValue().ensureIsString();
        given(subject, "subject").ensureIsString();
        given(mark, "mark").ensureHasValue().ensureIsString();

        const studentMarkSEntry = this._studentMarkEntry.find(t => t.id === id);
        studentMarkSEntry.studentName = studentName;
        studentMarkSEntry.subject = subject;
        studentMarkSEntry.mark = mark;
        studentMarkSEntry.student_id = student_id;
        return Promise.resolve();
    }

    public createStudent(name: string, sex: string, division: string): Promise<Student> {
        debugger;
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
        given(id, "id").ensureHasValue().ensureIsString();
        given(name, "name").ensureHasValue().ensureIsString();
        given(sex, "sex").ensureIsString();
        given(division, "division").ensureHasValue().ensureIsString();

        const student = this._student.find(t => t.id === id);
        student.name = name;
        student.sex = sex;
        student.division = division;

        return Promise.resolve();
    }


    public deleteStudent(id: string): Promise<void> {
        given(id, "id").ensureHasValue().ensureIsString();
        const student = this._student.find(t => t.id === id);
        student.isDeleted = true;

        return Promise.resolve();
    }
}