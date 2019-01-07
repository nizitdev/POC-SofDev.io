webpackHotUpdate("main",{

/***/ "./src/client/pages/pages.js":
/*!***********************************!*\
  !*** ./src/client/pages/pages.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const list_todos_view_model_1 = __webpack_require__(/*! ./list-todos/list-todos-view-model */ "./src/client/pages/list-todos/list-todos-view-model.js");
const manage_todo_view_model_1 = __webpack_require__(/*! ./manage-todo/manage-todo-view-model */ "./src/client/pages/manage-todo/manage-todo-view-model.js");
const list_contact_view_model_1 = __webpack_require__(/*! ./list-contacts/list-contact-view-model */ "./src/client/pages/list-contacts/list-contact-view-model.js");
const manage_contact_view_model_1 = __webpack_require__(/*! ./manage-contact/manage-contact-view-model */ "./src/client/pages/manage-contact/manage-contact-view-model.js");
const admin_view_model_1 = __webpack_require__(/*! ./school/admin/admin-view-model */ "./src/client/pages/school/admin/admin-view-model.js");
const list_teacher_view_model_1 = __webpack_require__(/*! ./school/list-teachers/list-teacher-view-model */ "./src/client/pages/school/list-teachers/list-teacher-view-model.js");
const manage_teacher_view_model_1 = __webpack_require__(/*! ./school/manage-teacher/manage-teacher-view-model */ "./src/client/pages/school/manage-teacher/manage-teacher-view-model.js");
const list_student_view_model_1 = __webpack_require__(/*! ./school/list-students/list-student-view-model */ "./src/client/pages/school/list-students/list-student-view-model.js");
exports.pages = [
    list_todos_view_model_1.ListTodosViewModel,
    manage_todo_view_model_1.ManageTodoViewModel,
    manage_contact_view_model_1.ManageContactViewModel,
    list_contact_view_model_1.ListContactViewModel,
    admin_view_model_1.ListAdminViewModel,
    list_teacher_view_model_1.ListTeachersViewModel,
    manage_teacher_view_model_1.ManageTeacherViewModel,
    list_student_view_model_1.ListStudentViewModel,
];
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ "./src/client/pages/school/list-students/list-student-view-model.js":
/*!**************************************************************************!*\
  !*** ./src/client/pages/school/list-students/list-student-view-model.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const n_app_1 = __webpack_require__(/*! @nivinjoseph/n-app */ "./node_modules/@nivinjoseph/n-app/dist/index.js");
const Routes = __webpack_require__(/*! ../../routes */ "./src/client/pages/routes.js");
__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './list-teacher-view.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const n_ject_1 = __webpack_require__(/*! @nivinjoseph/n-ject */ "./node_modules/@nivinjoseph/n-ject/dist/index.js");
const n_defensive_1 = __webpack_require__(/*! @nivinjoseph/n-defensive */ "./node_modules/@nivinjoseph/n-defensive/dist/index.js");
let ListStudentViewModel = class ListStudentViewModel extends n_app_1.PageViewModel {
    constructor(studentService) {
        super();
        n_defensive_1.given(studentService, "studentService").ensureHasValue().ensureIsObject();
        this._studentService = studentService;
        this._students = [];
    }
    get student() {
        return this._students;
    }
    onEnter() {
        this._studentService.getStudents()
            .then(t => this._students = t)
            .catch(e => console.log(e));
    }
};
ListStudentViewModel = __decorate([
    n_app_1.template(__webpack_require__(/*! ./list-student-view.html */ "./src/client/pages/school/list-students/list-student-view.html")),
    n_app_1.route(Routes.listStudents),
    n_ject_1.inject("StudentService"),
    __metadata("design:paramtypes", [Object])
], ListStudentViewModel);
exports.ListStudentViewModel = ListStudentViewModel;
//# sourceMappingURL=list-student-view-model.js.map

/***/ }),

