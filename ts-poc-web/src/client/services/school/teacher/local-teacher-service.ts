import { TeacherService } from "../teacher/teacher-service";
import { User } from "../../../models/school/user";
import { given } from "@nivinjoseph/n-defensive";


export class LocalTeacherService implements TeacherService {
    private readonly _teacher: Array<User>;
   // private _counter: number;


    public constructor() {
        const teacher = new Array<User>();
        const count = 10;

        for (let i = 0; i < count; i++) {
            teacher.push({
                id: "id" + i,
                name: "teacher" + i,
                userName: "" + i,
                IsAdmin: true,
                classInCharge: null,
                password : "12345678",
                isDeleted: false
            });
        }

        this._teacher = teacher;
      //  this._counter = count;
    }


    public getTeachers(): Promise<ReadonlyArray<User>> {
        return Promise.resolve(this._teacher);
    }

    public getTeacher(id: string): Promise<User> {
        given(id, "id").ensureHasValue().ensureIsString();

        return Promise.resolve(this._teacher.find(t => t.id === id));
    }

    // public createTeacher(firstName: string, lastName: string, dateOfBirth: string, sex: string, address: string): Promise<Teacher> {
    //     given(firstName, "firstName").ensureHasValue().ensureIsString();
    //     given(lastName, "lastName").ensureIsString();
    //     given(dateOfBirth, "dateOfBirth").ensureHasValue().ensureIsString();
    //     given(sex, "sex").ensureIsString();
    //     given(address, "address").ensureIsString();

    //     const teacher: Teacher = {
    //         id: "id" + this._counter,
    //         address: address,
    //         dateOfBirth: dateOfBirth,
    //         firstName: firstName,
    //         lastName: lastName,
    //         sex: sex,
    //         isDeleted: false
    //     };

    //     this._teacher.push(teacher);
    //     return Promise.resolve(teacher);
    // }

    // public updateTeacher(id: string, firstName: string, lastName: string, dateOfBirth: string, sex: string, address: string): Promise<void> {
    //     given(id, "id").ensureHasValue().ensureIsString();
    //     given(firstName, "firstName").ensureHasValue().ensureIsString();
    //     given(lastName, "lastName").ensureIsString();
    //     given(dateOfBirth, "dateOfBirth").ensureHasValue().ensureIsString();
    //     given(sex, "sex").ensureIsString();
    //     given(address, "address").ensureIsString();

    //     const teacher = this._teacher.find(t => t.id === id);
    //     teacher.firstName = firstName;
    //     teacher.lastName = lastName;
    //     teacher.dateOfBirth = dateOfBirth;
    //     teacher.address = address;
    //     teacher.sex = sex;

    //     return Promise.resolve();
    // }

     
    // public deleteTeacher(id: string): Promise<void> {
    //     given(id, "id").ensureHasValue().ensureIsString();

    //     const teacher = this._teacher.find(t => t.id === id);
    //     teacher.isDeleted = true;

    //     return Promise.resolve();
    // }
}