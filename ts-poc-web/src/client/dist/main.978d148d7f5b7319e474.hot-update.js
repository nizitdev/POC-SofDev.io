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
    getTeachers() {
        return Promise.resolve(this._teacher);
    }
    getQualification() {
        return Promise.resolve(this._qualification);
    }
    getTeacher(id) {
        debugger;
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        return Promise.resolve(this._teacher.find(t => t.id === id));
    }
    createTeacher(name, isAdmin, password, userName, classInCharge, qualification) {
        debugger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZpY2VzL3NjaG9vbC90ZWFjaGVyL2xvY2FsLXRlYWNoZXItc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLFdBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUQiLCJmaWxlIjoibWFpbi45NzhkMTQ4ZDdmNWI3MzE5ZTQ3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbl9kZWZlbnNpdmVfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1kZWZlbnNpdmVcIik7XHJcbmNsYXNzIExvY2FsVGVhY2hlclNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc3QgdGVhY2hlciA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gNTtcclxuICAgICAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgcXVhbGlmaWNhdGlvbi5wdXNoKHtcclxuICAgICAgICAgICAgaWQ6IFwiMlwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlVHXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcXVhbGlmaWNhdGlvbi5wdXNoKHtcclxuICAgICAgICAgICAgaWQ6IFwiMVwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkdyYWR1YXRlXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcXVhbGlmaWNhdGlvbi5wdXNoKHtcclxuICAgICAgICAgICAgaWQ6IFwiM1wiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlBHXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcXVhbGlmaWNhdGlvbiA9IHF1YWxpZmljYXRpb247XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRlYWNoZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJpZFwiICsgaSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwidGVhY2hlclwiICsgaSxcclxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOiBcIlVzZXJOYW1lXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgaXNBZG1pbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbGFzc0luQ2hhcmdlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiMTIzNDU2NzhcIixcclxuICAgICAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBxdWFsaWZpY2F0aW9uOiBbXCJVR1wiLCBcIlBHXCJdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdGVhY2hlciA9IHRlYWNoZXI7XHJcbiAgICAgICAgdGhpcy5fY291bnRlciA9IGNvdW50O1xyXG4gICAgfVxyXG4gICAgZ2V0VGVhY2hlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl90ZWFjaGVyKTtcclxuICAgIH1cclxuICAgIGdldFF1YWxpZmljYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9xdWFsaWZpY2F0aW9uKTtcclxuICAgIH1cclxuICAgIGdldFRlYWNoZXIoaWQpIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGlkLCBcImlkXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3RlYWNoZXIuZmluZCh0ID0+IHQuaWQgPT09IGlkKSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVUZWFjaGVyKG5hbWUsIGlzQWRtaW4sIHBhc3N3b3JkLCB1c2VyTmFtZSwgY2xhc3NJbkNoYXJnZSwgcXVhbGlmaWNhdGlvbikge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4obmFtZSwgXCJuYW1lXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGlzQWRtaW4sIFwiaXNBZG1pblwiKS5lbnN1cmVJc0Jvb2xlYW4oKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHBhc3N3b3JkLCBcInBhc3N3b3JkXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHVzZXJOYW1lLCBcInVzZXJOYW1lXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGNsYXNzSW5DaGFyZ2UsIFwiY2xhc3NJbkNoYXJnZVwiKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4ocXVhbGlmaWNhdGlvbiwgXCJxdWFsaWZpY2F0aW9uXCIpLmVuc3VyZUlzQXJyYXkoKS5lbnN1cmVIYXNWYWx1ZSgpO1xyXG4gICAgICAgIGNvbnN0IHRlYWNoZXIgPSB7XHJcbiAgICAgICAgICAgIGlkOiBcImlkXCIgKyB0aGlzLl9jb3VudGVyLFxyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBpc0FkbWluOiBpc0FkbWluLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiB1c2VyTmFtZSxcclxuICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgcXVhbGlmaWNhdGlvbjogcXVhbGlmaWNhdGlvbixcclxuICAgICAgICAgICAgY2xhc3NJbkNoYXJnZTogY2xhc3NJbkNoYXJnZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fdGVhY2hlci5wdXNoKHRlYWNoZXIpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGVhY2hlcik7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVUZWFjaGVyKGlkLCBuYW1lLCBpc0FkbWluLCBwYXNzd29yZCwgdXNlck5hbWUsIGNsYXNzSW5DaGFyZ2UsIHF1YWxpZmljYXRpb24pIHtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGlkLCBcImlkXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKG5hbWUsIFwibmFtZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihpc0FkbWluLCBcImlzQWRtaW5cIikuZW5zdXJlSXNCb29sZWFuKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihwYXNzd29yZCwgXCJwYXNzd29yZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbih1c2VyTmFtZSwgXCJ1c2VyTmFtZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihjbGFzc0luQ2hhcmdlLCBcImNsYXNzSW5DaGFyZ2VcIikuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHF1YWxpZmljYXRpb24sIFwicXVhbGlmaWNhdGlvblwiKS5lbnN1cmVJc0FycmF5KCkuZW5zdXJlSGFzVmFsdWUoKTtcclxuICAgICAgICBjb25zdCB0ZWFjaGVyID0gdGhpcy5fdGVhY2hlci5maW5kKHQgPT4gdC5pZCA9PT0gaWQpO1xyXG4gICAgICAgIHRlYWNoZXIubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGVhY2hlci5pc0FkbWluID0gaXNBZG1pbjtcclxuICAgICAgICB0ZWFjaGVyLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgICAgICAgdGVhY2hlci51c2VyTmFtZSA9IHVzZXJOYW1lO1xyXG4gICAgICAgIHRlYWNoZXIuY2xhc3NJbkNoYXJnZSA9IGNsYXNzSW5DaGFyZ2U7XHJcbiAgICAgICAgdGVhY2hlci5xdWFsaWZpY2F0aW9uID0gcXVhbGlmaWNhdGlvbjtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVUZWFjaGVyKGlkKSB7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihpZCwgXCJpZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgdGVhY2hlciA9IHRoaXMuX3RlYWNoZXIuZmluZCh0ID0+IHQuaWQgPT09IGlkKTtcclxuICAgICAgICB0ZWFjaGVyLmlzRGVsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTG9jYWxUZWFjaGVyU2VydmljZSA9IExvY2FsVGVhY2hlclNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvY2FsLXRlYWNoZXItc2VydmljZS5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9