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
            .then(() => this._navigationService.navigate(Routes.manageStudentMark, { id: this._student_id, markId: "0" })).catch(e => console.log(e));
        debugger;
    }
    onEnter(id, markId) {
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
        if (markId && !markId.isEmptyOrWhiteSpace()) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLGtEQUFjO0FBQ3JDLG1CQUFPLENBQUMsZ0lBQXFDO0FBQzdDLGlCQUFpQixtQkFBTyxDQUFDLDZFQUFxQjtBQUM5QyxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtCQUErQjtBQUMzRCxvQkFBb0IsdUJBQXVCO0FBQzNDLHFCQUFxQix3QkFBd0I7QUFDN0MsdUJBQXVCLDBCQUEwQjtBQUNqRCw0QkFBNEIsMkJBQTJCO0FBQ3ZELG1CQUFtQixzQkFBc0I7QUFDekMsd0JBQXdCLHVCQUF1QjtBQUMvQyxnQkFBZ0IsbUJBQW1CO0FBQ25DLHFCQUFxQixvQkFBb0I7QUFDekMsc0JBQXNCLHlCQUF5QjtBQUMvQywyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRixvQ0FBb0M7QUFDeEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMsZ0lBQXFDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RCIsImZpbGUiOiJtYWluLjZlMDY5NzQyNzZjM2IxN2YxMmVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbl9hcHBfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1hcHBcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi9yb3V0ZXNcIik7XHJcbnJlcXVpcmUoXCIuL21hbmFnZS1zdHVkZW50TWFya0VudHJ5LXZpZXcuc2Nzc1wiKTtcclxuY29uc3Qgbl9qZWN0XzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tamVjdFwiKTtcclxuY29uc3Qgbl9kZWZlbnNpdmVfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1kZWZlbnNpdmVcIik7XHJcbmxldCBNYW5hZ2VTdHVkZW50TWFya1ZpZXdNb2RlbCA9IGNsYXNzIE1hbmFnZVN0dWRlbnRNYXJrVmlld01vZGVsIGV4dGVuZHMgbl9hcHBfMS5QYWdlVmlld01vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0dWRlbnRTZXJ2aWNlLCBuYXZpZ2F0aW9uU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihzdHVkZW50U2VydmljZSwgXCJzdHVkZW50U2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UgPSBzdHVkZW50U2VydmljZTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKG5hdmlnYXRpb25TZXJ2aWNlLCBcIm5hdmlnYXRpb25TZXJ2aWNlXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNPYmplY3QoKTtcclxuICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZSA9IG5hdmlnYXRpb25TZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuX3N1YmplY3RzID0gW107XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudE1hcmtFbnRyeSA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2lkID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9zdHVkZW50TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fc3ViamVjdCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fbWFyayA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudF9pZCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBnZXQgc3R1ZGVudE1hcmtFbnRyeSgpIHsgcmV0dXJuIHRoaXMuX3N0dWRlbnRNYXJrRW50cnk7IH1cclxuICAgIGdldCBzdWJqZWN0cygpIHsgcmV0dXJuIHRoaXMuX3N1YmplY3RzOyB9XHJcbiAgICBnZXQgb3BlcmF0aW9uKCkgeyByZXR1cm4gdGhpcy5fb3BlcmF0aW9uOyB9XHJcbiAgICBnZXQgc3R1ZGVudE5hbWUoKSB7IHJldHVybiB0aGlzLl9zdHVkZW50TmFtZTsgfVxyXG4gICAgc2V0IHN0dWRlbnROYW1lKHZhbHVlKSB7IHRoaXMuX3N0dWRlbnROYW1lID0gdmFsdWU7IH1cclxuICAgIGdldCBzdWJqZWN0KCkgeyByZXR1cm4gdGhpcy5fc3ViamVjdDsgfVxyXG4gICAgc2V0IHN1YmplY3QodmFsdWUpIHsgdGhpcy5fc3ViamVjdCA9IHZhbHVlOyB9XHJcbiAgICBnZXQgbWFyaygpIHsgcmV0dXJuIHRoaXMuX21hcms7IH1cclxuICAgIHNldCBtYXJrKHZhbHVlKSB7IHRoaXMuX21hcmsgPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IHN0dWRlbnRfaWQoKSB7IHJldHVybiB0aGlzLl9zdHVkZW50X2lkOyB9XHJcbiAgICBzZXQgc3R1ZGVudF9pZCh2YWx1ZSkgeyB0aGlzLl9zdHVkZW50X2lkID0gdmFsdWU7IH1cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgY29uc3Qgc2F2ZVByb21pc2UgPSB0aGlzLl9pZFxyXG4gICAgICAgICAgICA/IHRoaXMuX3N0dWRlbnRTZXJ2aWNlLnVwZGF0ZVN0dWRlbnRNYXJrRW50cnkodGhpcy5faWQsIHRoaXMuX3N0dWRlbnROYW1lLCB0aGlzLl9zdWJqZWN0LCB0aGlzLl9tYXJrLCB0aGlzLl9zdHVkZW50X2lkKVxyXG4gICAgICAgICAgICA6IHRoaXMuX3N0dWRlbnRTZXJ2aWNlLmNyZWF0ZVN0dWRlbnRNYXJrRW50cnkodGhpcy5fc3R1ZGVudF9pZCwgdGhpcy5fc3R1ZGVudE5hbWUsIHRoaXMuX3N1YmplY3QsIHRoaXMuX21hcmspO1xyXG4gICAgICAgIHNhdmVQcm9taXNlXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuX25hdmlnYXRpb25TZXJ2aWNlLm5hdmlnYXRlKFJvdXRlcy5tYW5hZ2VTdHVkZW50TWFyaywgeyBpZDogdGhpcy5fc3R1ZGVudF9pZCwgbWFya0lkOiBcIjBcIiB9KSkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICB9XHJcbiAgICBvbkVudGVyKGlkLCBtYXJrSWQpIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZS5nZXRTdWJqZWN0cygpXHJcbiAgICAgICAgICAgIC50aGVuKHQgPT4gdGhpcy5fc3ViamVjdHMgPSB0KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UuZ2V0U3R1ZGVudChpZClcclxuICAgICAgICAgICAgLnRoZW4odCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0dWRlbnRfaWQgPSB0LmlkLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3R1ZGVudE5hbWUgPSB0Lm5hbWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlLmdldFN0dWRlbnRNYXJrKGlkKVxyXG4gICAgICAgICAgICAudGhlbih0ID0+IHRoaXMuX3N0dWRlbnRNYXJrRW50cnkgPSB0KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgaWYgKG1hcmtJZCAmJiAhbWFya0lkLmlzRW1wdHlPcldoaXRlU3BhY2UoKSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIHRoaXMuX29wZXJhdGlvbiA9IFwiQWRkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5NYW5hZ2VTdHVkZW50TWFya1ZpZXdNb2RlbCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgbl9hcHBfMS50ZW1wbGF0ZShyZXF1aXJlKFwiLi9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS12aWV3Lmh0bWxcIikpLFxyXG4gICAgbl9hcHBfMS5yb3V0ZShSb3V0ZXMubWFuYWdlU3R1ZGVudE1hcmspLFxyXG4gICAgbl9qZWN0XzEuaW5qZWN0KFwiU3R1ZGVudFNlcnZpY2VcIiwgXCJOYXZpZ2F0aW9uU2VydmljZVwiKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbT2JqZWN0LCBPYmplY3RdKVxyXG5dLCBNYW5hZ2VTdHVkZW50TWFya1ZpZXdNb2RlbCk7XHJcbmV4cG9ydHMuTWFuYWdlU3R1ZGVudE1hcmtWaWV3TW9kZWwgPSBNYW5hZ2VTdHVkZW50TWFya1ZpZXdNb2RlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFuYWdlLXN0dWRlbnRNYXJrRW50cnktdmlldy1tb2RlbC5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9