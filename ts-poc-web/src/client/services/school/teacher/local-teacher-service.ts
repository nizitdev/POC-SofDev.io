import { given } from "@nivinjoseph/n-defensive";
import { TeacherService } from "../teacher/teacher-service";
import { User } from "../../../models/school/user";
import { Qualification } from "../../../models/school/qualification";


export class LocalTeacherService implements TeacherService {
    private readonly _teacher: Array<User>;
    private _counter: number;

    private readonly _qualification: Array<Qualification>;

    public constructor() {
        const teacher = new Array<User>();
        const count = 5;
        const qualification = new Array<Qualification>();

        qualification.push({
            id: "2",
            name: "UG",
        });
        qualification.push({
            id: "1",
            name: "Graduate",
        });
        qualification.push({
            id: "3",
            name: "PG",
        });
        this._qualification = qualification;



        for (let i = 0; i < count; i++) {
            teacher.push({
                id: "id" + i,
                name: "teacher" + i,
                userName: "UserName" + i,
                isAdmin: false,
                classInCharge: null,
                password: "12345678",
                isDeleted: false,
                qualification: ["UG", "PG"],
            });
        }

        this._teacher = teacher;
        this._counter = count;
    }

    public getTeachers(): Promise<ReadonlyArray<User>> {
        return Promise.resolve(this._teacher);
    }

    public getQualification(): Promise<ReadonlyArray<Qualification>> {
        return Promise.resolve(this._qualification);
    }
    public getTeacher(id: string): Promise<User> {
        debugger;
        given(id, "id").ensureHasValue().ensureIsString();

        return Promise.resolve(this._teacher.find(t => t.id === id));
    }


    public createTeacher(name: string, isAdmin: boolean, password: string, userName: string, classInCharge: string, qualification: Array<string>): Promise<User> {
        debugger;
        given(name, "name").ensureHasValue().ensureIsString();
        given(isAdmin, "isAdmin").ensureIsBoolean();
        given(password, "password").ensureHasValue().ensureIsString();
        given(userName, "userName").ensureHasValue().ensureIsString();
        given(classInCharge, "classInCharge").ensureIsString();
        given(qualification, "qualification").ensureIsArray().ensureHasValue();

        const teacher: User = {
            id: "id" + this._counter,
            name: name,
            isAdmin: isAdmin,
            password: password,
            userName: userName,
            isDeleted: false,
            qualification: qualification,
            classInCharge: classInCharge
        };

        this._teacher.push(teacher);
        return Promise.resolve(teacher);
    }

    public updateTeacher(id: string, name: string, isAdmin: boolean, password: string, userName: string, classInCharge: string, qualification: Array<string>): Promise<void> {
        given(id, "id").ensureHasValue().ensureIsString();
        given(name, "name").ensureHasValue().ensureIsString();
        given(isAdmin, "isAdmin").ensureIsBoolean();
        given(password, "password").ensureHasValue().ensureIsString();
        given(userName, "userName").ensureHasValue().ensureIsString();
        given(classInCharge, "classInCharge").ensureIsString();
        given(qualification, "qualification").ensureIsArray().ensureHasValue();

        const teacher = this._teacher.find(t => t.id === id);
        teacher.name = name;
        teacher.isAdmin = isAdmin;
        teacher.password = password;
        teacher.userName = userName;
        teacher.classInCharge = classInCharge;
        teacher.qualification = qualification;
        return Promise.resolve();
    }


    public deleteTeacher(id: string): Promise<void> {
        given(id, "id").ensureHasValue().ensureIsString();

        const teacher = this._teacher.find(t => t.id === id);
        teacher.isDeleted = true;

        return Promise.resolve();
    }
}