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
            name: "Hindi",
        });
        subject.push({
            id: "3",
            name: "Science",
        });
        subject.push({
            id: "4",
            name: "Social",
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
        return Promise.resolve(this._studentMarkEntry.filter(t => t.student_id === studentId));
    }
    getSubjects() {
        return Promise.resolve(this._subject);
    }
    getStudentMarkEntry(id) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        return Promise.resolve(this._studentMarkEntry.find(t => t.student_id === id));
    }
    getStudent(id) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        return Promise.resolve(this._student.find(t => t.id === id));
    }
    getStudents() {
        return Promise.resolve(this._student);
    }
    createStudentMarkEntry(student_id, studentName, subject, mark) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZpY2VzL3NjaG9vbC9zdHVkZW50L2xvY2FsLXN0dWRlbnQtc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEIiwiZmlsZSI6Im1haW4uNjBkMjc2OGQ0ODlmOTE2ZTRmMmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5fZGVmZW5zaXZlXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tZGVmZW5zaXZlXCIpO1xyXG5jbGFzcyBMb2NhbFN0dWRlbnRTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IHN0dWRlbnQgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBjb25zdCBjb3VudCA9IDU7XHJcbiAgICAgICAgY29uc3Qgc3R1ZGVudE1hcmtFbnRyeSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGNvbnN0IHN1YmplY3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBzdWJqZWN0LnB1c2goe1xyXG4gICAgICAgICAgICBpZDogXCIxXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiTWF0aHNcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdWJqZWN0LnB1c2goe1xyXG4gICAgICAgICAgICBpZDogXCIyXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSGluZGlcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdWJqZWN0LnB1c2goe1xyXG4gICAgICAgICAgICBpZDogXCIzXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiU2NpZW5jZVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN1YmplY3QucHVzaCh7XHJcbiAgICAgICAgICAgIGlkOiBcIjRcIixcclxuICAgICAgICAgICAgbmFtZTogXCJTb2NpYWxcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdWJqZWN0LnB1c2goe1xyXG4gICAgICAgICAgICBpZDogXCI1XCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiRW5nbGlzaFwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3N1YmplY3QgPSBzdWJqZWN0O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBzdHVkZW50LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiaWRcIiArIGksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlN0dWRlbnRcIiArIGksXHJcbiAgICAgICAgICAgICAgICBkaXZpc2lvbjogXCJ4LWFcIixcclxuICAgICAgICAgICAgICAgIHNleDogXCJNYWxlXCIsXHJcbiAgICAgICAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdHVkZW50TWFya0VudHJ5ID0gc3R1ZGVudE1hcmtFbnRyeTtcclxuICAgICAgICB0aGlzLl9zdHVkZW50ID0gc3R1ZGVudDtcclxuICAgICAgICB0aGlzLl9jb3VudGVyID0gY291bnQ7XHJcbiAgICB9XHJcbiAgICBnZXRTdHVkZW50TWFya0VudHJpZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9zdHVkZW50TWFya0VudHJ5KTtcclxuICAgIH1cclxuICAgIGdldFN0dWRlbnRNYXJrKHN0dWRlbnRJZCkge1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oc3R1ZGVudElkLCBcInN0dWRlbnRJZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9zdHVkZW50TWFya0VudHJ5LmZpbHRlcih0ID0+IHQuc3R1ZGVudF9pZCA9PT0gc3R1ZGVudElkKSk7XHJcbiAgICB9XHJcbiAgICBnZXRTdWJqZWN0cygpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3N1YmplY3QpO1xyXG4gICAgfVxyXG4gICAgZ2V0U3R1ZGVudE1hcmtFbnRyeShpZCkge1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oaWQsIFwiaWRcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fc3R1ZGVudE1hcmtFbnRyeS5maW5kKHQgPT4gdC5zdHVkZW50X2lkID09PSBpZCkpO1xyXG4gICAgfVxyXG4gICAgZ2V0U3R1ZGVudChpZCkge1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oaWQsIFwiaWRcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fc3R1ZGVudC5maW5kKHQgPT4gdC5pZCA9PT0gaWQpKTtcclxuICAgIH1cclxuICAgIGdldFN0dWRlbnRzKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fc3R1ZGVudCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVTdHVkZW50TWFya0VudHJ5KHN0dWRlbnRfaWQsIHN0dWRlbnROYW1lLCBzdWJqZWN0LCBtYXJrKSB7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihzdHVkZW50TmFtZSwgXCJzdHVkZW50TmFtZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihzdWJqZWN0LCBcInN1YmplY3RcIikuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKG1hcmssIFwibWFya1wiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3Qgc3R1ZGVudE1hcmtTRW50cnkgPSB7XHJcbiAgICAgICAgICAgIGlkOiBcImlkXCIgKyB0aGlzLl9jb3VudGVyLFxyXG4gICAgICAgICAgICBzdWJqZWN0OiBzdWJqZWN0LFxyXG4gICAgICAgICAgICBtYXJrOiBtYXJrLFxyXG4gICAgICAgICAgICBzdHVkZW50X2lkOiBzdHVkZW50X2lkLFxyXG4gICAgICAgICAgICBzdHVkZW50TmFtZTogc3R1ZGVudE5hbWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9zdHVkZW50TWFya0VudHJ5LnB1c2goc3R1ZGVudE1hcmtTRW50cnkpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc3R1ZGVudE1hcmtTRW50cnkpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlU3R1ZGVudE1hcmtFbnRyeShpZCwgc3R1ZGVudF9pZCwgc3R1ZGVudE5hbWUsIHN1YmplY3QsIG1hcmspIHtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGlkLCBcImlkXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHN0dWRlbnROYW1lLCBcInN0dWRlbnROYW1lXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHN1YmplY3QsIFwic3ViamVjdFwiKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4obWFyaywgXCJtYXJrXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBzdHVkZW50TWFya1NFbnRyeSA9IHRoaXMuX3N0dWRlbnRNYXJrRW50cnkuZmluZCh0ID0+IHQuaWQgPT09IGlkKTtcclxuICAgICAgICBzdHVkZW50TWFya1NFbnRyeS5zdHVkZW50TmFtZSA9IHN0dWRlbnROYW1lO1xyXG4gICAgICAgIHN0dWRlbnRNYXJrU0VudHJ5LnN1YmplY3QgPSBzdWJqZWN0O1xyXG4gICAgICAgIHN0dWRlbnRNYXJrU0VudHJ5Lm1hcmsgPSBtYXJrO1xyXG4gICAgICAgIHN0dWRlbnRNYXJrU0VudHJ5LnN0dWRlbnRfaWQgPSBzdHVkZW50X2lkO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVN0dWRlbnQobmFtZSwgc2V4LCBkaXZpc2lvbikge1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4obmFtZSwgXCJuYW1lXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHNleCwgXCJzZXhcIikuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGRpdmlzaW9uLCBcImRpdmlzaW9uXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBzdHVkZW50ID0ge1xyXG4gICAgICAgICAgICBpZDogXCJpZFwiICsgdGhpcy5fY291bnRlcixcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgc2V4OiBzZXgsXHJcbiAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpdmlzaW9uOiBkaXZpc2lvblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudC5wdXNoKHN0dWRlbnQpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc3R1ZGVudCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVTdHVkZW50KGlkLCBuYW1lLCBzZXgsIGRpdmlzaW9uKSB7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihpZCwgXCJpZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihuYW1lLCBcIm5hbWVcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oc2V4LCBcInNleFwiKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oZGl2aXNpb24sIFwiZGl2aXNpb25cIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHN0dWRlbnQgPSB0aGlzLl9zdHVkZW50LmZpbmQodCA9PiB0LmlkID09PSBpZCk7XHJcbiAgICAgICAgc3R1ZGVudC5uYW1lID0gbmFtZTtcclxuICAgICAgICBzdHVkZW50LnNleCA9IHNleDtcclxuICAgICAgICBzdHVkZW50LmRpdmlzaW9uID0gZGl2aXNpb247XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlU3R1ZGVudChpZCkge1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oaWQsIFwiaWRcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHN0dWRlbnQgPSB0aGlzLl9zdHVkZW50LmZpbmQodCA9PiB0LmlkID09PSBpZCk7XHJcbiAgICAgICAgc3R1ZGVudC5pc0RlbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkxvY2FsU3R1ZGVudFNlcnZpY2UgPSBMb2NhbFN0dWRlbnRTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2NhbC1zdHVkZW50LXNlcnZpY2UuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==