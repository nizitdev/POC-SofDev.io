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
        for (let i = 0; i < count; i++) {
            student.push({
                id: "id" + i,
                name: "Student" + i,
                division: "x-a",
                sex: "male",
                isDeleted: false
            });
        }
        this._student = student;
        this._counter = count;
    }
    getStudents() {
        return Promise.resolve(this._student);
    }
    getStudent(id) {
        debugger;
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        return Promise.resolve(this._student.find(t => t.id === id));
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

/***/ }),

/***/ "./src/client/services/services-installer.js":
/*!***************************************************!*\
  !*** ./src/client/services/services-installer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const local_todo_service_1 = __webpack_require__(/*! ./todo/local-todo-service */ "./src/client/services/todo/local-todo-service.js");
const local_contact_service_1 = __webpack_require__(/*! ./contact/local-contact-service */ "./src/client/services/contact/local-contact-service.js");
const local_admin_service_1 = __webpack_require__(/*! ./school/admin/local-admin-service */ "./src/client/services/school/admin/local-admin-service.js");
const local_teacher_service_1 = __webpack_require__(/*! ./school/teacher/local-teacher-service */ "./src/client/services/school/teacher/local-teacher-service.js");
const local_student_service_1 = __webpack_require__(/*! ./school/student/local-student-service */ "./src/client/services/school/student/local-student-service.js");
class ServicesInstaller {
    install(registry) {
        registry.registerSingleton("TodoService", local_todo_service_1.LocalTodoService);
        registry.registerSingleton("ContactService", local_contact_service_1.LocalContactService);
        registry.registerSingleton("TeacherService", local_teacher_service_1.LocalTeacherService);
        registry.registerSingleton("AdminService", local_admin_service_1.LocalAdminService);
        registry.registerSingleton("StudentService", local_student_service_1.LocalStudentService);
    }
}
exports.ServicesInstaller = ServicesInstaller;
//# sourceMappingURL=services-installer.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZpY2VzL3NjaG9vbC9zdHVkZW50L2xvY2FsLXN0dWRlbnQtc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZpY2VzL3NlcnZpY2VzLWluc3RhbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsV0FBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRDs7Ozs7Ozs7Ozs7O0FDdkRhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsNkJBQTZCLG1CQUFPLENBQUMsbUZBQTJCO0FBQ2hFLGdDQUFnQyxtQkFBTyxDQUFDLCtGQUFpQztBQUN6RSw4QkFBOEIsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDMUUsZ0NBQWdDLG1CQUFPLENBQUMsNkdBQXdDO0FBQ2hGLGdDQUFnQyxtQkFBTyxDQUFDLDZHQUF3QztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDIiwiZmlsZSI6Im1haW4uZjE0MDc4NTcxNjk1ZWVmYmQ1YjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5fZGVmZW5zaXZlXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tZGVmZW5zaXZlXCIpO1xyXG5jbGFzcyBMb2NhbFN0dWRlbnRTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IHN0dWRlbnQgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBjb25zdCBjb3VudCA9IDU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN0dWRlbnQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJpZFwiICsgaSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiU3R1ZGVudFwiICsgaSxcclxuICAgICAgICAgICAgICAgIGRpdmlzaW9uOiBcIngtYVwiLFxyXG4gICAgICAgICAgICAgICAgc2V4OiBcIm1hbGVcIixcclxuICAgICAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0dWRlbnQgPSBzdHVkZW50O1xyXG4gICAgICAgIHRoaXMuX2NvdW50ZXIgPSBjb3VudDtcclxuICAgIH1cclxuICAgIGdldFN0dWRlbnRzKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fc3R1ZGVudCk7XHJcbiAgICB9XHJcbiAgICBnZXRTdHVkZW50KGlkKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihpZCwgXCJpZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9zdHVkZW50LmZpbmQodCA9PiB0LmlkID09PSBpZCkpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlU3R1ZGVudChuYW1lLCBzZXgsIGRpdmlzaW9uKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihuYW1lLCBcIm5hbWVcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oc2V4LCBcInNleFwiKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oZGl2aXNpb24sIFwiZGl2aXNpb25cIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHN0dWRlbnQgPSB7XHJcbiAgICAgICAgICAgIGlkOiBcImlkXCIgKyB0aGlzLl9jb3VudGVyLFxyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBzZXg6IHNleCxcclxuICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgZGl2aXNpb246IGRpdmlzaW9uXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9zdHVkZW50LnB1c2goc3R1ZGVudCk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzdHVkZW50KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVN0dWRlbnQoaWQsIG5hbWUsIHNleCwgZGl2aXNpb24pIHtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGlkLCBcImlkXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKG5hbWUsIFwibmFtZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihzZXgsIFwic2V4XCIpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihkaXZpc2lvbiwgXCJkaXZpc2lvblwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3Qgc3R1ZGVudCA9IHRoaXMuX3N0dWRlbnQuZmluZCh0ID0+IHQuaWQgPT09IGlkKTtcclxuICAgICAgICBzdHVkZW50Lm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHN0dWRlbnQuc2V4ID0gc2V4O1xyXG4gICAgICAgIHN0dWRlbnQuZGl2aXNpb24gPSBkaXZpc2lvbjtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Mb2NhbFN0dWRlbnRTZXJ2aWNlID0gTG9jYWxTdHVkZW50U2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9jYWwtc3R1ZGVudC1zZXJ2aWNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGxvY2FsX3RvZG9fc2VydmljZV8xID0gcmVxdWlyZShcIi4vdG9kby9sb2NhbC10b2RvLXNlcnZpY2VcIik7XHJcbmNvbnN0IGxvY2FsX2NvbnRhY3Rfc2VydmljZV8xID0gcmVxdWlyZShcIi4vY29udGFjdC9sb2NhbC1jb250YWN0LXNlcnZpY2VcIik7XHJcbmNvbnN0IGxvY2FsX2FkbWluX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL3NjaG9vbC9hZG1pbi9sb2NhbC1hZG1pbi1zZXJ2aWNlXCIpO1xyXG5jb25zdCBsb2NhbF90ZWFjaGVyX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL3NjaG9vbC90ZWFjaGVyL2xvY2FsLXRlYWNoZXItc2VydmljZVwiKTtcclxuY29uc3QgbG9jYWxfc3R1ZGVudF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9zY2hvb2wvc3R1ZGVudC9sb2NhbC1zdHVkZW50LXNlcnZpY2VcIik7XHJcbmNsYXNzIFNlcnZpY2VzSW5zdGFsbGVyIHtcclxuICAgIGluc3RhbGwocmVnaXN0cnkpIHtcclxuICAgICAgICByZWdpc3RyeS5yZWdpc3RlclNpbmdsZXRvbihcIlRvZG9TZXJ2aWNlXCIsIGxvY2FsX3RvZG9fc2VydmljZV8xLkxvY2FsVG9kb1NlcnZpY2UpO1xyXG4gICAgICAgIHJlZ2lzdHJ5LnJlZ2lzdGVyU2luZ2xldG9uKFwiQ29udGFjdFNlcnZpY2VcIiwgbG9jYWxfY29udGFjdF9zZXJ2aWNlXzEuTG9jYWxDb250YWN0U2VydmljZSk7XHJcbiAgICAgICAgcmVnaXN0cnkucmVnaXN0ZXJTaW5nbGV0b24oXCJUZWFjaGVyU2VydmljZVwiLCBsb2NhbF90ZWFjaGVyX3NlcnZpY2VfMS5Mb2NhbFRlYWNoZXJTZXJ2aWNlKTtcclxuICAgICAgICByZWdpc3RyeS5yZWdpc3RlclNpbmdsZXRvbihcIkFkbWluU2VydmljZVwiLCBsb2NhbF9hZG1pbl9zZXJ2aWNlXzEuTG9jYWxBZG1pblNlcnZpY2UpO1xyXG4gICAgICAgIHJlZ2lzdHJ5LnJlZ2lzdGVyU2luZ2xldG9uKFwiU3R1ZGVudFNlcnZpY2VcIiwgbG9jYWxfc3R1ZGVudF9zZXJ2aWNlXzEuTG9jYWxTdHVkZW50U2VydmljZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TZXJ2aWNlc0luc3RhbGxlciA9IFNlcnZpY2VzSW5zdGFsbGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zZXJ2aWNlcy1pbnN0YWxsZXIuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==