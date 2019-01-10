webpackHotUpdate("main",{

/***/ "./src/client/services/school/teacher/local-teacher-service.js":
/*!*********************************************************************!*\
  !*** ./src/client/services/school/teacher/local-teacher-service.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const n_defensive_1 = __webpack_require__(/*! @nivinjoseph/n-defensive */ "./node_modules/@nivinjoseph/n-defensive/dist/index.js");
class LocalTeacherService {
    constructor() {
        const teacher = new Array();
        const count = 5;
        const qualification = new Array();
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
                name: "Teacher" + i,
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
    getTeachers() {
        return Promise.resolve(this._teacher);
    }
    getQualification() {
        return Promise.resolve(this._qualification);
    }
    getTeacher(id) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        return Promise.resolve(this._teacher.find(t => t.id === id));
    }
    createTeacher(name, isAdmin, password, userName, classInCharge, qualification) {
        n_defensive_1.given(name, "name").ensureHasValue().ensureIsString();
        n_defensive_1.given(isAdmin, "isAdmin").ensureIsBoolean();
        n_defensive_1.given(password, "password").ensureHasValue().ensureIsString();
        n_defensive_1.given(userName, "userName").ensureHasValue().ensureIsString();
        n_defensive_1.given(classInCharge, "classInCharge").ensureIsString();
        n_defensive_1.given(qualification, "qualification").ensureIsArray().ensureHasValue();
        const teacher = {
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
    updateTeacher(id, name, isAdmin, password, userName, classInCharge, qualification) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        n_defensive_1.given(name, "name").ensureHasValue().ensureIsString();
        n_defensive_1.given(isAdmin, "isAdmin").ensureIsBoolean();
        n_defensive_1.given(password, "password").ensureHasValue().ensureIsString();
        n_defensive_1.given(userName, "userName").ensureHasValue().ensureIsString();
        n_defensive_1.given(classInCharge, "classInCharge").ensureIsString();
        n_defensive_1.given(qualification, "qualification").ensureIsArray().ensureHasValue();
        const teacher = this._teacher.find(t => t.id === id);
        teacher.name = name;
        teacher.isAdmin = isAdmin;
        teacher.password = password;
        teacher.userName = userName;
        teacher.classInCharge = classInCharge;
        teacher.qualification = qualification;
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZpY2VzL3NjaG9vbC90ZWFjaGVyL2xvY2FsLXRlYWNoZXItc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLFdBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRCIsImZpbGUiOiJtYWluLjE0MjBlMjk2YjI4NGIzYzYwNWI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBuX2RlZmVuc2l2ZV8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWRlZmVuc2l2ZVwiKTtcclxuY2xhc3MgTG9jYWxUZWFjaGVyU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCB0ZWFjaGVyID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSA1O1xyXG4gICAgICAgIGNvbnN0IHF1YWxpZmljYXRpb24gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBxdWFsaWZpY2F0aW9uLnB1c2goe1xyXG4gICAgICAgICAgICBpZDogXCIyXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiVUdcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBxdWFsaWZpY2F0aW9uLnB1c2goe1xyXG4gICAgICAgICAgICBpZDogXCIxXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiR3JhZHVhdGVcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBxdWFsaWZpY2F0aW9uLnB1c2goe1xyXG4gICAgICAgICAgICBpZDogXCIzXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiUEdcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xdWFsaWZpY2F0aW9uID0gcXVhbGlmaWNhdGlvbjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGVhY2hlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImlkXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJUZWFjaGVyXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgdXNlck5hbWU6IFwiVXNlck5hbWVcIiArIGksXHJcbiAgICAgICAgICAgICAgICBpc0FkbWluOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsYXNzSW5DaGFyZ2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogXCIxMjM0NTY3OFwiLFxyXG4gICAgICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHF1YWxpZmljYXRpb246IFtcIlVHXCIsIFwiUEdcIl0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl90ZWFjaGVyID0gdGVhY2hlcjtcclxuICAgICAgICB0aGlzLl9jb3VudGVyID0gY291bnQ7XHJcbiAgICB9XHJcbiAgICBnZXRUZWFjaGVycygpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3RlYWNoZXIpO1xyXG4gICAgfVxyXG4gICAgZ2V0UXVhbGlmaWNhdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3F1YWxpZmljYXRpb24pO1xyXG4gICAgfVxyXG4gICAgZ2V0VGVhY2hlcihpZCkge1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oaWQsIFwiaWRcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fdGVhY2hlci5maW5kKHQgPT4gdC5pZCA9PT0gaWQpKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVRlYWNoZXIobmFtZSwgaXNBZG1pbiwgcGFzc3dvcmQsIHVzZXJOYW1lLCBjbGFzc0luQ2hhcmdlLCBxdWFsaWZpY2F0aW9uKSB7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihuYW1lLCBcIm5hbWVcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oaXNBZG1pbiwgXCJpc0FkbWluXCIpLmVuc3VyZUlzQm9vbGVhbigpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4ocGFzc3dvcmQsIFwicGFzc3dvcmRcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4odXNlck5hbWUsIFwidXNlck5hbWVcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oY2xhc3NJbkNoYXJnZSwgXCJjbGFzc0luQ2hhcmdlXCIpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihxdWFsaWZpY2F0aW9uLCBcInF1YWxpZmljYXRpb25cIikuZW5zdXJlSXNBcnJheSgpLmVuc3VyZUhhc1ZhbHVlKCk7XHJcbiAgICAgICAgY29uc3QgdGVhY2hlciA9IHtcclxuICAgICAgICAgICAgaWQ6IFwiaWRcIiArIHRoaXMuX2NvdW50ZXIsXHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIGlzQWRtaW46IGlzQWRtaW4sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICAgICAgdXNlck5hbWU6IHVzZXJOYW1lLFxyXG4gICAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBxdWFsaWZpY2F0aW9uOiBxdWFsaWZpY2F0aW9uLFxyXG4gICAgICAgICAgICBjbGFzc0luQ2hhcmdlOiBjbGFzc0luQ2hhcmdlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl90ZWFjaGVyLnB1c2godGVhY2hlcik7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0ZWFjaGVyKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVRlYWNoZXIoaWQsIG5hbWUsIGlzQWRtaW4sIHBhc3N3b3JkLCB1c2VyTmFtZSwgY2xhc3NJbkNoYXJnZSwgcXVhbGlmaWNhdGlvbikge1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oaWQsIFwiaWRcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4obmFtZSwgXCJuYW1lXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGlzQWRtaW4sIFwiaXNBZG1pblwiKS5lbnN1cmVJc0Jvb2xlYW4oKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHBhc3N3b3JkLCBcInBhc3N3b3JkXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHVzZXJOYW1lLCBcInVzZXJOYW1lXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGNsYXNzSW5DaGFyZ2UsIFwiY2xhc3NJbkNoYXJnZVwiKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4ocXVhbGlmaWNhdGlvbiwgXCJxdWFsaWZpY2F0aW9uXCIpLmVuc3VyZUlzQXJyYXkoKS5lbnN1cmVIYXNWYWx1ZSgpO1xyXG4gICAgICAgIGNvbnN0IHRlYWNoZXIgPSB0aGlzLl90ZWFjaGVyLmZpbmQodCA9PiB0LmlkID09PSBpZCk7XHJcbiAgICAgICAgdGVhY2hlci5uYW1lID0gbmFtZTtcclxuICAgICAgICB0ZWFjaGVyLmlzQWRtaW4gPSBpc0FkbWluO1xyXG4gICAgICAgIHRlYWNoZXIucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuICAgICAgICB0ZWFjaGVyLnVzZXJOYW1lID0gdXNlck5hbWU7XHJcbiAgICAgICAgdGVhY2hlci5jbGFzc0luQ2hhcmdlID0gY2xhc3NJbkNoYXJnZTtcclxuICAgICAgICB0ZWFjaGVyLnF1YWxpZmljYXRpb24gPSBxdWFsaWZpY2F0aW9uO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZVRlYWNoZXIoaWQpIHtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGlkLCBcImlkXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBjb25zdCB0ZWFjaGVyID0gdGhpcy5fdGVhY2hlci5maW5kKHQgPT4gdC5pZCA9PT0gaWQpO1xyXG4gICAgICAgIHRlYWNoZXIuaXNEZWxldGVkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Mb2NhbFRlYWNoZXJTZXJ2aWNlID0gTG9jYWxUZWFjaGVyU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9jYWwtdGVhY2hlci1zZXJ2aWNlLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=