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
__webpack_require__(/*! ./manage-studentMarkEntry-view.scss */ "./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view.scss");
const n_ject_1 = __webpack_require__(/*! @nivinjoseph/n-ject */ "./node_modules/@nivinjoseph/n-ject/dist/index.js");
const n_defensive_1 = __webpack_require__(/*! @nivinjoseph/n-defensive */ "./node_modules/@nivinjoseph/n-defensive/dist/index.js");
let ManageStudentMarkViewModel = class ManageStudentMarkViewModel extends n_app_1.PageViewModel {
    constructor(studentService, navigationService) {
        super();
        n_defensive_1.given(studentService, "studentService").ensureHasValue().ensureIsObject();
        this._studentService = studentService;
        n_defensive_1.given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._subjects = [];
        this._studentMarkEntry = [];
        this._id = "";
        this._studentName = "";
        this._subject = "";
        this._mark = "";
        this._student_id = "";
    }
    get studentMarkEntry() { return this._studentMarkEntry; }
    get subjects() { return this._subjects; }
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
            : this._studentService.createStudentMarkEntry(this._student_id, this._studentName, this._subject, this._mark);
        savePromise
            .then(() => this._studentService.getStudentMark(this.student_id)
            .then(t => this._studentMarkEntry = t)
            .catch(e => console.log(e)));
        debugger;
    }
    onEnter(id) {
        debugger;
        this._studentService.getSubjects()
            .then(t => this._subjects = t)
            .catch(e => console.log(e));
        debugger;
        this._studentService.getStudent(id)
            .then(t => {
            this._student_id = t.id,
                this._studentName = t.name;
        })
            .catch(e => console.log(e));
        this._studentService.getStudentMark(id)
            .then(t => this._studentMarkEntry = t)
            .catch(e => console.log(e));
        this._operation = "Add";
    }
};
ManageStudentMarkViewModel = __decorate([
    n_app_1.template(__webpack_require__(/*! ./manage-studentMarkEntry-view.html */ "./src/client/pages/school/manage-studentMarkEntry/manage-studentMarkEntry-view.html")),
    n_app_1.route(Routes.manageStudentMark),
    n_ject_1.inject("StudentService", "NavigationService"),
    __metadata("design:paramtypes", [Object, Object])
], ManageStudentMarkViewModel);
exports.ManageStudentMarkViewModel = ManageStudentMarkViewModel;
//# sourceMappingURL=manage-studentMarkEntry-view-model.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLGtEQUFjO0FBQ3JDLG1CQUFPLENBQUMsZ0lBQXFDO0FBQzdDLGlCQUFpQixtQkFBTyxDQUFDLDZFQUFxQjtBQUM5QyxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrQkFBK0I7QUFDM0Qsb0JBQW9CLHVCQUF1QjtBQUMzQyxxQkFBcUIsd0JBQXdCO0FBQzdDLHVCQUF1QiwwQkFBMEI7QUFDakQsNEJBQTRCLDJCQUEyQjtBQUN2RCxtQkFBbUIsc0JBQXNCO0FBQ3pDLHdCQUF3Qix1QkFBdUI7QUFDL0MsZ0JBQWdCLG1CQUFtQjtBQUNuQyxxQkFBcUIsb0JBQW9CO0FBQ3pDLHNCQUFzQix5QkFBeUI7QUFDL0MsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQkFBTyxDQUFDLGdJQUFxQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEQiLCJmaWxlIjoibWFpbi43MzJmYmU0Y2IyNGY2NDg2N2RjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5fYXBwXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tYXBwXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vcm91dGVzXCIpO1xyXG5yZXF1aXJlKFwiLi9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS12aWV3LnNjc3NcIik7XHJcbmNvbnN0IG5famVjdF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWplY3RcIik7XHJcbmNvbnN0IG5fZGVmZW5zaXZlXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tZGVmZW5zaXZlXCIpO1xyXG5sZXQgTWFuYWdlU3R1ZGVudE1hcmtWaWV3TW9kZWwgPSBjbGFzcyBNYW5hZ2VTdHVkZW50TWFya1ZpZXdNb2RlbCBleHRlbmRzIG5fYXBwXzEuUGFnZVZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdHVkZW50U2VydmljZSwgbmF2aWdhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oc3R1ZGVudFNlcnZpY2UsIFwic3R1ZGVudFNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlID0gc3R1ZGVudFNlcnZpY2U7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihuYXZpZ2F0aW9uU2VydmljZSwgXCJuYXZpZ2F0aW9uU2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fc3ViamVjdHMgPSBbXTtcclxuICAgICAgICB0aGlzLl9zdHVkZW50TWFya0VudHJ5ID0gW107XHJcbiAgICAgICAgdGhpcy5faWQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnROYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9zdWJqZWN0ID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9tYXJrID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9zdHVkZW50X2lkID0gXCJcIjtcclxuICAgIH1cclxuICAgIGdldCBzdHVkZW50TWFya0VudHJ5KCkgeyByZXR1cm4gdGhpcy5fc3R1ZGVudE1hcmtFbnRyeTsgfVxyXG4gICAgZ2V0IHN1YmplY3RzKCkgeyByZXR1cm4gdGhpcy5fc3ViamVjdHM7IH1cclxuICAgIGdldCBvcGVyYXRpb24oKSB7IHJldHVybiB0aGlzLl9vcGVyYXRpb247IH1cclxuICAgIGdldCBzdHVkZW50TmFtZSgpIHsgcmV0dXJuIHRoaXMuX3N0dWRlbnROYW1lOyB9XHJcbiAgICBzZXQgc3R1ZGVudE5hbWUodmFsdWUpIHsgdGhpcy5fc3R1ZGVudE5hbWUgPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IHN1YmplY3QoKSB7IHJldHVybiB0aGlzLl9zdWJqZWN0OyB9XHJcbiAgICBzZXQgc3ViamVjdCh2YWx1ZSkgeyB0aGlzLl9zdWJqZWN0ID0gdmFsdWU7IH1cclxuICAgIGdldCBtYXJrKCkgeyByZXR1cm4gdGhpcy5fbWFyazsgfVxyXG4gICAgc2V0IG1hcmsodmFsdWUpIHsgdGhpcy5fbWFyayA9IHZhbHVlOyB9XHJcbiAgICBnZXQgc3R1ZGVudF9pZCgpIHsgcmV0dXJuIHRoaXMuX3N0dWRlbnRfaWQ7IH1cclxuICAgIHNldCBzdHVkZW50X2lkKHZhbHVlKSB7IHRoaXMuX3N0dWRlbnRfaWQgPSB2YWx1ZTsgfVxyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBjb25zdCBzYXZlUHJvbWlzZSA9IHRoaXMuX2lkXHJcbiAgICAgICAgICAgID8gdGhpcy5fc3R1ZGVudFNlcnZpY2UudXBkYXRlU3R1ZGVudE1hcmtFbnRyeSh0aGlzLl9pZCwgdGhpcy5fc3R1ZGVudE5hbWUsIHRoaXMuX3N1YmplY3QsIHRoaXMuX21hcmssIHRoaXMuX3N0dWRlbnRfaWQpXHJcbiAgICAgICAgICAgIDogdGhpcy5fc3R1ZGVudFNlcnZpY2UuY3JlYXRlU3R1ZGVudE1hcmtFbnRyeSh0aGlzLl9zdHVkZW50X2lkLCB0aGlzLl9zdHVkZW50TmFtZSwgdGhpcy5fc3ViamVjdCwgdGhpcy5fbWFyayk7XHJcbiAgICAgICAgc2F2ZVByb21pc2VcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fc3R1ZGVudFNlcnZpY2UuZ2V0U3R1ZGVudE1hcmsodGhpcy5zdHVkZW50X2lkKVxyXG4gICAgICAgICAgICAudGhlbih0ID0+IHRoaXMuX3N0dWRlbnRNYXJrRW50cnkgPSB0KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSkpO1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgfVxyXG4gICAgb25FbnRlcihpZCkge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlLmdldFN1YmplY3RzKClcclxuICAgICAgICAgICAgLnRoZW4odCA9PiB0aGlzLl9zdWJqZWN0cyA9IHQpXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZS5nZXRTdHVkZW50KGlkKVxyXG4gICAgICAgICAgICAudGhlbih0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc3R1ZGVudF9pZCA9IHQuaWQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHVkZW50TmFtZSA9IHQubmFtZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UuZ2V0U3R1ZGVudE1hcmsoaWQpXHJcbiAgICAgICAgICAgIC50aGVuKHQgPT4gdGhpcy5fc3R1ZGVudE1hcmtFbnRyeSA9IHQpXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSBcIkFkZFwiO1xyXG4gICAgfVxyXG59O1xyXG5NYW5hZ2VTdHVkZW50TWFya1ZpZXdNb2RlbCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgbl9hcHBfMS50ZW1wbGF0ZShyZXF1aXJlKFwiLi9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS12aWV3Lmh0bWxcIikpLFxyXG4gICAgbl9hcHBfMS5yb3V0ZShSb3V0ZXMubWFuYWdlU3R1ZGVudE1hcmspLFxyXG4gICAgbl9qZWN0XzEuaW5qZWN0KFwiU3R1ZGVudFNlcnZpY2VcIiwgXCJOYXZpZ2F0aW9uU2VydmljZVwiKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbT2JqZWN0LCBPYmplY3RdKVxyXG5dLCBNYW5hZ2VTdHVkZW50TWFya1ZpZXdNb2RlbCk7XHJcbmV4cG9ydHMuTWFuYWdlU3R1ZGVudE1hcmtWaWV3TW9kZWwgPSBNYW5hZ2VTdHVkZW50TWFya1ZpZXdNb2RlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFuYWdlLXN0dWRlbnRNYXJrRW50cnktdmlldy1tb2RlbC5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9