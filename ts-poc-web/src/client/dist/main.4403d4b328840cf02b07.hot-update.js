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
        student_id: "id1";
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
            .then(() => this._navigationService.navigate(Routes.manageStudentMark, {
            student_id: "id1"
        }));
    }
    onEnter(student_id, id) {
        debugger;
        this._studentService.getStudentMark(student_id)
            .then(t => this._studentMarkEntry = t)
            .catch(e => console.log(e));
        this._studentService.getSubjects()
            .then(t => this._subjects = t)
            .catch(e => console.log(e));
        if (id && !id.isEmptyOrWhiteSpace()) {
            this._operation = "Update";
            this._studentService.getStudentMarkEntry(id)
                .then(t => {
                this._id = t.id;
                this._student_id = id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS9tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLGtEQUFjO0FBQ3JDLG1CQUFPLENBQUMsZ0lBQXFDO0FBQzdDLGlCQUFpQixtQkFBTyxDQUFDLDZFQUFxQjtBQUM5QyxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtCQUErQjtBQUMzRCxvQkFBb0IsdUJBQXVCO0FBQzNDLHFCQUFxQix3QkFBd0I7QUFDN0MsdUJBQXVCLDBCQUEwQjtBQUNqRCw0QkFBNEIsMkJBQTJCO0FBQ3ZELG1CQUFtQixzQkFBc0I7QUFDekMsd0JBQXdCLHVCQUF1QjtBQUMvQyxnQkFBZ0IsbUJBQW1CO0FBQ25DLHFCQUFxQixvQkFBb0I7QUFDekMsc0JBQXNCLHlCQUF5QjtBQUMvQywyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyxnSUFBcUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEIiwiZmlsZSI6Im1haW4uNDQwM2Q0YjMyODg0MGNmMDJiMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBuX2FwcF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWFwcFwiKTtcclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcIi4uLy4uL3JvdXRlc1wiKTtcclxucmVxdWlyZShcIi4vbWFuYWdlLXN0dWRlbnRNYXJrRW50cnktdmlldy5zY3NzXCIpO1xyXG5jb25zdCBuX2plY3RfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1qZWN0XCIpO1xyXG5jb25zdCBuX2RlZmVuc2l2ZV8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWRlZmVuc2l2ZVwiKTtcclxubGV0IE1hbmFnZVN0dWRlbnRNYXJrVmlld01vZGVsID0gY2xhc3MgTWFuYWdlU3R1ZGVudE1hcmtWaWV3TW9kZWwgZXh0ZW5kcyBuX2FwcF8xLlBhZ2VWaWV3TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3Ioc3R1ZGVudFNlcnZpY2UsIG5hdmlnYXRpb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHN0dWRlbnRTZXJ2aWNlLCBcInN0dWRlbnRTZXJ2aWNlXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNPYmplY3QoKTtcclxuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZSA9IHN0dWRlbnRTZXJ2aWNlO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4obmF2aWdhdGlvblNlcnZpY2UsIFwibmF2aWdhdGlvblNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX25hdmlnYXRpb25TZXJ2aWNlID0gbmF2aWdhdGlvblNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5fc3ViamVjdHMgPSBbXTtcclxuICAgICAgICB0aGlzLl9zdHVkZW50TWFya0VudHJ5ID0gW107XHJcbiAgICAgICAgdGhpcy5faWQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnROYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9zdWJqZWN0ID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9tYXJrID0gXCJcIjtcclxuICAgICAgICBzdHVkZW50X2lkOiBcImlkMVwiO1xyXG4gICAgfVxyXG4gICAgZ2V0IHN0dWRlbnRNYXJrRW50cnkoKSB7IHJldHVybiB0aGlzLl9zdHVkZW50TWFya0VudHJ5OyB9XHJcbiAgICBnZXQgc3ViamVjdHMoKSB7IHJldHVybiB0aGlzLl9zdWJqZWN0czsgfVxyXG4gICAgZ2V0IG9wZXJhdGlvbigpIHsgcmV0dXJuIHRoaXMuX29wZXJhdGlvbjsgfVxyXG4gICAgZ2V0IHN0dWRlbnROYW1lKCkgeyByZXR1cm4gdGhpcy5fc3R1ZGVudE5hbWU7IH1cclxuICAgIHNldCBzdHVkZW50TmFtZSh2YWx1ZSkgeyB0aGlzLl9zdHVkZW50TmFtZSA9IHZhbHVlOyB9XHJcbiAgICBnZXQgc3ViamVjdCgpIHsgcmV0dXJuIHRoaXMuX3N1YmplY3Q7IH1cclxuICAgIHNldCBzdWJqZWN0KHZhbHVlKSB7IHRoaXMuX3N1YmplY3QgPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IG1hcmsoKSB7IHJldHVybiB0aGlzLl9tYXJrOyB9XHJcbiAgICBzZXQgbWFyayh2YWx1ZSkgeyB0aGlzLl9tYXJrID0gdmFsdWU7IH1cclxuICAgIGdldCBzdHVkZW50X2lkKCkgeyByZXR1cm4gdGhpcy5fc3R1ZGVudF9pZDsgfVxyXG4gICAgc2V0IHN0dWRlbnRfaWQodmFsdWUpIHsgdGhpcy5fc3R1ZGVudF9pZCA9IHZhbHVlOyB9XHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGNvbnN0IHNhdmVQcm9taXNlID0gdGhpcy5faWRcclxuICAgICAgICAgICAgPyB0aGlzLl9zdHVkZW50U2VydmljZS51cGRhdGVTdHVkZW50TWFya0VudHJ5KHRoaXMuX2lkLCB0aGlzLl9zdHVkZW50TmFtZSwgdGhpcy5fc3ViamVjdCwgdGhpcy5fbWFyaywgdGhpcy5fc3R1ZGVudF9pZClcclxuICAgICAgICAgICAgOiB0aGlzLl9zdHVkZW50U2VydmljZS5jcmVhdGVTdHVkZW50TWFya0VudHJ5KHRoaXMuX3N0dWRlbnRfaWQsIHRoaXMuX3N0dWRlbnROYW1lLCB0aGlzLl9zdWJqZWN0LCB0aGlzLl9tYXJrKTtcclxuICAgICAgICBzYXZlUHJvbWlzZVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZShSb3V0ZXMubWFuYWdlU3R1ZGVudE1hcmssIHtcclxuICAgICAgICAgICAgc3R1ZGVudF9pZDogXCJpZDFcIlxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIG9uRW50ZXIoc3R1ZGVudF9pZCwgaWQpIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZS5nZXRTdHVkZW50TWFyayhzdHVkZW50X2lkKVxyXG4gICAgICAgICAgICAudGhlbih0ID0+IHRoaXMuX3N0dWRlbnRNYXJrRW50cnkgPSB0KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UuZ2V0U3ViamVjdHMoKVxyXG4gICAgICAgICAgICAudGhlbih0ID0+IHRoaXMuX3N1YmplY3RzID0gdClcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgIGlmIChpZCAmJiAhaWQuaXNFbXB0eU9yV2hpdGVTcGFjZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wZXJhdGlvbiA9IFwiVXBkYXRlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlLmdldFN0dWRlbnRNYXJrRW50cnkoaWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbih0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lkID0gdC5pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0dWRlbnRfaWQgPSBpZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21hcmsgPSB0Lm1hcms7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHVkZW50TmFtZSA9IHQuc3R1ZGVudE5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJqZWN0ID0gdC5zdWJqZWN0O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gXCJBZGRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbk1hbmFnZVN0dWRlbnRNYXJrVmlld01vZGVsID0gX19kZWNvcmF0ZShbXHJcbiAgICBuX2FwcF8xLnRlbXBsYXRlKHJlcXVpcmUoXCIuL21hbmFnZS1zdHVkZW50TWFya0VudHJ5LXZpZXcuaHRtbFwiKSksXHJcbiAgICBuX2FwcF8xLnJvdXRlKFJvdXRlcy5tYW5hZ2VTdHVkZW50TWFyayksXHJcbiAgICBuX2plY3RfMS5pbmplY3QoXCJTdHVkZW50U2VydmljZVwiLCBcIk5hdmlnYXRpb25TZXJ2aWNlXCIpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtPYmplY3QsIE9iamVjdF0pXHJcbl0sIE1hbmFnZVN0dWRlbnRNYXJrVmlld01vZGVsKTtcclxuZXhwb3J0cy5NYW5hZ2VTdHVkZW50TWFya1ZpZXdNb2RlbCA9IE1hbmFnZVN0dWRlbnRNYXJrVmlld01vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYW5hZ2Utc3R1ZGVudE1hcmtFbnRyeS12aWV3LW1vZGVsLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=