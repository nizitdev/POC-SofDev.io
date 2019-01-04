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
                name: "teacher" + i,
                userName: "" + i,
                IsAdmin: true,
                classInCharge: null,
                password: "12345678",
                isDeleted: false
            });
        }
        this._teacher = teacher;
    }
    getTeachers() {
        return Promise.resolve(this._teacher);
    }
    getTeacher(id) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        return Promise.resolve(this._teacher.find(t => t.id === id));
    }
}
exports.LocalTeacherService = LocalTeacherService;
//# sourceMappingURL=local-teacher-service.js.map