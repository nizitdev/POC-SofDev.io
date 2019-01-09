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
        const count = 10;
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
                isDeleted: false
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
    createTeacher(name, isAdmin, password, userName, classInCharge) {
        debugger;
        n_defensive_1.given(name, "name").ensureHasValue().ensureIsString();
        n_defensive_1.given(isAdmin, "isAdmin").ensureIsBoolean();
        n_defensive_1.given(password, "password").ensureHasValue().ensureIsString();
        n_defensive_1.given(userName, "userName").ensureHasValue().ensureIsString();
        n_defensive_1.given(classInCharge, "classInCharge").ensureIsString();
        const teacher = {
            id: "id" + this._counter,
            name: name,
            isAdmin: isAdmin,
            password: password,
            userName: userName,
            isDeleted: false,
            classInCharge: classInCharge
        };
        this._teacher.push(teacher);
        return Promise.resolve(teacher);
    }
    updateTeacher(id, name, isAdmin, password, userName, classInCharge) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        n_defensive_1.given(name, "name").ensureHasValue().ensureIsString();
        n_defensive_1.given(isAdmin, "isAdmin").ensureIsBoolean();
        n_defensive_1.given(password, "password").ensureHasValue().ensureIsString();
        n_defensive_1.given(userName, "userName").ensureHasValue().ensureIsString();
        n_defensive_1.given(classInCharge, "classInCharge").ensureIsString();
        const teacher = this._teacher.find(t => t.id === id);
        teacher.name = name;
        teacher.isAdmin = isAdmin;
        teacher.password = password;
        teacher.userName = userName;
        teacher.classInCharge = classInCharge;
        return Promise.resolve();
    }
}
exports.LocalTeacherService = LocalTeacherService;
//# sourceMappingURL=local-teacher-service.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZpY2VzL3NjaG9vbC90ZWFjaGVyL2xvY2FsLXRlYWNoZXItc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsdUJBQXVCLFdBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRCIsImZpbGUiOiJtYWluLmQxOTJkOWY5NzJlZjVhYjFiZWZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBuX2RlZmVuc2l2ZV8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWRlZmVuc2l2ZVwiKTtcclxuY2xhc3MgTG9jYWxUZWFjaGVyU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCB0ZWFjaGVyID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSAxMDtcclxuICAgICAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgcXVhbGlmaWNhdGlvbi5wdXNoKHtcclxuICAgICAgICAgICAgaWQ6IFwiMlwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlVHXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcXVhbGlmaWNhdGlvbi5wdXNoKHtcclxuICAgICAgICAgICAgaWQ6IFwiMVwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkdyYWR1YXRlXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcXVhbGlmaWNhdGlvbi5wdXNoKHtcclxuICAgICAgICAgICAgaWQ6IFwiM1wiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlBHXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcXVhbGlmaWNhdGlvbiA9IHF1YWxpZmljYXRpb247XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRlYWNoZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJpZFwiICsgaSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwidGVhY2hlclwiICsgaSxcclxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOiBcIlVzZXJOYW1lXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgaXNBZG1pbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbGFzc0luQ2hhcmdlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiMTIzNDU2NzhcIixcclxuICAgICAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3RlYWNoZXIgPSB0ZWFjaGVyO1xyXG4gICAgICAgIHRoaXMuX2NvdW50ZXIgPSBjb3VudDtcclxuICAgIH1cclxuICAgIGdldFRlYWNoZXJzKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fdGVhY2hlcik7XHJcbiAgICB9XHJcbiAgICBnZXRRdWFsaWZpY2F0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fcXVhbGlmaWNhdGlvbik7XHJcbiAgICB9XHJcbiAgICBnZXRUZWFjaGVyKGlkKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihpZCwgXCJpZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl90ZWFjaGVyLmZpbmQodCA9PiB0LmlkID09PSBpZCkpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlVGVhY2hlcihuYW1lLCBpc0FkbWluLCBwYXNzd29yZCwgdXNlck5hbWUsIGNsYXNzSW5DaGFyZ2UpIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKG5hbWUsIFwibmFtZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihpc0FkbWluLCBcImlzQWRtaW5cIikuZW5zdXJlSXNCb29sZWFuKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihwYXNzd29yZCwgXCJwYXNzd29yZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbih1c2VyTmFtZSwgXCJ1c2VyTmFtZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihjbGFzc0luQ2hhcmdlLCBcImNsYXNzSW5DaGFyZ2VcIikuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBjb25zdCB0ZWFjaGVyID0ge1xyXG4gICAgICAgICAgICBpZDogXCJpZFwiICsgdGhpcy5fY291bnRlcixcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgaXNBZG1pbjogaXNBZG1pbixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICB1c2VyTmFtZTogdXNlck5hbWUsXHJcbiAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNsYXNzSW5DaGFyZ2U6IGNsYXNzSW5DaGFyZ2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3RlYWNoZXIucHVzaCh0ZWFjaGVyKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRlYWNoZXIpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlVGVhY2hlcihpZCwgbmFtZSwgaXNBZG1pbiwgcGFzc3dvcmQsIHVzZXJOYW1lLCBjbGFzc0luQ2hhcmdlKSB7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihpZCwgXCJpZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihuYW1lLCBcIm5hbWVcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oaXNBZG1pbiwgXCJpc0FkbWluXCIpLmVuc3VyZUlzQm9vbGVhbigpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4ocGFzc3dvcmQsIFwicGFzc3dvcmRcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4odXNlck5hbWUsIFwidXNlck5hbWVcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oY2xhc3NJbkNoYXJnZSwgXCJjbGFzc0luQ2hhcmdlXCIpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgdGVhY2hlciA9IHRoaXMuX3RlYWNoZXIuZmluZCh0ID0+IHQuaWQgPT09IGlkKTtcclxuICAgICAgICB0ZWFjaGVyLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRlYWNoZXIuaXNBZG1pbiA9IGlzQWRtaW47XHJcbiAgICAgICAgdGVhY2hlci5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gICAgICAgIHRlYWNoZXIudXNlck5hbWUgPSB1c2VyTmFtZTtcclxuICAgICAgICB0ZWFjaGVyLmNsYXNzSW5DaGFyZ2UgPSBjbGFzc0luQ2hhcmdlO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkxvY2FsVGVhY2hlclNlcnZpY2UgPSBMb2NhbFRlYWNoZXJTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2NhbC10ZWFjaGVyLXNlcnZpY2UuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==