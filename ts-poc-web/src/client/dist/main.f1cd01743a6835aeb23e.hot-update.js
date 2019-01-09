webpackHotUpdate("main",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS12aWV3LW1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcGFnZXMvc2Nob29sL21hbmFnZS1zdHVkZW50TWFya0VudHJ5L21hbmFnZS1zdHVkZW50TWFya0VudHJ5LXZpZXcuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsMkVBQW9CO0FBQzVDLGVBQWUsbUJBQU8sQ0FBQyxrREFBYztBQUNyQyxtQkFBTyxDQUFDLHdKQUFnQztBQUN4QyxpQkFBaUIsbUJBQU8sQ0FBQyw2RUFBcUI7QUFDOUMsc0JBQXNCLG1CQUFPLENBQUMsdUZBQTBCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0JBQStCO0FBQzNELHFCQUFxQix3QkFBd0I7QUFDN0MsdUJBQXVCLDBCQUEwQjtBQUNqRCw0QkFBNEIsMkJBQTJCO0FBQ3ZELG1CQUFtQixzQkFBc0I7QUFDekMsd0JBQXdCLHVCQUF1QjtBQUMvQyxnQkFBZ0IsbUJBQW1CO0FBQ25DLHFCQUFxQixvQkFBb0I7QUFDekMsc0JBQXNCLHlCQUF5QjtBQUMvQywyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQkFBTyxDQUFDLGdJQUFxQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEQ7Ozs7Ozs7Ozs7O0FDN0VBLCtGQUErRixXQUFXLHl1QyIsImZpbGUiOiJtYWluLmYxY2QwMTc0M2E2ODM1YWViMjNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbl9hcHBfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1hcHBcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi9yb3V0ZXNcIik7XHJcbnJlcXVpcmUoXCIuL21hbmFnZS1zdHVkZW50TWFya0VudHJ5LXZpZXdcIik7XHJcbmNvbnN0IG5famVjdF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWplY3RcIik7XHJcbmNvbnN0IG5fZGVmZW5zaXZlXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tZGVmZW5zaXZlXCIpO1xyXG5sZXQgTWFuYWdlU3R1ZGVudE1hcmtWaWV3TW9kZWwgPSBjbGFzcyBNYW5hZ2VTdHVkZW50TWFya1ZpZXdNb2RlbCBleHRlbmRzIG5fYXBwXzEuUGFnZVZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdHVkZW50U2VydmljZSwgbmF2aWdhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oc3R1ZGVudFNlcnZpY2UsIFwic3R1ZGVudFNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlID0gc3R1ZGVudFNlcnZpY2U7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihuYXZpZ2F0aW9uU2VydmljZSwgXCJuYXZpZ2F0aW9uU2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UgPSBuYXZpZ2F0aW9uU2VydmljZTtcclxuICAgICAgICB0aGlzLl9zdHVkZW50TWFya0VudHJ5ID0gW107XHJcbiAgICAgICAgdGhpcy5faWQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnROYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9zdWJqZWN0ID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9tYXJrID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9zdHVkZW50X2lkID0gXCJcIjtcclxuICAgIH1cclxuICAgIGdldCBzdHVkZW50TWFya0VudHJ5KCkgeyByZXR1cm4gdGhpcy5fc3R1ZGVudE1hcmtFbnRyeTsgfVxyXG4gICAgZ2V0IG9wZXJhdGlvbigpIHsgcmV0dXJuIHRoaXMuX29wZXJhdGlvbjsgfVxyXG4gICAgZ2V0IHN0dWRlbnROYW1lKCkgeyByZXR1cm4gdGhpcy5fc3R1ZGVudE5hbWU7IH1cclxuICAgIHNldCBzdHVkZW50TmFtZSh2YWx1ZSkgeyB0aGlzLl9zdHVkZW50TmFtZSA9IHZhbHVlOyB9XHJcbiAgICBnZXQgc3ViamVjdCgpIHsgcmV0dXJuIHRoaXMuX3N1YmplY3Q7IH1cclxuICAgIHNldCBzdWJqZWN0KHZhbHVlKSB7IHRoaXMuX3N1YmplY3QgPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IG1hcmsoKSB7IHJldHVybiB0aGlzLl9tYXJrOyB9XHJcbiAgICBzZXQgbWFyayh2YWx1ZSkgeyB0aGlzLl9tYXJrID0gdmFsdWU7IH1cclxuICAgIGdldCBzdHVkZW50X2lkKCkgeyByZXR1cm4gdGhpcy5fc3R1ZGVudF9pZDsgfVxyXG4gICAgc2V0IHN0dWRlbnRfaWQodmFsdWUpIHsgdGhpcy5fc3R1ZGVudF9pZCA9IHZhbHVlOyB9XHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGNvbnN0IHNhdmVQcm9taXNlID0gdGhpcy5faWRcclxuICAgICAgICAgICAgPyB0aGlzLl9zdHVkZW50U2VydmljZS51cGRhdGVTdHVkZW50TWFya0VudHJ5KHRoaXMuX2lkLCB0aGlzLl9zdHVkZW50TmFtZSwgdGhpcy5fc3ViamVjdCwgdGhpcy5fbWFyaywgdGhpcy5fc3R1ZGVudF9pZClcclxuICAgICAgICAgICAgOiB0aGlzLl9zdHVkZW50U2VydmljZS5jcmVhdGVTdHVkZW50TWFya0VudHJ5KHRoaXMuX3N0dWRlbnROYW1lLCB0aGlzLl9zdWJqZWN0LCB0aGlzLl9tYXJrLCB0aGlzLl9zdHVkZW50X2lkKTtcclxuICAgICAgICBzYXZlUHJvbWlzZVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZShSb3V0ZXMubGlzdFN0dWRlbnRzLCB7fSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgIH1cclxuICAgIG9uRW50ZXIoaWQpIHtcclxuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZS5nZXRTdHVkZW50TWFya0VudHJpZXMoKVxyXG4gICAgICAgICAgICAudGhlbih0ID0+IHRoaXMuX3N0dWRlbnRNYXJrRW50cnkgPSB0KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgaWYgKGlkICYmICFpZC5pc0VtcHR5T3JXaGl0ZVNwYWNlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gXCJVcGRhdGVcIjtcclxuICAgICAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UuZ2V0U3R1ZGVudE1hcmtFbnRyeShpZClcclxuICAgICAgICAgICAgICAgIC50aGVuKHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faWQgPSB0LmlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3R1ZGVudF9pZCA9IHQuc3R1ZGVudF9pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21hcmsgPSB0Lm1hcms7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHVkZW50TmFtZSA9IHQuc3R1ZGVudE5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJqZWN0ID0gdC5zdWJqZWN0O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gXCJBZGRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbk1hbmFnZVN0dWRlbnRNYXJrVmlld01vZGVsID0gX19kZWNvcmF0ZShbXHJcbiAgICBuX2FwcF8xLnRlbXBsYXRlKHJlcXVpcmUoXCIuL21hbmFnZS1zdHVkZW50TWFya0VudHJ5LXZpZXcuaHRtbFwiKSksXHJcbiAgICBuX2FwcF8xLnJvdXRlKFJvdXRlcy5tYW5hZ2VTdHVkZW50TWFyayksXHJcbiAgICBuX2plY3RfMS5pbmplY3QoXCJTdHVkZW50U2VydmljZVwiLCBcIk5hdmlnYXRpb25TZXJ2aWNlXCIsIFwiQWRtaW5TZXJ2aWNlXCIpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtPYmplY3QsIE9iamVjdF0pXHJcbl0sIE1hbmFnZVN0dWRlbnRNYXJrVmlld01vZGVsKTtcclxuZXhwb3J0cy5NYW5hZ2VTdHVkZW50TWFya1ZpZXdNb2RlbCA9IE1hbmFnZVN0dWRlbnRNYXJrVmlld01vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS12aWV3LW1vZGVsLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJtYW5hZ2UtdGVhY2hlci12aWV3XFxcIj5cXHJcXG4gICAgPGgxIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFxyXFxuICAgICAgICB7e29wZXJhdGlvbn19XFxyXFxuICAgIDwvaDE+XFxyXFxuXFxyXFxuICAgIDxmb3JtPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwibGFiZWxcXFwiPlN0dWRlbnQgTmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiaW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiIHYtbW9kZWw9XFxcInN0dWRlbnROYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwic3R1ZGVudCBOYW1lXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgIFxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwibGFiZWxcXFwiPnN1YmplY3Q8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRyb2xcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImlucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2LW1vZGVsPVxcXCJzdWJqZWN0XFxcIiBwbGFjZWhvbGRlcj1cXFwic3ViamVjdFxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImxhYmVsXFxcIj5tYXJrPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250cm9sXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJpbnB1dFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdi1tb2RlbD1cXFwibWFya1xcXCIgcGxhY2Vob2xkZXI9XFxcIm1hcmtcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZCBpcy1ncm91cGVkXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250cm9sXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGlzLWxpbmtcXFwiIHYtb246Y2xpY2sucHJldmVudD1cXFwic2F2ZVxcXCI+U2F2ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRyb2xcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgY2xhc3M9XFxcImJ1dHRvbiBpcy10ZXh0XFxcIiB0bz1cXFwiL2xpc3RTdHVkZW50XFxcIj5DYW5jZWw8L3JvdXRlci1saW5rPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG5cIjsiXSwic291cmNlUm9vdCI6IiJ9