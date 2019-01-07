import { given } from "@nivinjoseph/n-defensive";
import { TeacherService } from "../teacher/teacher-service";
import { User } from "../../../models/school/user";
import { Subject } from "../../../models/school/subject";


export class LocalTeacherService implements TeacherService {
    private readonly _teacher: Array<User>;
    private _counter: number;
 
    private readonly _subject: Array<Subject>;

    public constructor() {
        const teacher = new Array<User>();
        const count = 10;
      
        const subject =  new Array<Subject>();
        
            subject.push({
                id: "1" ,
                name: "Maths",
            });
            subject.push({
                id: "2" ,
                name: "English",
            });
            this._subject = subject;
        for (let i = 0; i < count; i++) {
            teacher.push({
                id: "id" + i,
                name: "teacher" + i,
                userName: "UserName" + i,
                isAdmin: false,
                classInCharge: null,
                password : "12345678",
                isDeleted: false
            });
        }

        this._teacher = teacher;
         this._counter = count;
    }

  public getTeachers(): Promise<ReadonlyArray<User>> {
        return Promise.resolve(this._teacher);
    }
   public getSubjects(): Promise<ReadonlyArray<Subject>> {
        return Promise.resolve(this._subject);
    }

    public getTeacher(id: string): Promise<User> {
        debugger;
        given(id, "id").ensureHasValue().ensureIsString();

        return Promise.resolve(this._teacher.find(t => t.id === id));
    }
    

    public createTeacher(name: string, isAdmin: boolean, password: string, userName: string, classInCharge: string): Promise<User> {
     debugger;
        given(name, "name").ensureHasValue().ensureIsString();
        given(isAdmin, "isAdmin").ensureIsBoolean();
        given(password, "password").ensureHasValue().ensureIsString();
        given(userName, "userName").ensureHasValue().ensureIsString();
        given(classInCharge, "classInCharge").ensureIsString();
        const teacher: User = {
            id: "id" + this._counter,
            name: name,
            isAdmin: isAdmin,
            password: password,
            userName: userName,
            isDeleted: false,
            classInCharge: classInCharge
        };

        this._teacher.push(teacher);
        return Promise.resolve(teacher);
    }

    public updateTeacher(id: string, name: string, isAdmin: boolean, password: string, userName: string, classInCharge: string): Promise<void> {
        given(id, "id").ensureHasValue().ensureIsString();
        given(name, "name").ensureHasValue().ensureIsString();
        given(isAdmin, "isAdmin").ensureIsBoolean();
        given(password, "password").ensureHasValue().ensureIsString();
        given(userName, "userName").ensureHasValue().ensureIsString();
        given(classInCharge, "classInCharge").ensureIsString();
         
        const teacher = this._teacher.find(t => t.id === id);
        teacher.name = name;
        teacher.isAdmin = isAdmin;
        teacher.password = password;
        teacher.userName = userName;
        teacher.classInCharge = classInCharge;

        return Promise.resolve();
    }

     
    // public deleteTeacher(id: string): Promise<void> {
    //     given(id, "id").ensureHasValue().ensureIsString();

    //     const teacher = this._teacher.find(t => t.id === id);
    //     teacher.isDeleted = true;

    //     return Promise.resolve();
    // }
}