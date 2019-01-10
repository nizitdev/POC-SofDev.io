webpackHotUpdate("main",{

/***/ "./src/client/services/school/student/local-student-service.js":
/*!*********************************************************************!*\
  !*** ./src/client/services/school/student/local-student-service.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const n_defensive_1 = __webpack_require__(/*! @nivinjoseph/n-defensive */ "./node_modules/@nivinjoseph/n-defensive/dist/index.js");
class LocalStudentService {
    constructor() {
        const student = new Array();
        const count = 5;
        const studentMarkEntry = new Array();
        const subject = new Array();
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
    getStudentMarkEntries() {
        return Promise.resolve(this._studentMarkEntry);
    }
    getStudentMark(studentId) {
        n_defensive_1.given(studentId, "studentId").ensureHasValue().ensureIsString();
        debugger;
        return Promise.resolve(this._studentMarkEntry.filter(t => t.student_id === studentId));
    }
    getSubjects() {
        return Promise.resolve(this._subject);
    }
    getStudentMarkEntry(id) {
        debugger;
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        return Promise.resolve(this._studentMarkEntry.find(t => t.student_id === id));
    }
    getStudent(id) {
        debugger;
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        return Promise.resolve(this._student.find(t => t.id === id));
    }
    getStudents() {
        return Promise.resolve(this._student);
    }
    createStudentMarkEntry(student_id, studentName, subject, mark) {
        debugger;
        n_defensive_1.given(studentName, "studentName").ensureHasValue().ensureIsString();
        n_defensive_1.given(subject, "subject").ensureIsString();
        n_defensive_1.given(mark, "mark").ensureHasValue().ensureIsString();
        const studentMarkSEntry = {
            id: "id" + this._counter,
            subject: subject,
            mark: mark,
            student_id: student_id,
            studentName: studentName,
        };
        this._studentMarkEntry.push(studentMarkSEntry);
        return Promise.resolve(studentMarkSEntry);
    }
    updateStudentMarkEntry(id, student_id, studentName, subject, mark) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        n_defensive_1.given(studentName, "studentName").ensureHasValue().ensureIsString();
        n_defensive_1.given(subject, "subject").ensureIsString();
        n_defensive_1.given(mark, "mark").ensureHasValue().ensureIsString();
        const studentMarkSEntry = this._studentMarkEntry.find(t => t.id === id);
        studentMarkSEntry.studentName = studentName;
        studentMarkSEntry.subject = subject;
        studentMarkSEntry.mark = mark;
        studentMarkSEntry.student_id = student_id;
        return Promise.resolve();
    }
    createStudent(name, sex, division) {
        debugger;
        n_defensive_1.given(name, "name").ensureHasValue().ensureIsString();
        n_defensive_1.given(sex, "sex").ensureIsString();
        n_defensive_1.given(division, "division").ensureHasValue().ensureIsString();
        const student = {
            id: "id" + this._counter,
            name: name,
            sex: sex,
            isDeleted: false,
            division: division
        };
        this._student.push(student);
        return Promise.resolve(student);
    }
    updateStudent(id, name, sex, division) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        n_defensive_1.given(name, "name").ensureHasValue().ensureIsString();
        n_defensive_1.given(sex, "sex").ensureIsString();
        n_defensive_1.given(division, "division").ensureHasValue().ensureIsString();
        const student = this._student.find(t => t.id === id);
        student.name = name;
        student.sex = sex;
        student.division = division;
        return Promise.resolve();
    }
    deleteStudent(id) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        const student = this._student.find(t => t.id === id);
        student.isDeleted = true;
        return Promise.resolve();
    }
}
exports.LocalStudentService = LocalStudentService;
//# sourceMappingURL=local-student-service.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZpY2VzL3NjaG9vbC9zdHVkZW50L2xvY2FsLXN0dWRlbnQtc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRCIsImZpbGUiOiJtYWluLmIxZmJmZjk3ZmEzMzQyM2FhYjRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBuX2RlZmVuc2l2ZV8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWRlZmVuc2l2ZVwiKTtcclxuY2xhc3MgTG9jYWxTdHVkZW50U2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCBzdHVkZW50ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSA1O1xyXG4gICAgICAgIGNvbnN0IHN0dWRlbnRNYXJrRW50cnkgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBjb25zdCBzdWJqZWN0ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgc3ViamVjdC5wdXNoKHtcclxuICAgICAgICAgICAgaWQ6IFwiMVwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIk1hdGhzXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3ViamVjdC5wdXNoKHtcclxuICAgICAgICAgICAgaWQ6IFwiMVwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkhpbmRpXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3ViamVjdC5wdXNoKHtcclxuICAgICAgICAgICAgaWQ6IFwiMVwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlNjaWVuY2VcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdWJqZWN0LnB1c2goe1xyXG4gICAgICAgICAgICBpZDogXCIxXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiU29jaWFsXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3ViamVjdC5wdXNoKHtcclxuICAgICAgICAgICAgaWQ6IFwiMlwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkVuZ2xpc2hcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9zdWJqZWN0ID0gc3ViamVjdDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgc3R1ZGVudC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImlkXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJTdHVkZW50XCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgZGl2aXNpb246IFwieC1hXCIsXHJcbiAgICAgICAgICAgICAgICBzZXg6IFwiTWFsZVwiLFxyXG4gICAgICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudE1hcmtFbnRyeSA9IHN0dWRlbnRNYXJrRW50cnk7XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudCA9IHN0dWRlbnQ7XHJcbiAgICAgICAgdGhpcy5fY291bnRlciA9IGNvdW50O1xyXG4gICAgfVxyXG4gICAgZ2V0U3R1ZGVudE1hcmtFbnRyaWVzKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fc3R1ZGVudE1hcmtFbnRyeSk7XHJcbiAgICB9XHJcbiAgICBnZXRTdHVkZW50TWFyayhzdHVkZW50SWQpIHtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHN0dWRlbnRJZCwgXCJzdHVkZW50SWRcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fc3R1ZGVudE1hcmtFbnRyeS5maWx0ZXIodCA9PiB0LnN0dWRlbnRfaWQgPT09IHN0dWRlbnRJZCkpO1xyXG4gICAgfVxyXG4gICAgZ2V0U3ViamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9zdWJqZWN0KTtcclxuICAgIH1cclxuICAgIGdldFN0dWRlbnRNYXJrRW50cnkoaWQpIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGlkLCBcImlkXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3N0dWRlbnRNYXJrRW50cnkuZmluZCh0ID0+IHQuc3R1ZGVudF9pZCA9PT0gaWQpKTtcclxuICAgIH1cclxuICAgIGdldFN0dWRlbnQoaWQpIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGlkLCBcImlkXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3N0dWRlbnQuZmluZCh0ID0+IHQuaWQgPT09IGlkKSk7XHJcbiAgICB9XHJcbiAgICBnZXRTdHVkZW50cygpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3N0dWRlbnQpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlU3R1ZGVudE1hcmtFbnRyeShzdHVkZW50X2lkLCBzdHVkZW50TmFtZSwgc3ViamVjdCwgbWFyaykge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oc3R1ZGVudE5hbWUsIFwic3R1ZGVudE5hbWVcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oc3ViamVjdCwgXCJzdWJqZWN0XCIpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihtYXJrLCBcIm1hcmtcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHN0dWRlbnRNYXJrU0VudHJ5ID0ge1xyXG4gICAgICAgICAgICBpZDogXCJpZFwiICsgdGhpcy5fY291bnRlcixcclxuICAgICAgICAgICAgc3ViamVjdDogc3ViamVjdCxcclxuICAgICAgICAgICAgbWFyazogbWFyayxcclxuICAgICAgICAgICAgc3R1ZGVudF9pZDogc3R1ZGVudF9pZCxcclxuICAgICAgICAgICAgc3R1ZGVudE5hbWU6IHN0dWRlbnROYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudE1hcmtFbnRyeS5wdXNoKHN0dWRlbnRNYXJrU0VudHJ5KTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN0dWRlbnRNYXJrU0VudHJ5KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVN0dWRlbnRNYXJrRW50cnkoaWQsIHN0dWRlbnRfaWQsIHN0dWRlbnROYW1lLCBzdWJqZWN0LCBtYXJrKSB7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihpZCwgXCJpZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihzdHVkZW50TmFtZSwgXCJzdHVkZW50TmFtZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihzdWJqZWN0LCBcInN1YmplY3RcIikuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKG1hcmssIFwibWFya1wiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3Qgc3R1ZGVudE1hcmtTRW50cnkgPSB0aGlzLl9zdHVkZW50TWFya0VudHJ5LmZpbmQodCA9PiB0LmlkID09PSBpZCk7XHJcbiAgICAgICAgc3R1ZGVudE1hcmtTRW50cnkuc3R1ZGVudE5hbWUgPSBzdHVkZW50TmFtZTtcclxuICAgICAgICBzdHVkZW50TWFya1NFbnRyeS5zdWJqZWN0ID0gc3ViamVjdDtcclxuICAgICAgICBzdHVkZW50TWFya1NFbnRyeS5tYXJrID0gbWFyaztcclxuICAgICAgICBzdHVkZW50TWFya1NFbnRyeS5zdHVkZW50X2lkID0gc3R1ZGVudF9pZDtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVTdHVkZW50KG5hbWUsIHNleCwgZGl2aXNpb24pIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKG5hbWUsIFwibmFtZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihzZXgsIFwic2V4XCIpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihkaXZpc2lvbiwgXCJkaXZpc2lvblwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3Qgc3R1ZGVudCA9IHtcclxuICAgICAgICAgICAgaWQ6IFwiaWRcIiArIHRoaXMuX2NvdW50ZXIsXHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIHNleDogc2V4LFxyXG4gICAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkaXZpc2lvbjogZGl2aXNpb25cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnQucHVzaChzdHVkZW50KTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN0dWRlbnQpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlU3R1ZGVudChpZCwgbmFtZSwgc2V4LCBkaXZpc2lvbikge1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oaWQsIFwiaWRcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4obmFtZSwgXCJuYW1lXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHNleCwgXCJzZXhcIikuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGRpdmlzaW9uLCBcImRpdmlzaW9uXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBzdHVkZW50ID0gdGhpcy5fc3R1ZGVudC5maW5kKHQgPT4gdC5pZCA9PT0gaWQpO1xyXG4gICAgICAgIHN0dWRlbnQubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgc3R1ZGVudC5zZXggPSBzZXg7XHJcbiAgICAgICAgc3R1ZGVudC5kaXZpc2lvbiA9IGRpdmlzaW9uO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZVN0dWRlbnQoaWQpIHtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGlkLCBcImlkXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBzdHVkZW50ID0gdGhpcy5fc3R1ZGVudC5maW5kKHQgPT4gdC5pZCA9PT0gaWQpO1xyXG4gICAgICAgIHN0dWRlbnQuaXNEZWxldGVkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Mb2NhbFN0dWRlbnRTZXJ2aWNlID0gTG9jYWxTdHVkZW50U2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9jYWwtc3R1ZGVudC1zZXJ2aWNlLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=