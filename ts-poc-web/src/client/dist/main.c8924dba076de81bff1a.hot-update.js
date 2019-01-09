webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/pages/school/list-studentMarks/list-studentMarks-view.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2!./node_modules/sass-loader/lib/loader.js!./src/client/pages/school/list-studentMarks/list-studentMarks-view.scss ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

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
const list_studentMarks_view_model_1 = __webpack_require__(/*! ./school/list-studentMarks/list-studentMarks-view-model */ "./src/client/pages/school/list-studentMarks/list-studentMarks-view-model.js");
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
    manage_studentMarkEntry_view_model_1.ManageStudentMarkViewModel,
    list_studentMarks_view_model_1.ListStudentMarkViewModel,
];
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ "./src/client/pages/school/list-studentMarks/list-studentMarks-view-model.js":
/*!***********************************************************************************!*\
  !*** ./src/client/pages/school/list-studentMarks/list-studentMarks-view-model.js ***!
  \***********************************************************************************/
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
__webpack_require__(/*! ./list-studentMarks-view.scss */ "./src/client/pages/school/list-studentMarks/list-studentMarks-view.scss");
const n_ject_1 = __webpack_require__(/*! @nivinjoseph/n-ject */ "./node_modules/@nivinjoseph/n-ject/dist/index.js");
const n_defensive_1 = __webpack_require__(/*! @nivinjoseph/n-defensive */ "./node_modules/@nivinjoseph/n-defensive/dist/index.js");
let ListStudentMarkViewModel = class ListStudentMarkViewModel extends n_app_1.PageViewModel {
    constructor(studentService) {
        super();
        n_defensive_1.given(studentService, "studentService").ensureHasValue().ensureIsObject();
        this._studentService = studentService;
        this._studentMarks = [];
    }
    get studentMarks() {
        return this._studentMarks;
    }
    onEnter() {
        this._studentService.getStudentMarkEntries()
            .then(t => this._studentMarks = t)
            .catch(e => console.log(e));
    }
};
ListStudentMarkViewModel = __decorate([
    n_app_1.template(__webpack_require__(/*! ./list-studentMarks-view.html */ "./src/client/pages/school/list-studentMarks/list-studentMarks-view.html")),
    n_app_1.route(Routes.listStudents),
    n_ject_1.inject("StudentService"),
    __metadata("design:paramtypes", [Object])
], ListStudentMarkViewModel);
exports.ListStudentMarkViewModel = ListStudentMarkViewModel;
//# sourceMappingURL=list-studentMarks-view-model.js.map

/***/ }),

/***/ "./src/client/pages/school/list-studentMarks/list-studentMarks-view.html":
/*!*******************************************************************************!*\
  !*** ./src/client/pages/school/list-studentMarks/list-studentMarks-view.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "";

/***/ }),

