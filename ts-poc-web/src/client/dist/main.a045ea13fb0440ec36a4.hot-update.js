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
        this._navigationService = navigationService;
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
            .then(() => this._navigationService.navigate(Routes.listStudentMarks, { id: this._student_id })).catch(e => console.log(e));
        debugger;
    }
    onEnter(id) {
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
        if (id && !id.isEmptyOrWhiteSpace()) {
        }
        else {
            debugger;
            this._operation = "Add";
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLGtEQUFjO0FBQ3JDLG1CQUFPLENBQUMsZ0lBQXFDO0FBQzdDLGlCQUFpQixtQkFBTyxDQUFDLDZFQUFxQjtBQUM5QyxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtCQUErQjtBQUMzRCxvQkFBb0IsdUJBQXVCO0FBQzNDLHFCQUFxQix3QkFBd0I7QUFDN0MsdUJBQXVCLDBCQUEwQjtBQUNqRCw0QkFBNEIsMkJBQTJCO0FBQ3ZELG1CQUFtQixzQkFBc0I7QUFDekMsd0JBQXdCLHVCQUF1QjtBQUMvQyxnQkFBZ0IsbUJBQW1CO0FBQ25DLHFCQUFxQixvQkFBb0I7QUFDekMsc0JBQXNCLHlCQUF5QjtBQUMvQywyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRix1QkFBdUI7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQkFBTyxDQUFDLGdJQUFxQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEQiLCJmaWxlIjoibWFpbi5hMDQ1ZWExM2ZiMDQ0MGVjMzZhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5fYXBwXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tYXBwXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vcm91dGVzXCIpO1xyXG5yZXF1aXJlKFwiLi9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS12aWV3LnNjc3NcIik7XHJcbmNvbnN0IG5famVjdF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWplY3RcIik7XHJcbmNvbnN0IG5fZGVmZW5zaXZlXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tZGVmZW5zaXZlXCIpO1xyXG5sZXQgTWFuYWdlU3R1ZGVudE1hcmtWaWV3TW9kZWwgPSBjbGFzcyBNYW5hZ2VTdHVkZW50TWFya1ZpZXdNb2RlbCBleHRlbmRzIG5fYXBwXzEuUGFnZVZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdHVkZW50U2VydmljZSwgbmF2aWdhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oc3R1ZGVudFNlcnZpY2UsIFwic3R1ZGVudFNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlID0gc3R1ZGVudFNlcnZpY2U7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihuYXZpZ2F0aW9uU2VydmljZSwgXCJuYXZpZ2F0aW9uU2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UgPSBuYXZpZ2F0aW9uU2VydmljZTtcclxuICAgICAgICB0aGlzLl9zdWJqZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRNYXJrRW50cnkgPSBbXTtcclxuICAgICAgICB0aGlzLl9pZCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudE5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX3N1YmplY3QgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX21hcmsgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRfaWQgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgZ2V0IHN0dWRlbnRNYXJrRW50cnkoKSB7IHJldHVybiB0aGlzLl9zdHVkZW50TWFya0VudHJ5OyB9XHJcbiAgICBnZXQgc3ViamVjdHMoKSB7IHJldHVybiB0aGlzLl9zdWJqZWN0czsgfVxyXG4gICAgZ2V0IG9wZXJhdGlvbigpIHsgcmV0dXJuIHRoaXMuX29wZXJhdGlvbjsgfVxyXG4gICAgZ2V0IHN0dWRlbnROYW1lKCkgeyByZXR1cm4gdGhpcy5fc3R1ZGVudE5hbWU7IH1cclxuICAgIHNldCBzdHVkZW50TmFtZSh2YWx1ZSkgeyB0aGlzLl9zdHVkZW50TmFtZSA9IHZhbHVlOyB9XHJcbiAgICBnZXQgc3ViamVjdCgpIHsgcmV0dXJuIHRoaXMuX3N1YmplY3Q7IH1cclxuICAgIHNldCBzdWJqZWN0KHZhbHVlKSB7IHRoaXMuX3N1YmplY3QgPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IG1hcmsoKSB7IHJldHVybiB0aGlzLl9tYXJrOyB9XHJcbiAgICBzZXQgbWFyayh2YWx1ZSkgeyB0aGlzLl9tYXJrID0gdmFsdWU7IH1cclxuICAgIGdldCBzdHVkZW50X2lkKCkgeyByZXR1cm4gdGhpcy5fc3R1ZGVudF9pZDsgfVxyXG4gICAgc2V0IHN0dWRlbnRfaWQodmFsdWUpIHsgdGhpcy5fc3R1ZGVudF9pZCA9IHZhbHVlOyB9XHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGNvbnN0IHNhdmVQcm9taXNlID0gdGhpcy5faWRcclxuICAgICAgICAgICAgPyB0aGlzLl9zdHVkZW50U2VydmljZS51cGRhdGVTdHVkZW50TWFya0VudHJ5KHRoaXMuX2lkLCB0aGlzLl9zdHVkZW50TmFtZSwgdGhpcy5fc3ViamVjdCwgdGhpcy5fbWFyaywgdGhpcy5fc3R1ZGVudF9pZClcclxuICAgICAgICAgICAgOiB0aGlzLl9zdHVkZW50U2VydmljZS5jcmVhdGVTdHVkZW50TWFya0VudHJ5KHRoaXMuX3N0dWRlbnRfaWQsIHRoaXMuX3N0dWRlbnROYW1lLCB0aGlzLl9zdWJqZWN0LCB0aGlzLl9tYXJrKTtcclxuICAgICAgICBzYXZlUHJvbWlzZVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZShSb3V0ZXMubGlzdFN0dWRlbnRNYXJrcywgeyBpZDogdGhpcy5fc3R1ZGVudF9pZCB9KSkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICB9XHJcbiAgICBvbkVudGVyKGlkKSB7XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UuZ2V0U3ViamVjdHMoKVxyXG4gICAgICAgICAgICAudGhlbih0ID0+IHRoaXMuX3N1YmplY3RzID0gdClcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlLmdldFN0dWRlbnQoaWQpXHJcbiAgICAgICAgICAgIC50aGVuKHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zdHVkZW50X2lkID0gdC5pZCxcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0dWRlbnROYW1lID0gdC5uYW1lO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZS5nZXRTdHVkZW50TWFyayhpZClcclxuICAgICAgICAgICAgLnRoZW4odCA9PiB0aGlzLl9zdHVkZW50TWFya0VudHJ5ID0gdClcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgIGlmIChpZCAmJiAhaWQuaXNFbXB0eU9yV2hpdGVTcGFjZSgpKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gXCJBZGRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbk1hbmFnZVN0dWRlbnRNYXJrVmlld01vZGVsID0gX19kZWNvcmF0ZShbXHJcbiAgICBuX2FwcF8xLnRlbXBsYXRlKHJlcXVpcmUoXCIuL21hbmFnZS1zdHVkZW50TWFya0VudHJ5LXZpZXcuaHRtbFwiKSksXHJcbiAgICBuX2FwcF8xLnJvdXRlKFJvdXRlcy5tYW5hZ2VTdHVkZW50TWFyayksXHJcbiAgICBuX2plY3RfMS5pbmplY3QoXCJTdHVkZW50U2VydmljZVwiLCBcIk5hdmlnYXRpb25TZXJ2aWNlXCIpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtPYmplY3QsIE9iamVjdF0pXHJcbl0sIE1hbmFnZVN0dWRlbnRNYXJrVmlld01vZGVsKTtcclxuZXhwb3J0cy5NYW5hZ2VTdHVkZW50TWFya1ZpZXdNb2RlbCA9IE1hbmFnZVN0dWRlbnRNYXJrVmlld01vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS12aWV3LW1vZGVsLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=