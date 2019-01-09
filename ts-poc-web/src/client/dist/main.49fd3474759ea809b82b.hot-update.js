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
                    id: "id",
                    student_id: element.id,
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
    getStudentMarkEntries() {
        return Promise.resolve(this._studentMarkEntry);
    }
    getSubjects() {
        return Promise.resolve(this._subject);
    }
    getStudentMarkEntry(id) {
        debugger;
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        return Promise.resolve(this._studentMarkEntry.find(t => t.id === id));
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
}
exports.LocalStudentService = LocalStudentService;
//# sourceMappingURL=local-student-service.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZpY2VzL3NjaG9vbC9zdHVkZW50L2xvY2FsLXN0dWRlbnQtc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRCIsImZpbGUiOiJtYWluLjQ5ZmQzNDc0NzU5ZWE4MDliODJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBuX2RlZmVuc2l2ZV8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWRlZmVuc2l2ZVwiKTtcclxuY2xhc3MgTG9jYWxTdHVkZW50U2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCBzdHVkZW50ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSA1O1xyXG4gICAgICAgIGNvbnN0IHN0dWRlbnRNYXJrRW50cnkgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBjb25zdCBzdWJqZWN0ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgc3ViamVjdC5wdXNoKHtcclxuICAgICAgICAgICAgaWQ6IFwiMVwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIk1hdGhzXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3ViamVjdC5wdXNoKHtcclxuICAgICAgICAgICAgaWQ6IFwiMlwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkVuZ2xpc2hcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9zdWJqZWN0ID0gc3ViamVjdDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgc3R1ZGVudC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImlkXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJTdHVkZW50XCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgZGl2aXNpb246IFwieC1hXCIsXHJcbiAgICAgICAgICAgICAgICBzZXg6IFwiTWFsZVwiLFxyXG4gICAgICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3R1ZGVudC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBzdWJqZWN0LmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdHVkZW50TWFya0VudHJ5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R1ZGVudF9pZDogZWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBzdHVkZW50TmFtZTogZWxlbWVudC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcms6IFwiNTBcIixcclxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiB4Lm5hbWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9zdHVkZW50TWFya0VudHJ5ID0gc3R1ZGVudE1hcmtFbnRyeTtcclxuICAgICAgICB0aGlzLl9zdHVkZW50ID0gc3R1ZGVudDtcclxuICAgICAgICB0aGlzLl9jb3VudGVyID0gY291bnQ7XHJcbiAgICB9XHJcbiAgICBnZXRTdHVkZW50TWFya0VudHJpZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9zdHVkZW50TWFya0VudHJ5KTtcclxuICAgIH1cclxuICAgIGdldFN1YmplY3RzKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fc3ViamVjdCk7XHJcbiAgICB9XHJcbiAgICBnZXRTdHVkZW50TWFya0VudHJ5KGlkKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihpZCwgXCJpZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9zdHVkZW50TWFya0VudHJ5LmZpbmQodCA9PiB0LmlkID09PSBpZCkpO1xyXG4gICAgfVxyXG4gICAgZ2V0U3R1ZGVudChpZCkge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oaWQsIFwiaWRcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fc3R1ZGVudC5maW5kKHQgPT4gdC5pZCA9PT0gaWQpKTtcclxuICAgIH1cclxuICAgIGdldFN0dWRlbnRzKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fc3R1ZGVudCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVTdHVkZW50TWFya0VudHJ5KHN0dWRlbnRfaWQsIHN0dWRlbnROYW1lLCBzdWJqZWN0LCBtYXJrKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihzdHVkZW50TmFtZSwgXCJzdHVkZW50TmFtZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihzdWJqZWN0LCBcInN1YmplY3RcIikuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKG1hcmssIFwibWFya1wiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3Qgc3R1ZGVudE1hcmtTRW50cnkgPSB7XHJcbiAgICAgICAgICAgIGlkOiBcImlkXCIgKyB0aGlzLl9jb3VudGVyLFxyXG4gICAgICAgICAgICBzdWJqZWN0OiBzdWJqZWN0LFxyXG4gICAgICAgICAgICBtYXJrOiBtYXJrLFxyXG4gICAgICAgICAgICBzdHVkZW50X2lkOiBzdHVkZW50X2lkLFxyXG4gICAgICAgICAgICBzdHVkZW50TmFtZTogc3R1ZGVudE5hbWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9zdHVkZW50TWFya0VudHJ5LnB1c2goc3R1ZGVudE1hcmtTRW50cnkpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc3R1ZGVudE1hcmtTRW50cnkpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlU3R1ZGVudE1hcmtFbnRyeShpZCwgc3R1ZGVudF9pZCwgc3R1ZGVudE5hbWUsIHN1YmplY3QsIG1hcmspIHtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGlkLCBcImlkXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHN0dWRlbnROYW1lLCBcInN0dWRlbnROYW1lXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHN1YmplY3QsIFwic3ViamVjdFwiKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4obWFyaywgXCJtYXJrXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBzdHVkZW50TWFya1NFbnRyeSA9IHRoaXMuX3N0dWRlbnRNYXJrRW50cnkuZmluZCh0ID0+IHQuaWQgPT09IGlkKTtcclxuICAgICAgICBzdHVkZW50TWFya1NFbnRyeS5zdHVkZW50TmFtZSA9IHN0dWRlbnROYW1lO1xyXG4gICAgICAgIHN0dWRlbnRNYXJrU0VudHJ5LnN1YmplY3QgPSBzdWJqZWN0O1xyXG4gICAgICAgIHN0dWRlbnRNYXJrU0VudHJ5Lm1hcmsgPSBtYXJrO1xyXG4gICAgICAgIHN0dWRlbnRNYXJrU0VudHJ5LnN0dWRlbnRfaWQgPSBzdHVkZW50X2lkO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVN0dWRlbnQobmFtZSwgc2V4LCBkaXZpc2lvbikge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4obmFtZSwgXCJuYW1lXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHNleCwgXCJzZXhcIikuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGRpdmlzaW9uLCBcImRpdmlzaW9uXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBzdHVkZW50ID0ge1xyXG4gICAgICAgICAgICBpZDogXCJpZFwiICsgdGhpcy5fY291bnRlcixcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgc2V4OiBzZXgsXHJcbiAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpdmlzaW9uOiBkaXZpc2lvblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudC5wdXNoKHN0dWRlbnQpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc3R1ZGVudCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVTdHVkZW50KGlkLCBuYW1lLCBzZXgsIGRpdmlzaW9uKSB7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihpZCwgXCJpZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihuYW1lLCBcIm5hbWVcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oc2V4LCBcInNleFwiKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oZGl2aXNpb24sIFwiZGl2aXNpb25cIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHN0dWRlbnQgPSB0aGlzLl9zdHVkZW50LmZpbmQodCA9PiB0LmlkID09PSBpZCk7XHJcbiAgICAgICAgc3R1ZGVudC5uYW1lID0gbmFtZTtcclxuICAgICAgICBzdHVkZW50LnNleCA9IHNleDtcclxuICAgICAgICBzdHVkZW50LmRpdmlzaW9uID0gZGl2aXNpb247XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTG9jYWxTdHVkZW50U2VydmljZSA9IExvY2FsU3R1ZGVudFNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvY2FsLXN0dWRlbnQtc2VydmljZS5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9