/***/ "./src/client/pages/school/list-studentMarks/list-studentMarks-view.scss":
/*!*******************************************************************************!*\
  !*** ./src/client/pages/school/list-studentMarks/list-studentMarks-view.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!./list-studentMarks-view.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/pages/school/list-studentMarks/list-studentMarks-view.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!./list-studentMarks-view.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/pages/school/list-studentMarks/list-studentMarks-view.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js!./list-studentMarks-view.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/client/pages/school/list-studentMarks/list-studentMarks-view.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9saXN0LXN0dWRlbnRNYXJrcy9saXN0LXN0dWRlbnRNYXJrcy12aWV3LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9wYWdlcy9wYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9saXN0LXN0dWRlbnRNYXJrcy9saXN0LXN0dWRlbnRNYXJrcy12aWV3LW1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcGFnZXMvc2Nob29sL2xpc3Qtc3R1ZGVudE1hcmtzL2xpc3Qtc3R1ZGVudE1hcmtzLXZpZXcuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9saXN0LXN0dWRlbnRNYXJrcy9saXN0LXN0dWRlbnRNYXJrcy12aWV3LnNjc3M/NDk1NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyx5R0FBd0Q7QUFDM0Y7OztBQUdBO0FBQ0EsY0FBYyxRQUFTOztBQUV2Qjs7Ozs7Ozs7Ozs7OztBQ1BhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZ0NBQWdDLG1CQUFPLENBQUMsa0dBQW9DO0FBQzVFLGlDQUFpQyxtQkFBTyxDQUFDLHNHQUFzQztBQUMvRSxrQ0FBa0MsbUJBQU8sQ0FBQyw0R0FBeUM7QUFDbkYsb0NBQW9DLG1CQUFPLENBQUMsa0hBQTRDO0FBQ3hGLDJCQUEyQixtQkFBTyxDQUFDLDRGQUFpQztBQUNwRSxrQ0FBa0MsbUJBQU8sQ0FBQywwSEFBZ0Q7QUFDMUYsb0NBQW9DLG1CQUFPLENBQUMsZ0lBQW1EO0FBQy9GLGtDQUFrQyxtQkFBTyxDQUFDLDBIQUFnRDtBQUMxRixvQ0FBb0MsbUJBQU8sQ0FBQyxnSUFBbUQ7QUFDL0YsNkNBQTZDLG1CQUFPLENBQUMsb0tBQXFFO0FBQzFILHVDQUF1QyxtQkFBTyxDQUFDLDRJQUF5RDtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUMxQmE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsMkVBQW9CO0FBQzVDLGVBQWUsbUJBQU8sQ0FBQyxrREFBYztBQUNyQyxtQkFBTyxDQUFDLDhHQUErQjtBQUN2QyxpQkFBaUIsbUJBQU8sQ0FBQyw2RUFBcUI7QUFDOUMsc0JBQXNCLG1CQUFPLENBQUMsdUZBQTBCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyw4R0FBK0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEOzs7Ozs7Ozs7OztBQ3ZDQSxvQjs7Ozs7Ozs7Ozs7O0FDQ0EsY0FBYyxtQkFBTyxDQUFDLDZYQUF5TTs7QUFFL04sNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLCtHQUE0RDs7QUFFakY7O0FBRUEsR0FBRyxJQUFVO0FBQ2IsbUJBQW1CLDZYQUF5TTtBQUM1TixtQkFBbUIsbUJBQU8sQ0FBQyw2WEFBeU07O0FBRXBPLG9EQUFvRCxRQUFTOztBQUU3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6Im1haW4uYzg5MjRkYmEwNzZkZTgxYmZmMWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbGlzdF90b2Rvc192aWV3X21vZGVsXzEgPSByZXF1aXJlKFwiLi9saXN0LXRvZG9zL2xpc3QtdG9kb3Mtdmlldy1tb2RlbFwiKTtcclxuY29uc3QgbWFuYWdlX3RvZG9fdmlld19tb2RlbF8xID0gcmVxdWlyZShcIi4vbWFuYWdlLXRvZG8vbWFuYWdlLXRvZG8tdmlldy1tb2RlbFwiKTtcclxuY29uc3QgbGlzdF9jb250YWN0X3ZpZXdfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL2xpc3QtY29udGFjdHMvbGlzdC1jb250YWN0LXZpZXctbW9kZWxcIik7XHJcbmNvbnN0IG1hbmFnZV9jb250YWN0X3ZpZXdfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL21hbmFnZS1jb250YWN0L21hbmFnZS1jb250YWN0LXZpZXctbW9kZWxcIik7XHJcbmNvbnN0IGFkbWluX3ZpZXdfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL3NjaG9vbC9hZG1pbi9hZG1pbi12aWV3LW1vZGVsXCIpO1xyXG5jb25zdCBsaXN0X3RlYWNoZXJfdmlld19tb2RlbF8xID0gcmVxdWlyZShcIi4vc2Nob29sL2xpc3QtdGVhY2hlcnMvbGlzdC10ZWFjaGVyLXZpZXctbW9kZWxcIik7XHJcbmNvbnN0IG1hbmFnZV90ZWFjaGVyX3ZpZXdfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL3NjaG9vbC9tYW5hZ2UtdGVhY2hlci9tYW5hZ2UtdGVhY2hlci12aWV3LW1vZGVsXCIpO1xyXG5jb25zdCBsaXN0X3N0dWRlbnRfdmlld19tb2RlbF8xID0gcmVxdWlyZShcIi4vc2Nob29sL2xpc3Qtc3R1ZGVudHMvbGlzdC1zdHVkZW50LXZpZXctbW9kZWxcIik7XHJcbmNvbnN0IG1hbmFnZV9zdHVkZW50X3ZpZXdfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL3NjaG9vbC9tYW5hZ2Utc3R1ZGVudC9tYW5hZ2Utc3R1ZGVudC12aWV3LW1vZGVsXCIpO1xyXG5jb25zdCBtYW5hZ2Vfc3R1ZGVudE1hcmtFbnRyeV92aWV3X21vZGVsXzEgPSByZXF1aXJlKFwiLi9zY2hvb2wvbWFuYWdlLXN0dWRlbnRNYXJrRW50cnkvbWFuYWdlLXN0dWRlbnRNYXJrRW50cnktdmlldy1tb2RlbFwiKTtcclxuY29uc3QgbGlzdF9zdHVkZW50TWFya3Nfdmlld19tb2RlbF8xID0gcmVxdWlyZShcIi4vc2Nob29sL2xpc3Qtc3R1ZGVudE1hcmtzL2xpc3Qtc3R1ZGVudE1hcmtzLXZpZXctbW9kZWxcIik7XHJcbmV4cG9ydHMucGFnZXMgPSBbXHJcbiAgICBsaXN0X3RvZG9zX3ZpZXdfbW9kZWxfMS5MaXN0VG9kb3NWaWV3TW9kZWwsXHJcbiAgICBtYW5hZ2VfdG9kb192aWV3X21vZGVsXzEuTWFuYWdlVG9kb1ZpZXdNb2RlbCxcclxuICAgIG1hbmFnZV9jb250YWN0X3ZpZXdfbW9kZWxfMS5NYW5hZ2VDb250YWN0Vmlld01vZGVsLFxyXG4gICAgbGlzdF9jb250YWN0X3ZpZXdfbW9kZWxfMS5MaXN0Q29udGFjdFZpZXdNb2RlbCxcclxuICAgIGFkbWluX3ZpZXdfbW9kZWxfMS5MaXN0QWRtaW5WaWV3TW9kZWwsXHJcbiAgICBsaXN0X3RlYWNoZXJfdmlld19tb2RlbF8xLkxpc3RUZWFjaGVyc1ZpZXdNb2RlbCxcclxuICAgIG1hbmFnZV90ZWFjaGVyX3ZpZXdfbW9kZWxfMS5NYW5hZ2VUZWFjaGVyVmlld01vZGVsLFxyXG4gICAgbGlzdF9zdHVkZW50X3ZpZXdfbW9kZWxfMS5MaXN0U3R1ZGVudFZpZXdNb2RlbCxcclxuICAgIG1hbmFnZV9zdHVkZW50X3ZpZXdfbW9kZWxfMS5NYW5hZ2VTdHVkZW50Vmlld01vZGVsLFxyXG4gICAgbWFuYWdlX3N0dWRlbnRNYXJrRW50cnlfdmlld19tb2RlbF8xLk1hbmFnZVN0dWRlbnRNYXJrVmlld01vZGVsLFxyXG4gICAgbGlzdF9zdHVkZW50TWFya3Nfdmlld19tb2RlbF8xLkxpc3RTdHVkZW50TWFya1ZpZXdNb2RlbCxcclxuXTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5fYXBwXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tYXBwXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vcm91dGVzXCIpO1xyXG5yZXF1aXJlKFwiLi9saXN0LXN0dWRlbnRNYXJrcy12aWV3LnNjc3NcIik7XHJcbmNvbnN0IG5famVjdF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWplY3RcIik7XHJcbmNvbnN0IG5fZGVmZW5zaXZlXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tZGVmZW5zaXZlXCIpO1xyXG5sZXQgTGlzdFN0dWRlbnRNYXJrVmlld01vZGVsID0gY2xhc3MgTGlzdFN0dWRlbnRNYXJrVmlld01vZGVsIGV4dGVuZHMgbl9hcHBfMS5QYWdlVmlld01vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0dWRlbnRTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHN0dWRlbnRTZXJ2aWNlLCBcInN0dWRlbnRTZXJ2aWNlXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNPYmplY3QoKTtcclxuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZSA9IHN0dWRlbnRTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRNYXJrcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgZ2V0IHN0dWRlbnRNYXJrcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3R1ZGVudE1hcmtzO1xyXG4gICAgfVxyXG4gICAgb25FbnRlcigpIHtcclxuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZS5nZXRTdHVkZW50TWFya0VudHJpZXMoKVxyXG4gICAgICAgICAgICAudGhlbih0ID0+IHRoaXMuX3N0dWRlbnRNYXJrcyA9IHQpXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgIH1cclxufTtcclxuTGlzdFN0dWRlbnRNYXJrVmlld01vZGVsID0gX19kZWNvcmF0ZShbXHJcbiAgICBuX2FwcF8xLnRlbXBsYXRlKHJlcXVpcmUoXCIuL2xpc3Qtc3R1ZGVudE1hcmtzLXZpZXcuaHRtbFwiKSksXHJcbiAgICBuX2FwcF8xLnJvdXRlKFJvdXRlcy5saXN0U3R1ZGVudHMpLFxyXG4gICAgbl9qZWN0XzEuaW5qZWN0KFwiU3R1ZGVudFNlcnZpY2VcIiksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW09iamVjdF0pXHJcbl0sIExpc3RTdHVkZW50TWFya1ZpZXdNb2RlbCk7XHJcbmV4cG9ydHMuTGlzdFN0dWRlbnRNYXJrVmlld01vZGVsID0gTGlzdFN0dWRlbnRNYXJrVmlld01vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXN0LXN0dWRlbnRNYXJrcy12aWV3LW1vZGVsLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gXCJcIjsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9saXN0LXN0dWRlbnRNYXJrcy12aWV3LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbGlzdC1zdHVkZW50TWFya3Mtdmlldy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9saXN0LXN0dWRlbnRNYXJrcy12aWV3LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9