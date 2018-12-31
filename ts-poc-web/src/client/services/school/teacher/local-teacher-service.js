"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n_defensive_1 = require("@nivinjoseph/n-defensive");
class LocalTeacherService {
    constructor() {
        const teacher = new Array();
        const count = 10;
        for (let i = 0; i < count; i++) {
            teacher.push({
                id: "id" + i,
                address: "address" + i,
                dateOfBirth: "dateOfBirth" + i,
                sex: "sex" + i,
                firstName: "firstName" + i,
                lastName: "lastName" + i,
                isDeleted: false
            });
        }
        this._teacher = teacher;
        this._counter = count;
    }
    getTeachers() {
        return Promise.resolve(this._teacher);
    }
    getTeacher(id) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        return Promise.resolve(this._teacher.find(t => t.id === id));
    }
    createTeacher(firstName, lastName, dateOfBirth, sex, address) {
        n_defensive_1.given(firstName, "firstName").ensureHasValue().ensureIsString();
        n_defensive_1.given(lastName, "lastName").ensureIsString();
        n_defensive_1.given(dateOfBirth, "dateOfBirth").ensureHasValue().ensureIsString();
        n_defensive_1.given(sex, "sex").ensureIsString();
        n_defensive_1.given(address, "address").ensureIsString();
        const teacher = {
            id: "id" + this._counter,
            address: address,
            dateOfBirth: dateOfBirth,
            firstName: firstName,
            lastName: lastName,
            sex: sex,
            isDeleted: false
        };
        this._teacher.push(teacher);
        return Promise.resolve(teacher);
    }
    updateTeacher(id, firstName, lastName, dateOfBirth, sex, address) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        n_defensive_1.given(firstName, "firstName").ensureHasValue().ensureIsString();
        n_defensive_1.given(lastName, "lastName").ensureIsString();
        n_defensive_1.given(dateOfBirth, "dateOfBirth").ensureHasValue().ensureIsString();
        n_defensive_1.given(sex, "sex").ensureIsString();
        n_defensive_1.given(address, "address").ensureIsString();
        const teacher = this._teacher.find(t => t.id === id);
        teacher.firstName = firstName;
        teacher.lastName = lastName;
        teacher.dateOfBirth = dateOfBirth;
        teacher.address = address;
        teacher.sex = sex;
        return Promise.resolve();
    }
    deleteTeacher(id) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        const teacher = this._teacher.find(t => t.id === id);
        teacher.isDeleted = true;
        return Promise.resolve();
    }
}
exports.LocalTeacherService = LocalTeacherService;
//# sourceMappingURL=local-teacher-service.js.map