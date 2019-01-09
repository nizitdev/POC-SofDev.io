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
        this._qualifications = [];
        this._operation = "";
        this._id = null;
        this._name = "";
        this._isAdmin = false;
        this._password = "";
        this._userName = "";
        this._classInCharge = "";
        this.qualification = [];
    }
    get divisions() { return this._divisions; }
    get qualifications() { return this._qualifications; }
    get operation() { return this._operation; }
    get name() { return this._name; }
    set name(value) { this._name = value; }
    get isAdmin() { return this._isAdmin; }
    set isAdmin(value) { this._isAdmin = value; }
    get userName() { return this._userName; }
    set userName(value) { this._userName = value; }
    get password() { return this._password; }
    set password(value) { this._password = value; }
    get classInCharge() { return this._classInCharge; }
    set classInCharge(value) { this._classInCharge = value; }
    get qualification() { return this._qualification; }
    set qualification(value) { this._qualification = value; }
    save() {
        debugger;
        const savePromise = this._id
            ? this._teacherService.updateTeacher(this._id, this._name, this._isAdmin, this._password, this._userName, this._classInCharge, this._qualification)
            : this._teacherService.createTeacher(this._name, this._isAdmin, this._password, this._userName, this._classInCharge, this._qualification);
        savePromise
            .then(() => this._navigationService.navigate(Routes.listTeachers, {}))
            .catch(e => console.log(e));
    }
    onEnter(id) {
        this._adminService.getDivisions()
            .then(t => this._divisions = t)
            .catch(e => console.log(e));
        this._teacherService.getQualification()
            .then(t => this._qualifications = t)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9tYW5hZ2UtdGVhY2hlci9tYW5hZ2UtdGVhY2hlci12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLGtEQUFjO0FBQ3JDLG1CQUFPLENBQUMscUdBQTRCO0FBQ3BDLGlCQUFpQixtQkFBTyxDQUFDLDZFQUFxQjtBQUM5QyxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3QkFBd0I7QUFDN0MsMEJBQTBCLDZCQUE2QjtBQUN2RCxxQkFBcUIsd0JBQXdCO0FBQzdDLGdCQUFnQixtQkFBbUI7QUFDbkMscUJBQXFCLG9CQUFvQjtBQUN6QyxtQkFBbUIsc0JBQXNCO0FBQ3pDLHdCQUF3Qix1QkFBdUI7QUFDL0Msb0JBQW9CLHVCQUF1QjtBQUMzQyx5QkFBeUIsd0JBQXdCO0FBQ2pELG9CQUFvQix1QkFBdUI7QUFDM0MseUJBQXlCLHdCQUF3QjtBQUNqRCx5QkFBeUIsNEJBQTRCO0FBQ3JELDhCQUE4Qiw2QkFBNkI7QUFDM0QseUJBQXlCLDRCQUE0QjtBQUNyRCw4QkFBOEIsNkJBQTZCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMscUdBQTRCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRCIsImZpbGUiOiJtYWluLmI2MmJlYWE1YTgyZGQ2MjFhZDRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbl9hcHBfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1hcHBcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi9yb3V0ZXNcIik7XHJcbnJlcXVpcmUoXCIuL21hbmFnZS10ZWFjaGVyLXZpZXcuc2Nzc1wiKTtcclxuY29uc3Qgbl9qZWN0XzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tamVjdFwiKTtcclxuY29uc3Qgbl9kZWZlbnNpdmVfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1kZWZlbnNpdmVcIik7XHJcbmxldCBNYW5hZ2VUZWFjaGVyVmlld01vZGVsID0gY2xhc3MgTWFuYWdlVGVhY2hlclZpZXdNb2RlbCBleHRlbmRzIG5fYXBwXzEuUGFnZVZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZWFjaGVyU2VydmljZSwgbmF2aWdhdGlvblNlcnZpY2UsIGFkbWluU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihhZG1pblNlcnZpY2UsIFwiYWRtaW5TZXJ2aWNlXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNPYmplY3QoKTtcclxuICAgICAgICB0aGlzLl9hZG1pblNlcnZpY2UgPSBhZG1pblNlcnZpY2U7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbih0ZWFjaGVyU2VydmljZSwgXCJ0ZWFjaGVyU2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fdGVhY2hlclNlcnZpY2UgPSB0ZWFjaGVyU2VydmljZTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKG5hdmlnYXRpb25TZXJ2aWNlLCBcIm5hdmlnYXRpb25TZXJ2aWNlXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNPYmplY3QoKTtcclxuICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZSA9IG5hdmlnYXRpb25TZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuX2RpdmlzaW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3F1YWxpZmljYXRpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9pZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5faXNBZG1pbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3Bhc3N3b3JkID0gXCJcIjtcclxuICAgICAgICB0aGlzLl91c2VyTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fY2xhc3NJbkNoYXJnZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5xdWFsaWZpY2F0aW9uID0gW107XHJcbiAgICB9XHJcbiAgICBnZXQgZGl2aXNpb25zKCkgeyByZXR1cm4gdGhpcy5fZGl2aXNpb25zOyB9XHJcbiAgICBnZXQgcXVhbGlmaWNhdGlvbnMoKSB7IHJldHVybiB0aGlzLl9xdWFsaWZpY2F0aW9uczsgfVxyXG4gICAgZ2V0IG9wZXJhdGlvbigpIHsgcmV0dXJuIHRoaXMuX29wZXJhdGlvbjsgfVxyXG4gICAgZ2V0IG5hbWUoKSB7IHJldHVybiB0aGlzLl9uYW1lOyB9XHJcbiAgICBzZXQgbmFtZSh2YWx1ZSkgeyB0aGlzLl9uYW1lID0gdmFsdWU7IH1cclxuICAgIGdldCBpc0FkbWluKCkgeyByZXR1cm4gdGhpcy5faXNBZG1pbjsgfVxyXG4gICAgc2V0IGlzQWRtaW4odmFsdWUpIHsgdGhpcy5faXNBZG1pbiA9IHZhbHVlOyB9XHJcbiAgICBnZXQgdXNlck5hbWUoKSB7IHJldHVybiB0aGlzLl91c2VyTmFtZTsgfVxyXG4gICAgc2V0IHVzZXJOYW1lKHZhbHVlKSB7IHRoaXMuX3VzZXJOYW1lID0gdmFsdWU7IH1cclxuICAgIGdldCBwYXNzd29yZCgpIHsgcmV0dXJuIHRoaXMuX3Bhc3N3b3JkOyB9XHJcbiAgICBzZXQgcGFzc3dvcmQodmFsdWUpIHsgdGhpcy5fcGFzc3dvcmQgPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IGNsYXNzSW5DaGFyZ2UoKSB7IHJldHVybiB0aGlzLl9jbGFzc0luQ2hhcmdlOyB9XHJcbiAgICBzZXQgY2xhc3NJbkNoYXJnZSh2YWx1ZSkgeyB0aGlzLl9jbGFzc0luQ2hhcmdlID0gdmFsdWU7IH1cclxuICAgIGdldCBxdWFsaWZpY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5fcXVhbGlmaWNhdGlvbjsgfVxyXG4gICAgc2V0IHF1YWxpZmljYXRpb24odmFsdWUpIHsgdGhpcy5fcXVhbGlmaWNhdGlvbiA9IHZhbHVlOyB9XHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGNvbnN0IHNhdmVQcm9taXNlID0gdGhpcy5faWRcclxuICAgICAgICAgICAgPyB0aGlzLl90ZWFjaGVyU2VydmljZS51cGRhdGVUZWFjaGVyKHRoaXMuX2lkLCB0aGlzLl9uYW1lLCB0aGlzLl9pc0FkbWluLCB0aGlzLl9wYXNzd29yZCwgdGhpcy5fdXNlck5hbWUsIHRoaXMuX2NsYXNzSW5DaGFyZ2UsIHRoaXMuX3F1YWxpZmljYXRpb24pXHJcbiAgICAgICAgICAgIDogdGhpcy5fdGVhY2hlclNlcnZpY2UuY3JlYXRlVGVhY2hlcih0aGlzLl9uYW1lLCB0aGlzLl9pc0FkbWluLCB0aGlzLl9wYXNzd29yZCwgdGhpcy5fdXNlck5hbWUsIHRoaXMuX2NsYXNzSW5DaGFyZ2UsIHRoaXMuX3F1YWxpZmljYXRpb24pO1xyXG4gICAgICAgIHNhdmVQcm9taXNlXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuX25hdmlnYXRpb25TZXJ2aWNlLm5hdmlnYXRlKFJvdXRlcy5saXN0VGVhY2hlcnMsIHt9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgfVxyXG4gICAgb25FbnRlcihpZCkge1xyXG4gICAgICAgIHRoaXMuX2FkbWluU2VydmljZS5nZXREaXZpc2lvbnMoKVxyXG4gICAgICAgICAgICAudGhlbih0ID0+IHRoaXMuX2RpdmlzaW9ucyA9IHQpXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICB0aGlzLl90ZWFjaGVyU2VydmljZS5nZXRRdWFsaWZpY2F0aW9uKClcclxuICAgICAgICAgICAgLnRoZW4odCA9PiB0aGlzLl9xdWFsaWZpY2F0aW9ucyA9IHQpXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICBpZiAoaWQgJiYgIWlkLmlzRW1wdHlPcldoaXRlU3BhY2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSBcIlVwZGF0ZVwiO1xyXG4gICAgICAgICAgICB0aGlzLl90ZWFjaGVyU2VydmljZS5nZXRUZWFjaGVyKGlkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IHQuaWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0FkbWluID0gdC5pc0FkbWluO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHQubmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJOYW1lID0gdC51c2VyTmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Bhc3N3b3JkID0gdC5wYXNzd29yZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NsYXNzSW5DaGFyZ2UgPSB0LmNsYXNzSW5DaGFyZ2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSBcIkFkZFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuTWFuYWdlVGVhY2hlclZpZXdNb2RlbCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgbl9hcHBfMS50ZW1wbGF0ZShyZXF1aXJlKFwiLi9tYW5hZ2UtdGVhY2hlci12aWV3Lmh0bWxcIikpLFxyXG4gICAgbl9hcHBfMS5yb3V0ZShSb3V0ZXMubWFuYWdlVGVhY2hlciksXHJcbiAgICBuX2plY3RfMS5pbmplY3QoXCJUZWFjaGVyU2VydmljZVwiLCBcIk5hdmlnYXRpb25TZXJ2aWNlXCIsIFwiQWRtaW5TZXJ2aWNlXCIpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtPYmplY3QsIE9iamVjdCwgT2JqZWN0XSlcclxuXSwgTWFuYWdlVGVhY2hlclZpZXdNb2RlbCk7XHJcbmV4cG9ydHMuTWFuYWdlVGVhY2hlclZpZXdNb2RlbCA9IE1hbmFnZVRlYWNoZXJWaWV3TW9kZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hbmFnZS10ZWFjaGVyLXZpZXctbW9kZWwuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==