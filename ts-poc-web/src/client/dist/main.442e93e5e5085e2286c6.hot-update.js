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
        student.forEach(element => {
            subject.forEach(x => {
                studentMarkEntry.push({
                    id: element.id,
                    studentName: element.name,
                    mark: "50",
                    subject: x.name
                });
            });
        });
        this._studentMarkEntry = studentMarkEntry;
        this._student = student;
        this._counter = count;
    }
    getStudentMarkEntry() {
        return Promise.resolve(this._studentMarkEntry);
    }
    getSubjects() {
        return Promise.resolve(this._subject);
    }
    getStudent(id) {
        debugger;
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        return Promise.resolve(this._student.find(t => t.id === id));
    }
    getStudents() {
        return Promise.resolve(this._student);
    }
    createStudentMarkEntry(studentName, subject, mark) {
        debugger;
        n_defensive_1.given(studentName, "studentName").ensureHasValue().ensureIsString();
        n_defensive_1.given(subject, "subject").ensureIsString();
        n_defensive_1.given(mark, "mark").ensureHasValue().ensureIsString();
        const studentMarkSEntry = {
            id: "id" + this._counter,
            subject: subject,
            mark: mark,
            studentName: studentName,
        };
        this._studentMarkEntry.push(studentMarkSEntry);
        return Promise.resolve(studentMarkSEntry);
    }
    updateStudentMarkEntry(id, studentName, subject, mark) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        n_defensive_1.given(studentName, "studentName").ensureHasValue().ensureIsString();
        n_defensive_1.given(subject, "subject").ensureIsString();
        n_defensive_1.given(mark, "mark").ensureHasValue().ensureIsString();
        const studentMarkSEntry = this._studentMarkEntry.find(t => t.id === id);
        studentMarkSEntry.studentName = studentName;
        studentMarkSEntry.subject = subject;
        studentMarkSEntry.mark = mark;
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
}
exports.LocalStudentService = LocalStudentService;
//# sourceMappingURL=local-student-service.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZpY2VzL3NjaG9vbC9zdHVkZW50L2xvY2FsLXN0dWRlbnQtc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEIiwiZmlsZSI6Im1haW4uNDQyZTkzZTVlNTA4NWUyMjg2YzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5fZGVmZW5zaXZlXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tZGVmZW5zaXZlXCIpO1xyXG5jbGFzcyBMb2NhbFN0dWRlbnRTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IHN0dWRlbnQgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBjb25zdCBjb3VudCA9IDU7XHJcbiAgICAgICAgY29uc3Qgc3R1ZGVudE1hcmtFbnRyeSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGNvbnN0IHN1YmplY3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBzdWJqZWN0LnB1c2goe1xyXG4gICAgICAgICAgICBpZDogXCIxXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiTWF0aHNcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdWJqZWN0LnB1c2goe1xyXG4gICAgICAgICAgICBpZDogXCIyXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiRW5nbGlzaFwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3N1YmplY3QgPSBzdWJqZWN0O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBzdHVkZW50LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiaWRcIiArIGksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlN0dWRlbnRcIiArIGksXHJcbiAgICAgICAgICAgICAgICBkaXZpc2lvbjogXCJ4LWFcIixcclxuICAgICAgICAgICAgICAgIHNleDogXCJNYWxlXCIsXHJcbiAgICAgICAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHVkZW50LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIHN1YmplY3QuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICAgIHN0dWRlbnRNYXJrRW50cnkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGVsZW1lbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R1ZGVudE5hbWU6IGVsZW1lbnQubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBtYXJrOiBcIjUwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogeC5uYW1lXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudE1hcmtFbnRyeSA9IHN0dWRlbnRNYXJrRW50cnk7XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudCA9IHN0dWRlbnQ7XHJcbiAgICAgICAgdGhpcy5fY291bnRlciA9IGNvdW50O1xyXG4gICAgfVxyXG4gICAgZ2V0U3R1ZGVudE1hcmtFbnRyeSgpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3N0dWRlbnRNYXJrRW50cnkpO1xyXG4gICAgfVxyXG4gICAgZ2V0U3ViamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9zdWJqZWN0KTtcclxuICAgIH1cclxuICAgIGdldFN0dWRlbnQoaWQpIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGlkLCBcImlkXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3N0dWRlbnQuZmluZCh0ID0+IHQuaWQgPT09IGlkKSk7XHJcbiAgICB9XHJcbiAgICBnZXRTdHVkZW50cygpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3N0dWRlbnQpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlU3R1ZGVudE1hcmtFbnRyeShzdHVkZW50TmFtZSwgc3ViamVjdCwgbWFyaykge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oc3R1ZGVudE5hbWUsIFwic3R1ZGVudE5hbWVcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oc3ViamVjdCwgXCJzdWJqZWN0XCIpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihtYXJrLCBcIm1hcmtcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHN0dWRlbnRNYXJrU0VudHJ5ID0ge1xyXG4gICAgICAgICAgICBpZDogXCJpZFwiICsgdGhpcy5fY291bnRlcixcclxuICAgICAgICAgICAgc3ViamVjdDogc3ViamVjdCxcclxuICAgICAgICAgICAgbWFyazogbWFyayxcclxuICAgICAgICAgICAgc3R1ZGVudE5hbWU6IHN0dWRlbnROYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudE1hcmtFbnRyeS5wdXNoKHN0dWRlbnRNYXJrU0VudHJ5KTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN0dWRlbnRNYXJrU0VudHJ5KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVN0dWRlbnRNYXJrRW50cnkoaWQsIHN0dWRlbnROYW1lLCBzdWJqZWN0LCBtYXJrKSB7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihpZCwgXCJpZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihzdHVkZW50TmFtZSwgXCJzdHVkZW50TmFtZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihzdWJqZWN0LCBcInN1YmplY3RcIikuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKG1hcmssIFwibWFya1wiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3Qgc3R1ZGVudE1hcmtTRW50cnkgPSB0aGlzLl9zdHVkZW50TWFya0VudHJ5LmZpbmQodCA9PiB0LmlkID09PSBpZCk7XHJcbiAgICAgICAgc3R1ZGVudE1hcmtTRW50cnkuc3R1ZGVudE5hbWUgPSBzdHVkZW50TmFtZTtcclxuICAgICAgICBzdHVkZW50TWFya1NFbnRyeS5zdWJqZWN0ID0gc3ViamVjdDtcclxuICAgICAgICBzdHVkZW50TWFya1NFbnRyeS5tYXJrID0gbWFyaztcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVTdHVkZW50KG5hbWUsIHNleCwgZGl2aXNpb24pIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKG5hbWUsIFwibmFtZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihzZXgsIFwic2V4XCIpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihkaXZpc2lvbiwgXCJkaXZpc2lvblwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3Qgc3R1ZGVudCA9IHtcclxuICAgICAgICAgICAgaWQ6IFwiaWRcIiArIHRoaXMuX2NvdW50ZXIsXHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIHNleDogc2V4LFxyXG4gICAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkaXZpc2lvbjogZGl2aXNpb25cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnQucHVzaChzdHVkZW50KTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN0dWRlbnQpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlU3R1ZGVudChpZCwgbmFtZSwgc2V4LCBkaXZpc2lvbikge1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oaWQsIFwiaWRcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4obmFtZSwgXCJuYW1lXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHNleCwgXCJzZXhcIikuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGRpdmlzaW9uLCBcImRpdmlzaW9uXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBzdHVkZW50ID0gdGhpcy5fc3R1ZGVudC5maW5kKHQgPT4gdC5pZCA9PT0gaWQpO1xyXG4gICAgICAgIHN0dWRlbnQubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgc3R1ZGVudC5zZXggPSBzZXg7XHJcbiAgICAgICAgc3R1ZGVudC5kaXZpc2lvbiA9IGRpdmlzaW9uO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkxvY2FsU3R1ZGVudFNlcnZpY2UgPSBMb2NhbFN0dWRlbnRTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2NhbC1zdHVkZW50LXNlcnZpY2UuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==