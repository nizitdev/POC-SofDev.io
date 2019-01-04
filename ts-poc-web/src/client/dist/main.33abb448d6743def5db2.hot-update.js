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
        this._classInCharge = 0;
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
        return this._divisions[this._classInCharge].id;
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

/***/ }),

/***/ "./src/client/services/school/teacher/local-teacher-service.js":
/*!*********************************************************************!*\
  !*** ./src/client/services/school/teacher/local-teacher-service.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const n_defensive_1 = __webpack_require__(/*! @nivinjoseph/n-defensive */ "./node_modules/@nivinjoseph/n-defensive/dist/index.js");
class LocalTeacherService {
    constructor() {
        const teacher = new Array();
        const count = 10;
        for (let i = 0; i < count; i++) {
            teacher.push({
                id: "id" + i,
                name: "teacher" + i,
                userName: "" + i,
                isAdmin: false,
                classInCharge: null,
                password: "12345678",
                isDeleted: false
            });
        }
        this._teacher = teacher;
        this._counter = count;
    }
    getTeachers() {
        return Promise.resolve(this._teacher);
    }
    getTeacher(id) {
        debugger;
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        return Promise.resolve(this._teacher.find(t => t.id === id));
    }
    createTeacher(name, isAdmin, password, userName, classInCharge) {
        debugger;
        n_defensive_1.given(name, "name").ensureHasValue().ensureIsString();
        n_defensive_1.given(isAdmin, "isAdmin").ensureIsBoolean();
        n_defensive_1.given(password, "password").ensureHasValue().ensureIsString();
        n_defensive_1.given(userName, "userName").ensureHasValue().ensureIsString();
        n_defensive_1.given(classInCharge, "classInCharge").ensureIsNumber();
        const teacher = {
            id: "id" + this._counter,
            name: name,
            isAdmin: isAdmin,
            password: password,
            userName: userName,
            isDeleted: false,
            classInCharge: classInCharge
        };
        this._teacher.push(teacher);
        return Promise.resolve(teacher);
    }
    updateTeacher(id, name, isAdmin, password, userName, classInCharge) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        n_defensive_1.given(name, "name").ensureHasValue().ensureIsString();
        n_defensive_1.given(isAdmin, "isAdmin").ensureIsBoolean();
        n_defensive_1.given(password, "password").ensureHasValue().ensureIsString();
        n_defensive_1.given(userName, "userName").ensureHasValue().ensureIsString();
        n_defensive_1.given(classInCharge, "classInCharge").ensureIsString();
        const teacher = this._teacher.find(t => t.id === id);
        teacher.name = name;
        teacher.isAdmin = isAdmin;
        teacher.password = password;
        teacher.userName = userName;
        teacher.classInCharge = classInCharge;
        return Promise.resolve();
    }
}
exports.LocalTeacherService = LocalTeacherService;
//# sourceMappingURL=local-teacher-service.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9tYW5hZ2UtdGVhY2hlci9tYW5hZ2UtdGVhY2hlci12aWV3LW1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvc2VydmljZXMvc2Nob29sL3RlYWNoZXIvbG9jYWwtdGVhY2hlci1zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLGtEQUFjO0FBQ3JDLG1CQUFPLENBQUMscUdBQTRCO0FBQ3BDLGlCQUFpQixtQkFBTyxDQUFDLDZFQUFxQjtBQUM5QyxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QyxxQkFBcUIsd0JBQXdCO0FBQzdDLGdCQUFnQixtQkFBbUI7QUFDbkMscUJBQXFCLG9CQUFvQjtBQUN6QyxtQkFBbUIsc0JBQXNCO0FBQ3pDLHdCQUF3Qix1QkFBdUI7QUFDL0Msb0JBQW9CLHVCQUF1QjtBQUMzQyx5QkFBeUIsd0JBQXdCO0FBQ2pELG9CQUFvQix1QkFBdUI7QUFDM0MseUJBQXlCLHdCQUF3QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw2QkFBNkI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyxxR0FBNEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEOzs7Ozs7Ozs7Ozs7QUN2RmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsV0FBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEIiwiZmlsZSI6Im1haW4uMzNhYmI0NDhkNjc0M2RlZjVkYjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBuX2FwcF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWFwcFwiKTtcclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcIi4uLy4uL3JvdXRlc1wiKTtcclxucmVxdWlyZShcIi4vbWFuYWdlLXRlYWNoZXItdmlldy5zY3NzXCIpO1xyXG5jb25zdCBuX2plY3RfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1qZWN0XCIpO1xyXG5jb25zdCBuX2RlZmVuc2l2ZV8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWRlZmVuc2l2ZVwiKTtcclxubGV0IE1hbmFnZVRlYWNoZXJWaWV3TW9kZWwgPSBjbGFzcyBNYW5hZ2VUZWFjaGVyVmlld01vZGVsIGV4dGVuZHMgbl9hcHBfMS5QYWdlVmlld01vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKHRlYWNoZXJTZXJ2aWNlLCBuYXZpZ2F0aW9uU2VydmljZSwgYWRtaW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGFkbWluU2VydmljZSwgXCJhZG1pblNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX2FkbWluU2VydmljZSA9IGFkbWluU2VydmljZTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHRlYWNoZXJTZXJ2aWNlLCBcInRlYWNoZXJTZXJ2aWNlXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNPYmplY3QoKTtcclxuICAgICAgICB0aGlzLl90ZWFjaGVyU2VydmljZSA9IHRlYWNoZXJTZXJ2aWNlO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4obmF2aWdhdGlvblNlcnZpY2UsIFwibmF2aWdhdGlvblNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX25hdmlnYXRpb25TZXJ2aWNlID0gbmF2aWdhdGlvblNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5fZGl2aXNpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9pZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5faXNBZG1pbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3Bhc3N3b3JkID0gXCJcIjtcclxuICAgICAgICB0aGlzLl91c2VyTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fY2xhc3NJbkNoYXJnZSA9IDA7XHJcbiAgICB9XHJcbiAgICBnZXQgZGl2aXNpb25zKCkgeyByZXR1cm4gdGhpcy5fZGl2aXNpb25zOyB9XHJcbiAgICBnZXQgb3BlcmF0aW9uKCkgeyByZXR1cm4gdGhpcy5fb3BlcmF0aW9uOyB9XHJcbiAgICBnZXQgbmFtZSgpIHsgcmV0dXJuIHRoaXMuX25hbWU7IH1cclxuICAgIHNldCBuYW1lKHZhbHVlKSB7IHRoaXMuX25hbWUgPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IGlzQWRtaW4oKSB7IHJldHVybiB0aGlzLl9pc0FkbWluOyB9XHJcbiAgICBzZXQgaXNBZG1pbih2YWx1ZSkgeyB0aGlzLl9pc0FkbWluID0gdmFsdWU7IH1cclxuICAgIGdldCB1c2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuX3VzZXJOYW1lOyB9XHJcbiAgICBzZXQgdXNlck5hbWUodmFsdWUpIHsgdGhpcy5fdXNlck5hbWUgPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IHBhc3N3b3JkKCkgeyByZXR1cm4gdGhpcy5fcGFzc3dvcmQ7IH1cclxuICAgIHNldCBwYXNzd29yZCh2YWx1ZSkgeyB0aGlzLl9wYXNzd29yZCA9IHZhbHVlOyB9XHJcbiAgICBnZXQgY2xhc3NJbkNoYXJnZSgpIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGl2aXNpb25zW3RoaXMuX2NsYXNzSW5DaGFyZ2VdLmlkO1xyXG4gICAgfVxyXG4gICAgc2V0IGNsYXNzSW5DaGFyZ2UodmFsdWUpIHsgdGhpcy5fY2xhc3NJbkNoYXJnZSA9IHZhbHVlOyB9XHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGNvbnN0IHNhdmVQcm9taXNlID0gdGhpcy5faWRcclxuICAgICAgICAgICAgPyB0aGlzLl90ZWFjaGVyU2VydmljZS51cGRhdGVUZWFjaGVyKHRoaXMuX2lkLCB0aGlzLl9uYW1lLCB0aGlzLl9pc0FkbWluLCB0aGlzLl9wYXNzd29yZCwgdGhpcy5fdXNlck5hbWUsIHRoaXMuX2NsYXNzSW5DaGFyZ2UpXHJcbiAgICAgICAgICAgIDogdGhpcy5fdGVhY2hlclNlcnZpY2UuY3JlYXRlVGVhY2hlcih0aGlzLl9uYW1lLCB0aGlzLl9pc0FkbWluLCB0aGlzLl9wYXNzd29yZCwgdGhpcy5fdXNlck5hbWUsIHRoaXMuX2NsYXNzSW5DaGFyZ2UpO1xyXG4gICAgICAgIHNhdmVQcm9taXNlXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuX25hdmlnYXRpb25TZXJ2aWNlLm5hdmlnYXRlKFJvdXRlcy5saXN0VGVhY2hlcnMsIHt9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgfVxyXG4gICAgb25FbnRlcihpZCkge1xyXG4gICAgICAgIHRoaXMuX2FkbWluU2VydmljZS5nZXREaXZpc2lvbnMoKVxyXG4gICAgICAgICAgICAudGhlbih0ID0+IHRoaXMuX2RpdmlzaW9ucyA9IHQpXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICBpZiAoaWQgJiYgIWlkLmlzRW1wdHlPcldoaXRlU3BhY2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSBcIlVwZGF0ZVwiO1xyXG4gICAgICAgICAgICB0aGlzLl90ZWFjaGVyU2VydmljZS5nZXRUZWFjaGVyKGlkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IHQuaWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0FkbWluID0gdC5pc0FkbWluO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHQubmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJOYW1lID0gdC51c2VyTmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Bhc3N3b3JkID0gdC5wYXNzd29yZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NsYXNzSW5DaGFyZ2UgPSB0LmNsYXNzSW5DaGFyZ2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSBcIkFkZFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuTWFuYWdlVGVhY2hlclZpZXdNb2RlbCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgbl9hcHBfMS50ZW1wbGF0ZShyZXF1aXJlKFwiLi9tYW5hZ2UtdGVhY2hlci12aWV3Lmh0bWxcIikpLFxyXG4gICAgbl9hcHBfMS5yb3V0ZShSb3V0ZXMubWFuYWdlVGVhY2hlciksXHJcbiAgICBuX2plY3RfMS5pbmplY3QoXCJUZWFjaGVyU2VydmljZVwiLCBcIk5hdmlnYXRpb25TZXJ2aWNlXCIsIFwiQWRtaW5TZXJ2aWNlXCIpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtPYmplY3QsIE9iamVjdCwgT2JqZWN0XSlcclxuXSwgTWFuYWdlVGVhY2hlclZpZXdNb2RlbCk7XHJcbmV4cG9ydHMuTWFuYWdlVGVhY2hlclZpZXdNb2RlbCA9IE1hbmFnZVRlYWNoZXJWaWV3TW9kZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hbmFnZS10ZWFjaGVyLXZpZXctbW9kZWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbl9kZWZlbnNpdmVfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1kZWZlbnNpdmVcIik7XHJcbmNsYXNzIExvY2FsVGVhY2hlclNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc3QgdGVhY2hlciA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gMTA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRlYWNoZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJpZFwiICsgaSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwidGVhY2hlclwiICsgaSxcclxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOiBcIlwiICsgaSxcclxuICAgICAgICAgICAgICAgIGlzQWRtaW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NJbkNoYXJnZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBcIjEyMzQ1Njc4XCIsXHJcbiAgICAgICAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl90ZWFjaGVyID0gdGVhY2hlcjtcclxuICAgICAgICB0aGlzLl9jb3VudGVyID0gY291bnQ7XHJcbiAgICB9XHJcbiAgICBnZXRUZWFjaGVycygpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3RlYWNoZXIpO1xyXG4gICAgfVxyXG4gICAgZ2V0VGVhY2hlcihpZCkge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oaWQsIFwiaWRcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fdGVhY2hlci5maW5kKHQgPT4gdC5pZCA9PT0gaWQpKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVRlYWNoZXIobmFtZSwgaXNBZG1pbiwgcGFzc3dvcmQsIHVzZXJOYW1lLCBjbGFzc0luQ2hhcmdlKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihuYW1lLCBcIm5hbWVcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oaXNBZG1pbiwgXCJpc0FkbWluXCIpLmVuc3VyZUlzQm9vbGVhbigpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4ocGFzc3dvcmQsIFwicGFzc3dvcmRcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4odXNlck5hbWUsIFwidXNlck5hbWVcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oY2xhc3NJbkNoYXJnZSwgXCJjbGFzc0luQ2hhcmdlXCIpLmVuc3VyZUlzTnVtYmVyKCk7XHJcbiAgICAgICAgY29uc3QgdGVhY2hlciA9IHtcclxuICAgICAgICAgICAgaWQ6IFwiaWRcIiArIHRoaXMuX2NvdW50ZXIsXHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIGlzQWRtaW46IGlzQWRtaW4sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICAgICAgdXNlck5hbWU6IHVzZXJOYW1lLFxyXG4gICAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBjbGFzc0luQ2hhcmdlOiBjbGFzc0luQ2hhcmdlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl90ZWFjaGVyLnB1c2godGVhY2hlcik7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0ZWFjaGVyKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVRlYWNoZXIoaWQsIG5hbWUsIGlzQWRtaW4sIHBhc3N3b3JkLCB1c2VyTmFtZSwgY2xhc3NJbkNoYXJnZSkge1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oaWQsIFwiaWRcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4obmFtZSwgXCJuYW1lXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGlzQWRtaW4sIFwiaXNBZG1pblwiKS5lbnN1cmVJc0Jvb2xlYW4oKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHBhc3N3b3JkLCBcInBhc3N3b3JkXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHVzZXJOYW1lLCBcInVzZXJOYW1lXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGNsYXNzSW5DaGFyZ2UsIFwiY2xhc3NJbkNoYXJnZVwiKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHRlYWNoZXIgPSB0aGlzLl90ZWFjaGVyLmZpbmQodCA9PiB0LmlkID09PSBpZCk7XHJcbiAgICAgICAgdGVhY2hlci5uYW1lID0gbmFtZTtcclxuICAgICAgICB0ZWFjaGVyLmlzQWRtaW4gPSBpc0FkbWluO1xyXG4gICAgICAgIHRlYWNoZXIucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuICAgICAgICB0ZWFjaGVyLnVzZXJOYW1lID0gdXNlck5hbWU7XHJcbiAgICAgICAgdGVhY2hlci5jbGFzc0luQ2hhcmdlID0gY2xhc3NJbkNoYXJnZTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Mb2NhbFRlYWNoZXJTZXJ2aWNlID0gTG9jYWxUZWFjaGVyU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9jYWwtdGVhY2hlci1zZXJ2aWNlLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=