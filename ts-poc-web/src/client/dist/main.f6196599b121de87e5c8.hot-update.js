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
const manage_student_view_model_1 = __webpack_require__(/*! ./school/manage-student/manage-student-view-model */ "./src/client/pages/school/manage-student/manage-student-view-model.js");
const manage_studentMarkEntry_view_model_1 = __webpack_require__(/*! ./school/manage-studentMarkEntry/manage-studentMarkEntry-view-model */ "./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view-model.js");
exports.pages = [
    list_todos_view_model_1.ListTodosViewModel,
    manage_todo_view_model_1.ManageTodoViewModel,
    manage_contact_view_model_1.ManageContactViewModel,
    list_contact_view_model_1.ListContactViewModel,
    admin_view_model_1.ListAdminViewModel,
    list_teacher_view_model_1.ListTeachersViewModel,
    manage_teacher_view_model_1.ManageTeacherViewModel,
    list_student_view_model_1.ListStudentViewModel,
    manage_student_view_model_1.ManageStudentViewModel,
    manage_studentMarkEntry_view_model_1.ManageStudentMarkViewModel
];
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ "./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view-model.js":
/*!***********************************************************************************************!*\
  !*** ./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view-model.js ***!
  \***********************************************************************************************/
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
__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './manage-studentMarkEntry-view'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const n_ject_1 = __webpack_require__(/*! @nivinjoseph/n-ject */ "./node_modules/@nivinjoseph/n-ject/dist/index.js");
const n_defensive_1 = __webpack_require__(/*! @nivinjoseph/n-defensive */ "./node_modules/@nivinjoseph/n-defensive/dist/index.js");
let ManageStudentMarkViewModel = class ManageStudentMarkViewModel extends n_app_1.PageViewModel {
    constructor(studentService, navigationService) {
        super();
        n_defensive_1.given(studentService, "studentService").ensureHasValue().ensureIsObject();
        this._studentService = studentService;
        n_defensive_1.given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;
        this._studentMarkEntry = [];
        this._id = "";
        this._studentName = "";
        this._subject = "";
        this._mark = "";
        this._student_id = "";
    }
    get studentMarkEntry() { return this._studentMarkEntry; }
    get operation() { return this._operation; }
    get studentName() { return this._studentName; }
    set studentName(value) { this._studentName = value; }
    get subject() { return this._subject; }
    set subject(value) { this._subject = value; }
    get mark() { return this._mark; }
    set mark(value) { this._mark = value; }
    get student_id() { return this._student_id; }
    set student_id(value) { this._student_id = value; }
    save() {
        debugger;
        const savePromise = this._id
            ? this._studentService.updateStudentMarkEntry(this._id, this._studentName, this._subject, this._mark, this._student_id)
            : this._studentService.createStudentMarkEntry(this._studentName, this._subject, this._mark, this._student_id);
        savePromise
            .then(() => this._navigationService.navigate(Routes.listStudents, {}))
            .catch(e => console.log(e));
    }
    onEnter(id) {
        this._studentService.getStudentMarkEntries()
            .then(t => this._studentMarkEntry = t)
            .catch(e => console.log(e));
        if (id && !id.isEmptyOrWhiteSpace()) {
            this._operation = "Update";
            this._studentService.getStudentMarkEntry(id)
                .then(t => {
                this._id = t.id;
                this._student_id = t.student_id;
                this._mark = t.mark;
                this._studentName = t.studentName;
                this._subject = t.subject;
            })
                .catch(e => console.log(e));
        }
        else {
            this._operation = "Add";
        }
    }
};
ManageStudentMarkViewModel = __decorate([
    n_app_1.template(__webpack_require__(/*! ./manage-studentMarkEntry-view.html */ "./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view.html")),
    n_app_1.route(Routes.manageStudentMark),
    n_ject_1.inject("StudentService", "NavigationService", "AdminService"),
    __metadata("design:paramtypes", [Object, Object])
], ManageStudentMarkViewModel);
exports.ManageStudentMarkViewModel = ManageStudentMarkViewModel;
//# sourceMappingURL=manage-studentMarkEntry-view-model.js.map

/***/ }),

