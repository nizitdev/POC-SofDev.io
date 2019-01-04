webpackHotUpdate("main",{

/***/ "./src/client/pages/school/manage-teacher/manage-teacher-view-model.js":
/*!*****************************************************************************!*\
  !*** ./src/client/pages/school/manage-teacher/manage-teacher-view-model.js ***!
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
__webpack_require__(/*! ./manage-teacher-view.scss */ "./src/client/pages/school/manage-teacher/manage-teacher-view.scss");
const n_ject_1 = __webpack_require__(/*! @nivinjoseph/n-ject */ "./node_modules/@nivinjoseph/n-ject/dist/index.js");
const n_defensive_1 = __webpack_require__(/*! @nivinjoseph/n-defensive */ "./node_modules/@nivinjoseph/n-defensive/dist/index.js");
let ManageTeacherViewModel = class ManageTeacherViewModel extends n_app_1.PageViewModel {
    constructor(teacherService, navigationService, adminService) {
        super();
        n_defensive_1.given(adminService, "adminService").ensureHasValue().ensureIsObject();
        this._adminService = adminService;
        n_defensive_1.given(teacherService, "teacherService").ensureHasValue().ensureIsObject();
        this._teacherService = teacherService;
        n_defensive_1.given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;
        this._divisions = [];
        this._operation = "";
        this._id = null;
        this._name = "";
        this._isAdmin = false;
        this._password = "";
        this._userName = "";
        this._classInCharge = "";
    }
    get divisions() { return this._divisions; }
    get operation() { return this._operation; }
    get name() { return this._name; }
    set name(value) { this._name = value; }
    get isAdmin() { return this._isAdmin; }
    set isAdmin(value) { this._isAdmin = value; }
    get userName() { return this._userName; }
    set userName(value) { this._userName = value; }
    get password() { return this._password; }
    set password(value) { this._password = value; }
    get classInCharge() {
        debugger;
        let dspText = document.getElementById("selectClassInCharge").value;
        return dspText;
    }
    set classInCharge(value) { this._classInCharge = value; }
    save() {
        debugger;
        const savePromise = this._id
            ? this._teacherService.updateTeacher(this._id, this._name, this._isAdmin, this._password, this._userName, this._classInCharge)
            : this._teacherService.createTeacher(this._name, this._isAdmin, this._password, this._userName, this._classInCharge);
        savePromise
            .then(() => this._navigationService.navigate(Routes.listTeachers, {}))
            .catch(e => console.log(e));
    }
    onEnter(id) {
        this._adminService.getDivisions()
            .then(t => this._divisions = t)
            .catch(e => console.log(e));
        if (id && !id.isEmptyOrWhiteSpace()) {
            this._operation = "Update";
            this._teacherService.getTeacher(id)
                .then(t => {
                this._id = t.id;
                this._isAdmin = t.isAdmin;
                this._name = t.name;
                this._userName = t.userName;
                this._password = t.password;
                this._classInCharge = t.classInCharge;
            })
                .catch(e => console.log(e));
        }
        else {
            this._operation = "Add";
        }
    }
};
ManageTeacherViewModel = __decorate([
    n_app_1.template(__webpack_require__(/*! ./manage-teacher-view.html */ "./src/client/pages/school/manage-teacher/manage-teacher-view.html")),
    n_app_1.route(Routes.manageTeacher),
    n_ject_1.inject("TeacherService", "NavigationService", "AdminService"),
    __metadata("design:paramtypes", [Object, Object, Object])
], ManageTeacherViewModel);
exports.ManageTeacherViewModel = ManageTeacherViewModel;
//# sourceMappingURL=manage-teacher-view-model.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9tYW5hZ2UtdGVhY2hlci9tYW5hZ2UtdGVhY2hlci12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLGtEQUFjO0FBQ3JDLG1CQUFPLENBQUMscUdBQTRCO0FBQ3BDLGlCQUFpQixtQkFBTyxDQUFDLDZFQUFxQjtBQUM5QyxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QyxxQkFBcUIsd0JBQXdCO0FBQzdDLGdCQUFnQixtQkFBbUI7QUFDbkMscUJBQXFCLG9CQUFvQjtBQUN6QyxtQkFBbUIsc0JBQXNCO0FBQ3pDLHdCQUF3Qix1QkFBdUI7QUFDL0Msb0JBQW9CLHVCQUF1QjtBQUMzQyx5QkFBeUIsd0JBQXdCO0FBQ2pELG9CQUFvQix1QkFBdUI7QUFDM0MseUJBQXlCLHdCQUF3QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDZCQUE2QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQkFBTyxDQUFDLHFHQUE0QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUQiLCJmaWxlIjoibWFpbi42YzM2YTJjZmMwMmMwZTQxNjQ1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5fYXBwXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tYXBwXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vcm91dGVzXCIpO1xyXG5yZXF1aXJlKFwiLi9tYW5hZ2UtdGVhY2hlci12aWV3LnNjc3NcIik7XHJcbmNvbnN0IG5famVjdF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWplY3RcIik7XHJcbmNvbnN0IG5fZGVmZW5zaXZlXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tZGVmZW5zaXZlXCIpO1xyXG5sZXQgTWFuYWdlVGVhY2hlclZpZXdNb2RlbCA9IGNsYXNzIE1hbmFnZVRlYWNoZXJWaWV3TW9kZWwgZXh0ZW5kcyBuX2FwcF8xLlBhZ2VWaWV3TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IodGVhY2hlclNlcnZpY2UsIG5hdmlnYXRpb25TZXJ2aWNlLCBhZG1pblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oYWRtaW5TZXJ2aWNlLCBcImFkbWluU2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fYWRtaW5TZXJ2aWNlID0gYWRtaW5TZXJ2aWNlO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4odGVhY2hlclNlcnZpY2UsIFwidGVhY2hlclNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX3RlYWNoZXJTZXJ2aWNlID0gdGVhY2hlclNlcnZpY2U7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihuYXZpZ2F0aW9uU2VydmljZSwgXCJuYXZpZ2F0aW9uU2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UgPSBuYXZpZ2F0aW9uU2VydmljZTtcclxuICAgICAgICB0aGlzLl9kaXZpc2lvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2lkID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9uYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9pc0FkbWluID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcGFzc3dvcmQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX3VzZXJOYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9jbGFzc0luQ2hhcmdlID0gXCJcIjtcclxuICAgIH1cclxuICAgIGdldCBkaXZpc2lvbnMoKSB7IHJldHVybiB0aGlzLl9kaXZpc2lvbnM7IH1cclxuICAgIGdldCBvcGVyYXRpb24oKSB7IHJldHVybiB0aGlzLl9vcGVyYXRpb247IH1cclxuICAgIGdldCBuYW1lKCkgeyByZXR1cm4gdGhpcy5fbmFtZTsgfVxyXG4gICAgc2V0IG5hbWUodmFsdWUpIHsgdGhpcy5fbmFtZSA9IHZhbHVlOyB9XHJcbiAgICBnZXQgaXNBZG1pbigpIHsgcmV0dXJuIHRoaXMuX2lzQWRtaW47IH1cclxuICAgIHNldCBpc0FkbWluKHZhbHVlKSB7IHRoaXMuX2lzQWRtaW4gPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IHVzZXJOYW1lKCkgeyByZXR1cm4gdGhpcy5fdXNlck5hbWU7IH1cclxuICAgIHNldCB1c2VyTmFtZSh2YWx1ZSkgeyB0aGlzLl91c2VyTmFtZSA9IHZhbHVlOyB9XHJcbiAgICBnZXQgcGFzc3dvcmQoKSB7IHJldHVybiB0aGlzLl9wYXNzd29yZDsgfVxyXG4gICAgc2V0IHBhc3N3b3JkKHZhbHVlKSB7IHRoaXMuX3Bhc3N3b3JkID0gdmFsdWU7IH1cclxuICAgIGdldCBjbGFzc0luQ2hhcmdlKCkge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGxldCBkc3BUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RDbGFzc0luQ2hhcmdlXCIpLnZhbHVlO1xyXG4gICAgICAgIHJldHVybiBkc3BUZXh0O1xyXG4gICAgfVxyXG4gICAgc2V0IGNsYXNzSW5DaGFyZ2UodmFsdWUpIHsgdGhpcy5fY2xhc3NJbkNoYXJnZSA9IHZhbHVlOyB9XHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGNvbnN0IHNhdmVQcm9taXNlID0gdGhpcy5faWRcclxuICAgICAgICAgICAgPyB0aGlzLl90ZWFjaGVyU2VydmljZS51cGRhdGVUZWFjaGVyKHRoaXMuX2lkLCB0aGlzLl9uYW1lLCB0aGlzLl9pc0FkbWluLCB0aGlzLl9wYXNzd29yZCwgdGhpcy5fdXNlck5hbWUsIHRoaXMuX2NsYXNzSW5DaGFyZ2UpXHJcbiAgICAgICAgICAgIDogdGhpcy5fdGVhY2hlclNlcnZpY2UuY3JlYXRlVGVhY2hlcih0aGlzLl9uYW1lLCB0aGlzLl9pc0FkbWluLCB0aGlzLl9wYXNzd29yZCwgdGhpcy5fdXNlck5hbWUsIHRoaXMuX2NsYXNzSW5DaGFyZ2UpO1xyXG4gICAgICAgIHNhdmVQcm9taXNlXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuX25hdmlnYXRpb25TZXJ2aWNlLm5hdmlnYXRlKFJvdXRlcy5saXN0VGVhY2hlcnMsIHt9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgfVxyXG4gICAgb25FbnRlcihpZCkge1xyXG4gICAgICAgIHRoaXMuX2FkbWluU2VydmljZS5nZXREaXZpc2lvbnMoKVxyXG4gICAgICAgICAgICAudGhlbih0ID0+IHRoaXMuX2RpdmlzaW9ucyA9IHQpXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICBpZiAoaWQgJiYgIWlkLmlzRW1wdHlPcldoaXRlU3BhY2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSBcIlVwZGF0ZVwiO1xyXG4gICAgICAgICAgICB0aGlzLl90ZWFjaGVyU2VydmljZS5nZXRUZWFjaGVyKGlkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IHQuaWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0FkbWluID0gdC5pc0FkbWluO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHQubmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJOYW1lID0gdC51c2VyTmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Bhc3N3b3JkID0gdC5wYXNzd29yZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NsYXNzSW5DaGFyZ2UgPSB0LmNsYXNzSW5DaGFyZ2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSBcIkFkZFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuTWFuYWdlVGVhY2hlclZpZXdNb2RlbCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgbl9hcHBfMS50ZW1wbGF0ZShyZXF1aXJlKFwiLi9tYW5hZ2UtdGVhY2hlci12aWV3Lmh0bWxcIikpLFxyXG4gICAgbl9hcHBfMS5yb3V0ZShSb3V0ZXMubWFuYWdlVGVhY2hlciksXHJcbiAgICBuX2plY3RfMS5pbmplY3QoXCJUZWFjaGVyU2VydmljZVwiLCBcIk5hdmlnYXRpb25TZXJ2aWNlXCIsIFwiQWRtaW5TZXJ2aWNlXCIpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtPYmplY3QsIE9iamVjdCwgT2JqZWN0XSlcclxuXSwgTWFuYWdlVGVhY2hlclZpZXdNb2RlbCk7XHJcbmV4cG9ydHMuTWFuYWdlVGVhY2hlclZpZXdNb2RlbCA9IE1hbmFnZVRlYWNoZXJWaWV3TW9kZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hbmFnZS10ZWFjaGVyLXZpZXctbW9kZWwuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==