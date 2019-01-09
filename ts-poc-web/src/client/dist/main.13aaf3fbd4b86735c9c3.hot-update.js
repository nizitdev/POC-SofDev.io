webpackHotUpdate("main",{

/***/ "./src/client/pages/school/manage-student/manage-student-view-model.js":
/*!*****************************************************************************!*\
  !*** ./src/client/pages/school/manage-student/manage-student-view-model.js ***!
  \*****************************************************************************/
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
__webpack_require__(/*! ./manage-student-view.scss */ "./src/client/pages/school/manage-student/manage-student-view.scss");
const n_ject_1 = __webpack_require__(/*! @nivinjoseph/n-ject */ "./node_modules/@nivinjoseph/n-ject/dist/index.js");
const n_defensive_1 = __webpack_require__(/*! @nivinjoseph/n-defensive */ "./node_modules/@nivinjoseph/n-defensive/dist/index.js");
let ManageStudentViewModel = class ManageStudentViewModel extends n_app_1.PageViewModel {
    constructor(studentService, navigationService, adminService) {
        super();
        n_defensive_1.given(adminService, "adminService").ensureHasValue().ensureIsObject();
        this._adminService = adminService;
        n_defensive_1.given(studentService, "studentService").ensureHasValue().ensureIsObject();
        this._studentService = studentService;
        n_defensive_1.given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;
        this._divisions = [];
        this._operation = "";
        this._id = null;
        this._name = "";
        this._sex = " ";
        this._division = "";
    }
    get studentMarkEntry() { return this._studentMarkEntry; }
    get divisions() { return this._divisions; }
    get operation() { return this._operation; }
    get name() { return this._name; }
    set name(value) { this._name = value; }
    get sex() { return this._sex; }
    set sex(value) { this._sex = value; }
    get division() { return this._division; }
    set division(value) { this._division = value; }
    save() {
        debugger;
        const savePromise = this._id
            ? this._studentService.updateStudent(this._id, this._name, this._sex, this._division)
            : this._studentService.createStudent(this._name, this._sex, this._division);
        savePromise
            .then(() => this._navigationService.navigate(Routes.listStudents, {}))
            .catch(e => console.log(e));
    }
    onEnter(id) {
        this._adminService.getDivisions()
            .then(t => this._divisions = t)
            .catch(e => console.log(e));
        if (id && !id.isEmptyOrWhiteSpace()) {
            this._operation = "Update";
            this._studentService.getStudent(id)
                .then(t => {
                this._id = t.id;
                this._name = t.name;
                this._sex = t.sex;
                this._division = t.division;
            })
                .catch(e => console.log(e));
        }
        else {
            this._operation = "Add";
        }
    }
};
ManageStudentViewModel = __decorate([
    n_app_1.template(__webpack_require__(/*! ./manage-student-view.html */ "./src/client/pages/school/manage-student/manage-student-view.html")),
    n_app_1.route(Routes.manageStudent),
    n_ject_1.inject("StudentService", "NavigationService", "AdminService"),
    __metadata("design:paramtypes", [Object, Object, Object])
], ManageStudentViewModel);
exports.ManageStudentViewModel = ManageStudentViewModel;
//# sourceMappingURL=manage-student-view-model.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9tYW5hZ2Utc3R1ZGVudC9tYW5hZ2Utc3R1ZGVudC12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLGtEQUFjO0FBQ3JDLG1CQUFPLENBQUMscUdBQTRCO0FBQ3BDLGlCQUFpQixtQkFBTyxDQUFDLDZFQUFxQjtBQUM5QyxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0JBQStCO0FBQzNELHFCQUFxQix3QkFBd0I7QUFDN0MscUJBQXFCLHdCQUF3QjtBQUM3QyxnQkFBZ0IsbUJBQW1CO0FBQ25DLHFCQUFxQixvQkFBb0I7QUFDekMsZUFBZSxrQkFBa0I7QUFDakMsb0JBQW9CLG1CQUFtQjtBQUN2QyxvQkFBb0IsdUJBQXVCO0FBQzNDLHlCQUF5Qix3QkFBd0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQkFBTyxDQUFDLHFHQUE0QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUQiLCJmaWxlIjoibWFpbi4xM2FhZjNmYmQ0Yjg2NzM1YzljMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5fYXBwXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tYXBwXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vcm91dGVzXCIpO1xyXG5yZXF1aXJlKFwiLi9tYW5hZ2Utc3R1ZGVudC12aWV3LnNjc3NcIik7XHJcbmNvbnN0IG5famVjdF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWplY3RcIik7XHJcbmNvbnN0IG5fZGVmZW5zaXZlXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tZGVmZW5zaXZlXCIpO1xyXG5sZXQgTWFuYWdlU3R1ZGVudFZpZXdNb2RlbCA9IGNsYXNzIE1hbmFnZVN0dWRlbnRWaWV3TW9kZWwgZXh0ZW5kcyBuX2FwcF8xLlBhZ2VWaWV3TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3Ioc3R1ZGVudFNlcnZpY2UsIG5hdmlnYXRpb25TZXJ2aWNlLCBhZG1pblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oYWRtaW5TZXJ2aWNlLCBcImFkbWluU2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fYWRtaW5TZXJ2aWNlID0gYWRtaW5TZXJ2aWNlO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oc3R1ZGVudFNlcnZpY2UsIFwic3R1ZGVudFNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlID0gc3R1ZGVudFNlcnZpY2U7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihuYXZpZ2F0aW9uU2VydmljZSwgXCJuYXZpZ2F0aW9uU2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UgPSBuYXZpZ2F0aW9uU2VydmljZTtcclxuICAgICAgICB0aGlzLl9kaXZpc2lvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2lkID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9uYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9zZXggPSBcIiBcIjtcclxuICAgICAgICB0aGlzLl9kaXZpc2lvbiA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBnZXQgc3R1ZGVudE1hcmtFbnRyeSgpIHsgcmV0dXJuIHRoaXMuX3N0dWRlbnRNYXJrRW50cnk7IH1cclxuICAgIGdldCBkaXZpc2lvbnMoKSB7IHJldHVybiB0aGlzLl9kaXZpc2lvbnM7IH1cclxuICAgIGdldCBvcGVyYXRpb24oKSB7IHJldHVybiB0aGlzLl9vcGVyYXRpb247IH1cclxuICAgIGdldCBuYW1lKCkgeyByZXR1cm4gdGhpcy5fbmFtZTsgfVxyXG4gICAgc2V0IG5hbWUodmFsdWUpIHsgdGhpcy5fbmFtZSA9IHZhbHVlOyB9XHJcbiAgICBnZXQgc2V4KCkgeyByZXR1cm4gdGhpcy5fc2V4OyB9XHJcbiAgICBzZXQgc2V4KHZhbHVlKSB7IHRoaXMuX3NleCA9IHZhbHVlOyB9XHJcbiAgICBnZXQgZGl2aXNpb24oKSB7IHJldHVybiB0aGlzLl9kaXZpc2lvbjsgfVxyXG4gICAgc2V0IGRpdmlzaW9uKHZhbHVlKSB7IHRoaXMuX2RpdmlzaW9uID0gdmFsdWU7IH1cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgY29uc3Qgc2F2ZVByb21pc2UgPSB0aGlzLl9pZFxyXG4gICAgICAgICAgICA/IHRoaXMuX3N0dWRlbnRTZXJ2aWNlLnVwZGF0ZVN0dWRlbnQodGhpcy5faWQsIHRoaXMuX25hbWUsIHRoaXMuX3NleCwgdGhpcy5fZGl2aXNpb24pXHJcbiAgICAgICAgICAgIDogdGhpcy5fc3R1ZGVudFNlcnZpY2UuY3JlYXRlU3R1ZGVudCh0aGlzLl9uYW1lLCB0aGlzLl9zZXgsIHRoaXMuX2RpdmlzaW9uKTtcclxuICAgICAgICBzYXZlUHJvbWlzZVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZShSb3V0ZXMubGlzdFN0dWRlbnRzLCB7fSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgIH1cclxuICAgIG9uRW50ZXIoaWQpIHtcclxuICAgICAgICB0aGlzLl9hZG1pblNlcnZpY2UuZ2V0RGl2aXNpb25zKClcclxuICAgICAgICAgICAgLnRoZW4odCA9PiB0aGlzLl9kaXZpc2lvbnMgPSB0KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgaWYgKGlkICYmICFpZC5pc0VtcHR5T3JXaGl0ZVNwYWNlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gXCJVcGRhdGVcIjtcclxuICAgICAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UuZ2V0U3R1ZGVudChpZClcclxuICAgICAgICAgICAgICAgIC50aGVuKHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faWQgPSB0LmlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHQubmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NleCA9IHQuc2V4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGl2aXNpb24gPSB0LmRpdmlzaW9uO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gXCJBZGRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbk1hbmFnZVN0dWRlbnRWaWV3TW9kZWwgPSBfX2RlY29yYXRlKFtcclxuICAgIG5fYXBwXzEudGVtcGxhdGUocmVxdWlyZShcIi4vbWFuYWdlLXN0dWRlbnQtdmlldy5odG1sXCIpKSxcclxuICAgIG5fYXBwXzEucm91dGUoUm91dGVzLm1hbmFnZVN0dWRlbnQpLFxyXG4gICAgbl9qZWN0XzEuaW5qZWN0KFwiU3R1ZGVudFNlcnZpY2VcIiwgXCJOYXZpZ2F0aW9uU2VydmljZVwiLCBcIkFkbWluU2VydmljZVwiKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbT2JqZWN0LCBPYmplY3QsIE9iamVjdF0pXHJcbl0sIE1hbmFnZVN0dWRlbnRWaWV3TW9kZWwpO1xyXG5leHBvcnRzLk1hbmFnZVN0dWRlbnRWaWV3TW9kZWwgPSBNYW5hZ2VTdHVkZW50Vmlld01vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYW5hZ2Utc3R1ZGVudC12aWV3LW1vZGVsLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=