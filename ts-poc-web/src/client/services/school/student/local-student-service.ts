import { given } from "@nivinjoseph/n-defensive";
import { StudentService } from "../student/student-service";
import { Student } from "../../../models/school/student";


export class LocalStudentService implements StudentService {
    private readonly _student: Array<Student>;
    private _counter: number;


    public constructor() {
        const student = new Array<Student>();
        const count = 5;

        for (let i = 0; i < count; i++) {
            student.push({
                id: "id" + i,
                name: "Student" + i,
               division: "x-a",
               sex: "male",
               isDeleted: false
            });
        }

        this._student = student;
         this._counter = count;
    }


    public getStudents(): Promise<ReadonlyArray<Student>> {
        return Promise.resolve(this._student);
    }

    public getStudent(id: string): Promise<Student> {
        debugger;
        given(id, "id").ensureHasValue().ensureIsString();

        return Promise.resolve(this._student.find(t => t.id === id));
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

     
    // public deleteTeacher(id: string): Promise<void> {
    //     given(id, "id").ensureHasValue().ensureIsString();

    //     const teacher = this._teacher.find(t => t.id === id);
    //     teacher.isDeleted = true;

    //     return Promise.resolve();
    // }
}