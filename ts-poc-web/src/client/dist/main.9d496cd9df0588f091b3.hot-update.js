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
        debugger;
        this._studentService.getStudentMark(id)
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
    n_ject_1.inject("StudentService", "NavigationService"),
    __metadata("design:paramtypes", [Object, Object])
], ManageStudentMarkViewModel);
exports.ManageStudentMarkViewModel = ManageStudentMarkViewModel;
//# sourceMappingURL=manage-studentMarkEntry-view-model.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLGtEQUFjO0FBQ3JDLG1CQUFPLENBQUMsZ0lBQXFDO0FBQzdDLGlCQUFpQixtQkFBTyxDQUFDLDZFQUFxQjtBQUM5QyxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrQkFBK0I7QUFDM0QscUJBQXFCLHdCQUF3QjtBQUM3Qyx1QkFBdUIsMEJBQTBCO0FBQ2pELDRCQUE0QiwyQkFBMkI7QUFDdkQsbUJBQW1CLHNCQUFzQjtBQUN6Qyx3QkFBd0IsdUJBQXVCO0FBQy9DLGdCQUFnQixtQkFBbUI7QUFDbkMscUJBQXFCLG9CQUFvQjtBQUN6QyxzQkFBc0IseUJBQXlCO0FBQy9DLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyxnSUFBcUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEIiwiZmlsZSI6Im1haW4uOWQ0OTZjZDlkZjA1ODhmMDkxYjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBuX2FwcF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWFwcFwiKTtcclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcIi4uLy4uL3JvdXRlc1wiKTtcclxucmVxdWlyZShcIi4vbWFuYWdlLXN0dWRlbnRNYXJrRW50cnktdmlldy5zY3NzXCIpO1xyXG5jb25zdCBuX2plY3RfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1qZWN0XCIpO1xyXG5jb25zdCBuX2RlZmVuc2l2ZV8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWRlZmVuc2l2ZVwiKTtcclxubGV0IE1hbmFnZVN0dWRlbnRNYXJrVmlld01vZGVsID0gY2xhc3MgTWFuYWdlU3R1ZGVudE1hcmtWaWV3TW9kZWwgZXh0ZW5kcyBuX2FwcF8xLlBhZ2VWaWV3TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3Ioc3R1ZGVudFNlcnZpY2UsIG5hdmlnYXRpb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHN0dWRlbnRTZXJ2aWNlLCBcInN0dWRlbnRTZXJ2aWNlXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNPYmplY3QoKTtcclxuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZSA9IHN0dWRlbnRTZXJ2aWNlO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4obmF2aWdhdGlvblNlcnZpY2UsIFwibmF2aWdhdGlvblNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX25hdmlnYXRpb25TZXJ2aWNlID0gbmF2aWdhdGlvblNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudE1hcmtFbnRyeSA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2lkID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9zdHVkZW50TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fc3ViamVjdCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fbWFyayA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudF9pZCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBnZXQgc3R1ZGVudE1hcmtFbnRyeSgpIHsgcmV0dXJuIHRoaXMuX3N0dWRlbnRNYXJrRW50cnk7IH1cclxuICAgIGdldCBvcGVyYXRpb24oKSB7IHJldHVybiB0aGlzLl9vcGVyYXRpb247IH1cclxuICAgIGdldCBzdHVkZW50TmFtZSgpIHsgcmV0dXJuIHRoaXMuX3N0dWRlbnROYW1lOyB9XHJcbiAgICBzZXQgc3R1ZGVudE5hbWUodmFsdWUpIHsgdGhpcy5fc3R1ZGVudE5hbWUgPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IHN1YmplY3QoKSB7IHJldHVybiB0aGlzLl9zdWJqZWN0OyB9XHJcbiAgICBzZXQgc3ViamVjdCh2YWx1ZSkgeyB0aGlzLl9zdWJqZWN0ID0gdmFsdWU7IH1cclxuICAgIGdldCBtYXJrKCkgeyByZXR1cm4gdGhpcy5fbWFyazsgfVxyXG4gICAgc2V0IG1hcmsodmFsdWUpIHsgdGhpcy5fbWFyayA9IHZhbHVlOyB9XHJcbiAgICBnZXQgc3R1ZGVudF9pZCgpIHsgcmV0dXJuIHRoaXMuX3N0dWRlbnRfaWQ7IH1cclxuICAgIHNldCBzdHVkZW50X2lkKHZhbHVlKSB7IHRoaXMuX3N0dWRlbnRfaWQgPSB2YWx1ZTsgfVxyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBjb25zdCBzYXZlUHJvbWlzZSA9IHRoaXMuX2lkXHJcbiAgICAgICAgICAgID8gdGhpcy5fc3R1ZGVudFNlcnZpY2UudXBkYXRlU3R1ZGVudE1hcmtFbnRyeSh0aGlzLl9pZCwgdGhpcy5fc3R1ZGVudE5hbWUsIHRoaXMuX3N1YmplY3QsIHRoaXMuX21hcmssIHRoaXMuX3N0dWRlbnRfaWQpXHJcbiAgICAgICAgICAgIDogdGhpcy5fc3R1ZGVudFNlcnZpY2UuY3JlYXRlU3R1ZGVudE1hcmtFbnRyeSh0aGlzLl9zdHVkZW50TmFtZSwgdGhpcy5fc3ViamVjdCwgdGhpcy5fbWFyaywgdGhpcy5fc3R1ZGVudF9pZCk7XHJcbiAgICAgICAgc2F2ZVByb21pc2VcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGUoUm91dGVzLmxpc3RTdHVkZW50cywge30pKVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICB9XHJcbiAgICBvbkVudGVyKGlkKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UuZ2V0U3R1ZGVudE1hcmsoaWQpXHJcbiAgICAgICAgICAgIC50aGVuKHQgPT4gdGhpcy5fc3R1ZGVudE1hcmtFbnRyeSA9IHQpXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICBpZiAoaWQgJiYgIWlkLmlzRW1wdHlPcldoaXRlU3BhY2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSBcIlVwZGF0ZVwiO1xyXG4gICAgICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZS5nZXRTdHVkZW50TWFya0VudHJ5KGlkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IHQuaWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHVkZW50X2lkID0gdC5zdHVkZW50X2lkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFyayA9IHQubWFyaztcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0dWRlbnROYW1lID0gdC5zdHVkZW50TmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N1YmplY3QgPSB0LnN1YmplY3Q7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSBcIkFkZFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuTWFuYWdlU3R1ZGVudE1hcmtWaWV3TW9kZWwgPSBfX2RlY29yYXRlKFtcclxuICAgIG5fYXBwXzEudGVtcGxhdGUocmVxdWlyZShcIi4vbWFuYWdlLXN0dWRlbnRNYXJrRW50cnktdmlldy5odG1sXCIpKSxcclxuICAgIG5fYXBwXzEucm91dGUoUm91dGVzLm1hbmFnZVN0dWRlbnRNYXJrKSxcclxuICAgIG5famVjdF8xLmluamVjdChcIlN0dWRlbnRTZXJ2aWNlXCIsIFwiTmF2aWdhdGlvblNlcnZpY2VcIiksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW09iamVjdCwgT2JqZWN0XSlcclxuXSwgTWFuYWdlU3R1ZGVudE1hcmtWaWV3TW9kZWwpO1xyXG5leHBvcnRzLk1hbmFnZVN0dWRlbnRNYXJrVmlld01vZGVsID0gTWFuYWdlU3R1ZGVudE1hcmtWaWV3TW9kZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hbmFnZS1zdHVkZW50TWFya0VudHJ5LXZpZXctbW9kZWwuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==