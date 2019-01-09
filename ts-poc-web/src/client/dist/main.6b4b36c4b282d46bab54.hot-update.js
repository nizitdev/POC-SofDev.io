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
        debugger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZpY2VzL3NjaG9vbC9zdHVkZW50L2xvY2FsLXN0dWRlbnQtc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEIiwiZmlsZSI6Im1haW4uNmI0YjM2YzRiMjgyZDQ2YmFiNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5fZGVmZW5zaXZlXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tZGVmZW5zaXZlXCIpO1xyXG5jbGFzcyBMb2NhbFN0dWRlbnRTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IHN0dWRlbnQgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBjb25zdCBjb3VudCA9IDU7XHJcbiAgICAgICAgY29uc3Qgc3R1ZGVudE1hcmtFbnRyeSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGNvbnN0IHN1YmplY3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBzdWJqZWN0LnB1c2goe1xyXG4gICAgICAgICAgICBpZDogXCIxXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiTWF0aHNcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdWJqZWN0LnB1c2goe1xyXG4gICAgICAgICAgICBpZDogXCIyXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiRW5nbGlzaFwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3N1YmplY3QgPSBzdWJqZWN0O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBzdHVkZW50LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiaWRcIiArIGksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlN0dWRlbnRcIiArIGksXHJcbiAgICAgICAgICAgICAgICBkaXZpc2lvbjogXCJ4LWFcIixcclxuICAgICAgICAgICAgICAgIHNleDogXCJNYWxlXCIsXHJcbiAgICAgICAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBzdHVkZW50LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIHN1YmplY3QuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICAgIHN0dWRlbnRNYXJrRW50cnkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBzdHVkZW50X2lkOiBlbGVtZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0dWRlbnROYW1lOiBlbGVtZW50Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyazogXCI1MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6IHgubmFtZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRNYXJrRW50cnkgPSBzdHVkZW50TWFya0VudHJ5O1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnQgPSBzdHVkZW50O1xyXG4gICAgICAgIHRoaXMuX2NvdW50ZXIgPSBjb3VudDtcclxuICAgIH1cclxuICAgIGdldFN0dWRlbnRNYXJrRW50cmllcygpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3N0dWRlbnRNYXJrRW50cnkpO1xyXG4gICAgfVxyXG4gICAgZ2V0U3ViamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9zdWJqZWN0KTtcclxuICAgIH1cclxuICAgIGdldFN0dWRlbnRNYXJrRW50cnkoaWQpIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGlkLCBcImlkXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3N0dWRlbnRNYXJrRW50cnkuZmluZCh0ID0+IHQuaWQgPT09IGlkKSk7XHJcbiAgICB9XHJcbiAgICBnZXRTdHVkZW50KGlkKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihpZCwgXCJpZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9zdHVkZW50LmZpbmQodCA9PiB0LmlkID09PSBpZCkpO1xyXG4gICAgfVxyXG4gICAgZ2V0U3R1ZGVudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9zdHVkZW50KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVN0dWRlbnRNYXJrRW50cnkoc3R1ZGVudF9pZCwgc3R1ZGVudE5hbWUsIHN1YmplY3QsIG1hcmspIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHN0dWRlbnROYW1lLCBcInN0dWRlbnROYW1lXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHN1YmplY3QsIFwic3ViamVjdFwiKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4obWFyaywgXCJtYXJrXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBzdHVkZW50TWFya1NFbnRyeSA9IHtcclxuICAgICAgICAgICAgaWQ6IFwiaWRcIiArIHRoaXMuX2NvdW50ZXIsXHJcbiAgICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXHJcbiAgICAgICAgICAgIG1hcms6IG1hcmssXHJcbiAgICAgICAgICAgIHN0dWRlbnRfaWQ6IHN0dWRlbnRfaWQsXHJcbiAgICAgICAgICAgIHN0dWRlbnROYW1lOiBzdHVkZW50TmFtZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRNYXJrRW50cnkucHVzaChzdHVkZW50TWFya1NFbnRyeSk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzdHVkZW50TWFya1NFbnRyeSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVTdHVkZW50TWFya0VudHJ5KGlkLCBzdHVkZW50X2lkLCBzdHVkZW50TmFtZSwgc3ViamVjdCwgbWFyaykge1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oaWQsIFwiaWRcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oc3R1ZGVudE5hbWUsIFwic3R1ZGVudE5hbWVcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oc3ViamVjdCwgXCJzdWJqZWN0XCIpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihtYXJrLCBcIm1hcmtcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHN0dWRlbnRNYXJrU0VudHJ5ID0gdGhpcy5fc3R1ZGVudE1hcmtFbnRyeS5maW5kKHQgPT4gdC5pZCA9PT0gaWQpO1xyXG4gICAgICAgIHN0dWRlbnRNYXJrU0VudHJ5LnN0dWRlbnROYW1lID0gc3R1ZGVudE5hbWU7XHJcbiAgICAgICAgc3R1ZGVudE1hcmtTRW50cnkuc3ViamVjdCA9IHN1YmplY3Q7XHJcbiAgICAgICAgc3R1ZGVudE1hcmtTRW50cnkubWFyayA9IG1hcms7XHJcbiAgICAgICAgc3R1ZGVudE1hcmtTRW50cnkuc3R1ZGVudF9pZCA9IHN0dWRlbnRfaWQ7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlU3R1ZGVudChuYW1lLCBzZXgsIGRpdmlzaW9uKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihuYW1lLCBcIm5hbWVcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oc2V4LCBcInNleFwiKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oZGl2aXNpb24sIFwiZGl2aXNpb25cIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHN0dWRlbnQgPSB7XHJcbiAgICAgICAgICAgIGlkOiBcImlkXCIgKyB0aGlzLl9jb3VudGVyLFxyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBzZXg6IHNleCxcclxuICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgZGl2aXNpb246IGRpdmlzaW9uXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9zdHVkZW50LnB1c2goc3R1ZGVudCk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzdHVkZW50KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVN0dWRlbnQoaWQsIG5hbWUsIHNleCwgZGl2aXNpb24pIHtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGlkLCBcImlkXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKG5hbWUsIFwibmFtZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihzZXgsIFwic2V4XCIpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihkaXZpc2lvbiwgXCJkaXZpc2lvblwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3Qgc3R1ZGVudCA9IHRoaXMuX3N0dWRlbnQuZmluZCh0ID0+IHQuaWQgPT09IGlkKTtcclxuICAgICAgICBzdHVkZW50Lm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHN0dWRlbnQuc2V4ID0gc2V4O1xyXG4gICAgICAgIHN0dWRlbnQuZGl2aXNpb24gPSBkaXZpc2lvbjtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Mb2NhbFN0dWRlbnRTZXJ2aWNlID0gTG9jYWxTdHVkZW50U2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9jYWwtc3R1ZGVudC1zZXJ2aWNlLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=