/***/ "./src/client/pages/school/list-students/list-student-view.html":
/*!**********************************************************************!*\
  !*** ./src/client/pages/school/list-students/list-student-view.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-teacher-view\">\r\n        <nav class=\"navbar  has-addons is-right\" role=\"navigation\" aria-label=\"main navigation\">\r\n            <div class=\"navbar-brand\">\r\n                <router-link to=\"/manageStudent\" class=\"button is-primary create-teacher-button\">Add Student</router-link>\r\n            </div>\r\n        </nav>\r\n        \r\n        <table class=\"table is-fullwidth \">\r\n            <tr> \r\n                <td class=\"table-row-active-background-color is-primary\">\r\n                    Name\r\n                </td>\r\n                <td class=\"table-row-active-background-color is-primary\">\r\n                        Sex\r\n                    </td>\r\n                    <td class=\"table-row-active-background-color is-primary\">\r\n                        Division\r\n                    </td>\r\n                    <td class=\"table-row-active-background-color is-primary\">\r\n\r\n                    </td>\r\n            </tr>\r\n            <tr v-for=\"item in teachers\" v-bind:key=\"item.id\" v-bind:value=\"item\">\r\n                <td >\r\n                    {{item.name}}\r\n                </td>\r\n                <td>\r\n                    {{item.sex}}\r\n                </td>\r\n                <td>\r\n                 {{item.division}}\r\n                </td>\r\n                <td>\r\n                        <a href=\"#\" class=\"card-footer-item btnEdit\" v-on:click.prevent=\"editTeacher\">Edit</a>\r\n                        <a href=\"#\" class=\"card-footer-item\" v-on:click.prevent=\"deleteTeacher\">Delete</a>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <div>\r\n           \r\n        </div>\r\n    \r\n       \r\n    </div>";

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3BhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcGFnZXMvc2Nob29sL2xpc3Qtc3R1ZGVudHMvbGlzdC1zdHVkZW50LXZpZXctbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9wYWdlcy9zY2hvb2wvbGlzdC1zdHVkZW50cy9saXN0LXN0dWRlbnQtdmlldy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGdDQUFnQyxtQkFBTyxDQUFDLGtHQUFvQztBQUM1RSxpQ0FBaUMsbUJBQU8sQ0FBQyxzR0FBc0M7QUFDL0Usa0NBQWtDLG1CQUFPLENBQUMsNEdBQXlDO0FBQ25GLG9DQUFvQyxtQkFBTyxDQUFDLGtIQUE0QztBQUN4RiwyQkFBMkIsbUJBQU8sQ0FBQyw0RkFBaUM7QUFDcEUsa0NBQWtDLG1CQUFPLENBQUMsMEhBQWdEO0FBQzFGLG9DQUFvQyxtQkFBTyxDQUFDLGdJQUFtRDtBQUMvRixrQ0FBa0MsbUJBQU8sQ0FBQywwSEFBZ0Q7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7Ozs7Ozs7O0FDcEJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdCQUFnQixtQkFBTyxDQUFDLDJFQUFvQjtBQUM1QyxlQUFlLG1CQUFPLENBQUMsa0RBQWM7QUFDckMsbUJBQU8sQ0FBQyxrSkFBMEI7QUFDbEMsaUJBQWlCLG1CQUFPLENBQUMsNkVBQXFCO0FBQzlDLHNCQUFzQixtQkFBTyxDQUFDLHVGQUEwQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMsZ0dBQTBCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRDs7Ozs7Ozs7Ozs7QUN2Q0EsZ29DQUFnb0MsV0FBVywyRUFBMkUsVUFBVSx3RUFBd0UsZUFBZSxvYiIsImZpbGUiOiJtYWluLjRkZDllN2NhZWMyMGUxNjUxZGUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBsaXN0X3RvZG9zX3ZpZXdfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL2xpc3QtdG9kb3MvbGlzdC10b2Rvcy12aWV3LW1vZGVsXCIpO1xyXG5jb25zdCBtYW5hZ2VfdG9kb192aWV3X21vZGVsXzEgPSByZXF1aXJlKFwiLi9tYW5hZ2UtdG9kby9tYW5hZ2UtdG9kby12aWV3LW1vZGVsXCIpO1xyXG5jb25zdCBsaXN0X2NvbnRhY3Rfdmlld19tb2RlbF8xID0gcmVxdWlyZShcIi4vbGlzdC1jb250YWN0cy9saXN0LWNvbnRhY3Qtdmlldy1tb2RlbFwiKTtcclxuY29uc3QgbWFuYWdlX2NvbnRhY3Rfdmlld19tb2RlbF8xID0gcmVxdWlyZShcIi4vbWFuYWdlLWNvbnRhY3QvbWFuYWdlLWNvbnRhY3Qtdmlldy1tb2RlbFwiKTtcclxuY29uc3QgYWRtaW5fdmlld19tb2RlbF8xID0gcmVxdWlyZShcIi4vc2Nob29sL2FkbWluL2FkbWluLXZpZXctbW9kZWxcIik7XHJcbmNvbnN0IGxpc3RfdGVhY2hlcl92aWV3X21vZGVsXzEgPSByZXF1aXJlKFwiLi9zY2hvb2wvbGlzdC10ZWFjaGVycy9saXN0LXRlYWNoZXItdmlldy1tb2RlbFwiKTtcclxuY29uc3QgbWFuYWdlX3RlYWNoZXJfdmlld19tb2RlbF8xID0gcmVxdWlyZShcIi4vc2Nob29sL21hbmFnZS10ZWFjaGVyL21hbmFnZS10ZWFjaGVyLXZpZXctbW9kZWxcIik7XHJcbmNvbnN0IGxpc3Rfc3R1ZGVudF92aWV3X21vZGVsXzEgPSByZXF1aXJlKFwiLi9zY2hvb2wvbGlzdC1zdHVkZW50cy9saXN0LXN0dWRlbnQtdmlldy1tb2RlbFwiKTtcclxuZXhwb3J0cy5wYWdlcyA9IFtcclxuICAgIGxpc3RfdG9kb3Nfdmlld19tb2RlbF8xLkxpc3RUb2Rvc1ZpZXdNb2RlbCxcclxuICAgIG1hbmFnZV90b2RvX3ZpZXdfbW9kZWxfMS5NYW5hZ2VUb2RvVmlld01vZGVsLFxyXG4gICAgbWFuYWdlX2NvbnRhY3Rfdmlld19tb2RlbF8xLk1hbmFnZUNvbnRhY3RWaWV3TW9kZWwsXHJcbiAgICBsaXN0X2NvbnRhY3Rfdmlld19tb2RlbF8xLkxpc3RDb250YWN0Vmlld01vZGVsLFxyXG4gICAgYWRtaW5fdmlld19tb2RlbF8xLkxpc3RBZG1pblZpZXdNb2RlbCxcclxuICAgIGxpc3RfdGVhY2hlcl92aWV3X21vZGVsXzEuTGlzdFRlYWNoZXJzVmlld01vZGVsLFxyXG4gICAgbWFuYWdlX3RlYWNoZXJfdmlld19tb2RlbF8xLk1hbmFnZVRlYWNoZXJWaWV3TW9kZWwsXHJcbiAgICBsaXN0X3N0dWRlbnRfdmlld19tb2RlbF8xLkxpc3RTdHVkZW50Vmlld01vZGVsLFxyXG5dO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbl9hcHBfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1hcHBcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi9yb3V0ZXNcIik7XHJcbnJlcXVpcmUoXCIuL2xpc3QtdGVhY2hlci12aWV3LnNjc3NcIik7XHJcbmNvbnN0IG5famVjdF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWplY3RcIik7XHJcbmNvbnN0IG5fZGVmZW5zaXZlXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tZGVmZW5zaXZlXCIpO1xyXG5sZXQgTGlzdFN0dWRlbnRWaWV3TW9kZWwgPSBjbGFzcyBMaXN0U3R1ZGVudFZpZXdNb2RlbCBleHRlbmRzIG5fYXBwXzEuUGFnZVZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdHVkZW50U2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihzdHVkZW50U2VydmljZSwgXCJzdHVkZW50U2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UgPSBzdHVkZW50U2VydmljZTtcclxuICAgICAgICB0aGlzLl9zdHVkZW50cyA9IFtdO1xyXG4gICAgfVxyXG4gICAgZ2V0IHN0dWRlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0dWRlbnRzO1xyXG4gICAgfVxyXG4gICAgb25FbnRlcigpIHtcclxuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZS5nZXRTdHVkZW50cygpXHJcbiAgICAgICAgICAgIC50aGVuKHQgPT4gdGhpcy5fc3R1ZGVudHMgPSB0KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICB9XHJcbn07XHJcbkxpc3RTdHVkZW50Vmlld01vZGVsID0gX19kZWNvcmF0ZShbXHJcbiAgICBuX2FwcF8xLnRlbXBsYXRlKHJlcXVpcmUoXCIuL2xpc3Qtc3R1ZGVudC12aWV3Lmh0bWxcIikpLFxyXG4gICAgbl9hcHBfMS5yb3V0ZShSb3V0ZXMubGlzdFN0dWRlbnRzKSxcclxuICAgIG5famVjdF8xLmluamVjdChcIlN0dWRlbnRTZXJ2aWNlXCIpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtPYmplY3RdKVxyXG5dLCBMaXN0U3R1ZGVudFZpZXdNb2RlbCk7XHJcbmV4cG9ydHMuTGlzdFN0dWRlbnRWaWV3TW9kZWwgPSBMaXN0U3R1ZGVudFZpZXdNb2RlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGlzdC1zdHVkZW50LXZpZXctbW9kZWwuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImxpc3QtdGVhY2hlci12aWV3XFxcIj5cXHJcXG4gICAgICAgIDxuYXYgY2xhc3M9XFxcIm5hdmJhciAgaGFzLWFkZG9ucyBpcy1yaWdodFxcXCIgcm9sZT1cXFwibmF2aWdhdGlvblxcXCIgYXJpYS1sYWJlbD1cXFwibWFpbiBuYXZpZ2F0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XFxcIi9tYW5hZ2VTdHVkZW50XFxcIiBjbGFzcz1cXFwiYnV0dG9uIGlzLXByaW1hcnkgY3JlYXRlLXRlYWNoZXItYnV0dG9uXFxcIj5BZGQgU3R1ZGVudDwvcm91dGVyLWxpbms+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L25hdj5cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSBpcy1mdWxsd2lkdGggXFxcIj5cXHJcXG4gICAgICAgICAgICA8dHI+IFxcclxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRhYmxlLXJvdy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvciBpcy1wcmltYXJ5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIE5hbWVcXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0YWJsZS1yb3ctYWN0aXZlLWJhY2tncm91bmQtY29sb3IgaXMtcHJpbWFyeVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgU2V4XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0YWJsZS1yb3ctYWN0aXZlLWJhY2tncm91bmQtY29sb3IgaXMtcHJpbWFyeVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgRGl2aXNpb25cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRhYmxlLXJvdy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvciBpcy1wcmltYXJ5XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICA8dHIgdi1mb3I9XFxcIml0ZW0gaW4gdGVhY2hlcnNcXFwiIHYtYmluZDprZXk9XFxcIml0ZW0uaWRcXFwiIHYtYmluZDp2YWx1ZT1cXFwiaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCA+XFxyXFxuICAgICAgICAgICAgICAgICAgICB7e2l0ZW0ubmFtZX19XFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHt7aXRlbS5zZXh9fVxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICB7e2l0ZW0uZGl2aXNpb259fVxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImNhcmQtZm9vdGVyLWl0ZW0gYnRuRWRpdFxcXCIgdi1vbjpjbGljay5wcmV2ZW50PVxcXCJlZGl0VGVhY2hlclxcXCI+RWRpdDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiY2FyZC1mb290ZXItaXRlbVxcXCIgdi1vbjpjbGljay5wcmV2ZW50PVxcXCJkZWxldGVUZWFjaGVyXFxcIj5EZWxldGU8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgXFxyXFxuICAgICAgIFxcclxcbiAgICA8L2Rpdj5cIjsiXSwic291cmNlUm9vdCI6IiJ9