/***/ "./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view.html":
/*!*******************************************************************************************!*\
  !*** ./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"manage-teacher-view\">\r\n    <h1 class=\"title\">\r\n        {{operation}}\r\n    </h1>\r\n\r\n    <form>\r\n        <div class=\"field\">\r\n            <label class=\"label\">Student Name</label>\r\n            <div class=\"control\">\r\n                <input class=\"input\" type=\"text\" v-model=\"studentName\" placeholder=\"student Name\">\r\n            </div>\r\n        </div>\r\n         \r\n        <div class=\"field\">\r\n            <label class=\"label\">subject</label>\r\n            <div class=\"control\">\r\n                <input class=\"input\" type=\"text\" v-model=\"subject\" placeholder=\"subject\">\r\n            </div>\r\n        </div>\r\n        <div class=\"field\">\r\n            <label class=\"label\">mark</label>\r\n            <div class=\"control\">\r\n                <input class=\"input\" type=\"text\" v-model=\"mark\" placeholder=\"mark\">\r\n            </div>\r\n        </div>\r\n        <div class=\"field is-grouped\">\r\n            <div class=\"control\">\r\n                <button class=\"button is-link\" v-on:click.prevent=\"save\">Save</button>\r\n            </div>\r\n            <div class=\"control\">\r\n                <router-link class=\"button is-text\" to=\"/listStudent\">Cancel</router-link>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n";

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3BhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcGFnZXMvc2Nob29sL21hbmFnZS1zdHVkZW50TWFya0VudHJ5L21hbmFnZS1zdHVkZW50TWFya0VudHJ5LXZpZXctbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9wYWdlcy9zY2hvb2wvbWFuYWdlLXN0dWRlbnRNYXJrRW50cnkvbWFuYWdlLXN0dWRlbnRNYXJrRW50cnktdmlldy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGdDQUFnQyxtQkFBTyxDQUFDLGtHQUFvQztBQUM1RSxpQ0FBaUMsbUJBQU8sQ0FBQyxzR0FBc0M7QUFDL0Usa0NBQWtDLG1CQUFPLENBQUMsNEdBQXlDO0FBQ25GLG9DQUFvQyxtQkFBTyxDQUFDLGtIQUE0QztBQUN4RiwyQkFBMkIsbUJBQU8sQ0FBQyw0RkFBaUM7QUFDcEUsa0NBQWtDLG1CQUFPLENBQUMsMEhBQWdEO0FBQzFGLG9DQUFvQyxtQkFBTyxDQUFDLGdJQUFtRDtBQUMvRixrQ0FBa0MsbUJBQU8sQ0FBQywwSEFBZ0Q7QUFDMUYsb0NBQW9DLG1CQUFPLENBQUMsZ0lBQW1EO0FBQy9GLDZDQUE2QyxtQkFBTyxDQUFDLG9LQUFxRTtBQUMxSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7Ozs7Ozs7O0FDeEJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdCQUFnQixtQkFBTyxDQUFDLDJFQUFvQjtBQUM1QyxlQUFlLG1CQUFPLENBQUMsa0RBQWM7QUFDckMsbUJBQU8sQ0FBQyx3SkFBZ0M7QUFDeEMsaUJBQWlCLG1CQUFPLENBQUMsNkVBQXFCO0FBQzlDLHNCQUFzQixtQkFBTyxDQUFDLHVGQUEwQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtCQUErQjtBQUMzRCxxQkFBcUIsd0JBQXdCO0FBQzdDLHVCQUF1QiwwQkFBMEI7QUFDakQsNEJBQTRCLDJCQUEyQjtBQUN2RCxtQkFBbUIsc0JBQXNCO0FBQ3pDLHdCQUF3Qix1QkFBdUI7QUFDL0MsZ0JBQWdCLG1CQUFtQjtBQUNuQyxxQkFBcUIsb0JBQW9CO0FBQ3pDLHNCQUFzQix5QkFBeUI7QUFDL0MsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyxnSUFBcUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEOzs7Ozs7Ozs7OztBQzdFQSwrRkFBK0YsV0FBVyx5dUMiLCJmaWxlIjoibWFpbi5mNjE5NjU5OWIxMjFkZTg3ZTVjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbGlzdF90b2Rvc192aWV3X21vZGVsXzEgPSByZXF1aXJlKFwiLi9saXN0LXRvZG9zL2xpc3QtdG9kb3Mtdmlldy1tb2RlbFwiKTtcclxuY29uc3QgbWFuYWdlX3RvZG9fdmlld19tb2RlbF8xID0gcmVxdWlyZShcIi4vbWFuYWdlLXRvZG8vbWFuYWdlLXRvZG8tdmlldy1tb2RlbFwiKTtcclxuY29uc3QgbGlzdF9jb250YWN0X3ZpZXdfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL2xpc3QtY29udGFjdHMvbGlzdC1jb250YWN0LXZpZXctbW9kZWxcIik7XHJcbmNvbnN0IG1hbmFnZV9jb250YWN0X3ZpZXdfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL21hbmFnZS1jb250YWN0L21hbmFnZS1jb250YWN0LXZpZXctbW9kZWxcIik7XHJcbmNvbnN0IGFkbWluX3ZpZXdfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL3NjaG9vbC9hZG1pbi9hZG1pbi12aWV3LW1vZGVsXCIpO1xyXG5jb25zdCBsaXN0X3RlYWNoZXJfdmlld19tb2RlbF8xID0gcmVxdWlyZShcIi4vc2Nob29sL2xpc3QtdGVhY2hlcnMvbGlzdC10ZWFjaGVyLXZpZXctbW9kZWxcIik7XHJcbmNvbnN0IG1hbmFnZV90ZWFjaGVyX3ZpZXdfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL3NjaG9vbC9tYW5hZ2UtdGVhY2hlci9tYW5hZ2UtdGVhY2hlci12aWV3LW1vZGVsXCIpO1xyXG5jb25zdCBsaXN0X3N0dWRlbnRfdmlld19tb2RlbF8xID0gcmVxdWlyZShcIi4vc2Nob29sL2xpc3Qtc3R1ZGVudHMvbGlzdC1zdHVkZW50LXZpZXctbW9kZWxcIik7XHJcbmNvbnN0IG1hbmFnZV9zdHVkZW50X3ZpZXdfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL3NjaG9vbC9tYW5hZ2Utc3R1ZGVudC9tYW5hZ2Utc3R1ZGVudC12aWV3LW1vZGVsXCIpO1xyXG5jb25zdCBtYW5hZ2Vfc3R1ZGVudE1hcmtFbnRyeV92aWV3X21vZGVsXzEgPSByZXF1aXJlKFwiLi9zY2hvb2wvbWFuYWdlLXN0dWRlbnRNYXJrRW50cnkvbWFuYWdlLXN0dWRlbnRNYXJrRW50cnktdmlldy1tb2RlbFwiKTtcclxuZXhwb3J0cy5wYWdlcyA9IFtcclxuICAgIGxpc3RfdG9kb3Nfdmlld19tb2RlbF8xLkxpc3RUb2Rvc1ZpZXdNb2RlbCxcclxuICAgIG1hbmFnZV90b2RvX3ZpZXdfbW9kZWxfMS5NYW5hZ2VUb2RvVmlld01vZGVsLFxyXG4gICAgbWFuYWdlX2NvbnRhY3Rfdmlld19tb2RlbF8xLk1hbmFnZUNvbnRhY3RWaWV3TW9kZWwsXHJcbiAgICBsaXN0X2NvbnRhY3Rfdmlld19tb2RlbF8xLkxpc3RDb250YWN0Vmlld01vZGVsLFxyXG4gICAgYWRtaW5fdmlld19tb2RlbF8xLkxpc3RBZG1pblZpZXdNb2RlbCxcclxuICAgIGxpc3RfdGVhY2hlcl92aWV3X21vZGVsXzEuTGlzdFRlYWNoZXJzVmlld01vZGVsLFxyXG4gICAgbWFuYWdlX3RlYWNoZXJfdmlld19tb2RlbF8xLk1hbmFnZVRlYWNoZXJWaWV3TW9kZWwsXHJcbiAgICBsaXN0X3N0dWRlbnRfdmlld19tb2RlbF8xLkxpc3RTdHVkZW50Vmlld01vZGVsLFxyXG4gICAgbWFuYWdlX3N0dWRlbnRfdmlld19tb2RlbF8xLk1hbmFnZVN0dWRlbnRWaWV3TW9kZWwsXHJcbiAgICBtYW5hZ2Vfc3R1ZGVudE1hcmtFbnRyeV92aWV3X21vZGVsXzEuTWFuYWdlU3R1ZGVudE1hcmtWaWV3TW9kZWxcclxuXTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5fYXBwXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tYXBwXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vcm91dGVzXCIpO1xyXG5yZXF1aXJlKFwiLi9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS12aWV3XCIpO1xyXG5jb25zdCBuX2plY3RfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1qZWN0XCIpO1xyXG5jb25zdCBuX2RlZmVuc2l2ZV8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWRlZmVuc2l2ZVwiKTtcclxubGV0IE1hbmFnZVN0dWRlbnRNYXJrVmlld01vZGVsID0gY2xhc3MgTWFuYWdlU3R1ZGVudE1hcmtWaWV3TW9kZWwgZXh0ZW5kcyBuX2FwcF8xLlBhZ2VWaWV3TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3Ioc3R1ZGVudFNlcnZpY2UsIG5hdmlnYXRpb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHN0dWRlbnRTZXJ2aWNlLCBcInN0dWRlbnRTZXJ2aWNlXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNPYmplY3QoKTtcclxuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZSA9IHN0dWRlbnRTZXJ2aWNlO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4obmF2aWdhdGlvblNlcnZpY2UsIFwibmF2aWdhdGlvblNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX25hdmlnYXRpb25TZXJ2aWNlID0gbmF2aWdhdGlvblNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudE1hcmtFbnRyeSA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2lkID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9zdHVkZW50TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fc3ViamVjdCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fbWFyayA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudF9pZCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBnZXQgc3R1ZGVudE1hcmtFbnRyeSgpIHsgcmV0dXJuIHRoaXMuX3N0dWRlbnRNYXJrRW50cnk7IH1cclxuICAgIGdldCBvcGVyYXRpb24oKSB7IHJldHVybiB0aGlzLl9vcGVyYXRpb247IH1cclxuICAgIGdldCBzdHVkZW50TmFtZSgpIHsgcmV0dXJuIHRoaXMuX3N0dWRlbnROYW1lOyB9XHJcbiAgICBzZXQgc3R1ZGVudE5hbWUodmFsdWUpIHsgdGhpcy5fc3R1ZGVudE5hbWUgPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IHN1YmplY3QoKSB7IHJldHVybiB0aGlzLl9zdWJqZWN0OyB9XHJcbiAgICBzZXQgc3ViamVjdCh2YWx1ZSkgeyB0aGlzLl9zdWJqZWN0ID0gdmFsdWU7IH1cclxuICAgIGdldCBtYXJrKCkgeyByZXR1cm4gdGhpcy5fbWFyazsgfVxyXG4gICAgc2V0IG1hcmsodmFsdWUpIHsgdGhpcy5fbWFyayA9IHZhbHVlOyB9XHJcbiAgICBnZXQgc3R1ZGVudF9pZCgpIHsgcmV0dXJuIHRoaXMuX3N0dWRlbnRfaWQ7IH1cclxuICAgIHNldCBzdHVkZW50X2lkKHZhbHVlKSB7IHRoaXMuX3N0dWRlbnRfaWQgPSB2YWx1ZTsgfVxyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBjb25zdCBzYXZlUHJvbWlzZSA9IHRoaXMuX2lkXHJcbiAgICAgICAgICAgID8gdGhpcy5fc3R1ZGVudFNlcnZpY2UudXBkYXRlU3R1ZGVudE1hcmtFbnRyeSh0aGlzLl9pZCwgdGhpcy5fc3R1ZGVudE5hbWUsIHRoaXMuX3N1YmplY3QsIHRoaXMuX21hcmssIHRoaXMuX3N0dWRlbnRfaWQpXHJcbiAgICAgICAgICAgIDogdGhpcy5fc3R1ZGVudFNlcnZpY2UuY3JlYXRlU3R1ZGVudE1hcmtFbnRyeSh0aGlzLl9zdHVkZW50TmFtZSwgdGhpcy5fc3ViamVjdCwgdGhpcy5fbWFyaywgdGhpcy5fc3R1ZGVudF9pZCk7XHJcbiAgICAgICAgc2F2ZVByb21pc2VcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGUoUm91dGVzLmxpc3RTdHVkZW50cywge30pKVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICB9XHJcbiAgICBvbkVudGVyKGlkKSB7XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UuZ2V0U3R1ZGVudE1hcmtFbnRyaWVzKClcclxuICAgICAgICAgICAgLnRoZW4odCA9PiB0aGlzLl9zdHVkZW50TWFya0VudHJ5ID0gdClcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgIGlmIChpZCAmJiAhaWQuaXNFbXB0eU9yV2hpdGVTcGFjZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wZXJhdGlvbiA9IFwiVXBkYXRlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlLmdldFN0dWRlbnRNYXJrRW50cnkoaWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbih0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lkID0gdC5pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0dWRlbnRfaWQgPSB0LnN0dWRlbnRfaWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXJrID0gdC5tYXJrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3R1ZGVudE5hbWUgPSB0LnN0dWRlbnROYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3ViamVjdCA9IHQuc3ViamVjdDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wZXJhdGlvbiA9IFwiQWRkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5NYW5hZ2VTdHVkZW50TWFya1ZpZXdNb2RlbCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgbl9hcHBfMS50ZW1wbGF0ZShyZXF1aXJlKFwiLi9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS12aWV3Lmh0bWxcIikpLFxyXG4gICAgbl9hcHBfMS5yb3V0ZShSb3V0ZXMubWFuYWdlU3R1ZGVudE1hcmspLFxyXG4gICAgbl9qZWN0XzEuaW5qZWN0KFwiU3R1ZGVudFNlcnZpY2VcIiwgXCJOYXZpZ2F0aW9uU2VydmljZVwiLCBcIkFkbWluU2VydmljZVwiKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbT2JqZWN0LCBPYmplY3RdKVxyXG5dLCBNYW5hZ2VTdHVkZW50TWFya1ZpZXdNb2RlbCk7XHJcbmV4cG9ydHMuTWFuYWdlU3R1ZGVudE1hcmtWaWV3TW9kZWwgPSBNYW5hZ2VTdHVkZW50TWFya1ZpZXdNb2RlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFuYWdlLXN0dWRlbnRNYXJrRW50cnktdmlldy1tb2RlbC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibWFuYWdlLXRlYWNoZXItdmlld1xcXCI+XFxyXFxuICAgIDxoMSBjbGFzcz1cXFwidGl0bGVcXFwiPlxcclxcbiAgICAgICAge3tvcGVyYXRpb259fVxcclxcbiAgICA8L2gxPlxcclxcblxcclxcbiAgICA8Zm9ybT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImxhYmVsXFxcIj5TdHVkZW50IE5hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRyb2xcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImlucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2LW1vZGVsPVxcXCJzdHVkZW50TmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcInN0dWRlbnQgTmFtZVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICBcXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImxhYmVsXFxcIj5zdWJqZWN0PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250cm9sXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJpbnB1dFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdi1tb2RlbD1cXFwic3ViamVjdFxcXCIgcGxhY2Vob2xkZXI9XFxcInN1YmplY3RcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJsYWJlbFxcXCI+bWFyazwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiaW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiIHYtbW9kZWw9XFxcIm1hcmtcXFwiIHBsYWNlaG9sZGVyPVxcXCJtYXJrXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQgaXMtZ3JvdXBlZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBpcy1saW5rXFxcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XFxcInNhdmVcXFwiPlNhdmU8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250cm9sXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGNsYXNzPVxcXCJidXR0b24gaXMtdGV4dFxcXCIgdG89XFxcIi9saXN0U3R1ZGVudFxcXCI+Q2FuY2VsPC9yb3V0ZXItbGluaz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==