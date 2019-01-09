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
                this.qualification = t.qualification;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9tYW5hZ2UtdGVhY2hlci9tYW5hZ2UtdGVhY2hlci12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLGtEQUFjO0FBQ3JDLG1CQUFPLENBQUMscUdBQTRCO0FBQ3BDLGlCQUFpQixtQkFBTyxDQUFDLDZFQUFxQjtBQUM5QyxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3QkFBd0I7QUFDN0MsMEJBQTBCLDZCQUE2QjtBQUN2RCxxQkFBcUIsd0JBQXdCO0FBQzdDLGdCQUFnQixtQkFBbUI7QUFDbkMscUJBQXFCLG9CQUFvQjtBQUN6QyxtQkFBbUIsc0JBQXNCO0FBQ3pDLHdCQUF3Qix1QkFBdUI7QUFDL0Msb0JBQW9CLHVCQUF1QjtBQUMzQyx5QkFBeUIsd0JBQXdCO0FBQ2pELG9CQUFvQix1QkFBdUI7QUFDM0MseUJBQXlCLHdCQUF3QjtBQUNqRCx5QkFBeUIsNEJBQTRCO0FBQ3JELDhCQUE4Qiw2QkFBNkI7QUFDM0QseUJBQXlCLDRCQUE0QjtBQUNyRCw4QkFBOEIsNkJBQTZCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyxxR0FBNEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEIiwiZmlsZSI6Im1haW4uYjE4Nzc3NWE0MDIyMmQ5MzFiZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBuX2FwcF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWFwcFwiKTtcclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcIi4uLy4uL3JvdXRlc1wiKTtcclxucmVxdWlyZShcIi4vbWFuYWdlLXRlYWNoZXItdmlldy5zY3NzXCIpO1xyXG5jb25zdCBuX2plY3RfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1qZWN0XCIpO1xyXG5jb25zdCBuX2RlZmVuc2l2ZV8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWRlZmVuc2l2ZVwiKTtcclxubGV0IE1hbmFnZVRlYWNoZXJWaWV3TW9kZWwgPSBjbGFzcyBNYW5hZ2VUZWFjaGVyVmlld01vZGVsIGV4dGVuZHMgbl9hcHBfMS5QYWdlVmlld01vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKHRlYWNoZXJTZXJ2aWNlLCBuYXZpZ2F0aW9uU2VydmljZSwgYWRtaW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGFkbWluU2VydmljZSwgXCJhZG1pblNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX2FkbWluU2VydmljZSA9IGFkbWluU2VydmljZTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHRlYWNoZXJTZXJ2aWNlLCBcInRlYWNoZXJTZXJ2aWNlXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNPYmplY3QoKTtcclxuICAgICAgICB0aGlzLl90ZWFjaGVyU2VydmljZSA9IHRlYWNoZXJTZXJ2aWNlO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4obmF2aWdhdGlvblNlcnZpY2UsIFwibmF2aWdhdGlvblNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX25hdmlnYXRpb25TZXJ2aWNlID0gbmF2aWdhdGlvblNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5fZGl2aXNpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5fcXVhbGlmaWNhdGlvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2lkID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9uYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9pc0FkbWluID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcGFzc3dvcmQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX3VzZXJOYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9jbGFzc0luQ2hhcmdlID0gXCJcIjtcclxuICAgICAgICB0aGlzLnF1YWxpZmljYXRpb24gPSBbXTtcclxuICAgIH1cclxuICAgIGdldCBkaXZpc2lvbnMoKSB7IHJldHVybiB0aGlzLl9kaXZpc2lvbnM7IH1cclxuICAgIGdldCBxdWFsaWZpY2F0aW9ucygpIHsgcmV0dXJuIHRoaXMuX3F1YWxpZmljYXRpb25zOyB9XHJcbiAgICBnZXQgb3BlcmF0aW9uKCkgeyByZXR1cm4gdGhpcy5fb3BlcmF0aW9uOyB9XHJcbiAgICBnZXQgbmFtZSgpIHsgcmV0dXJuIHRoaXMuX25hbWU7IH1cclxuICAgIHNldCBuYW1lKHZhbHVlKSB7IHRoaXMuX25hbWUgPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IGlzQWRtaW4oKSB7IHJldHVybiB0aGlzLl9pc0FkbWluOyB9XHJcbiAgICBzZXQgaXNBZG1pbih2YWx1ZSkgeyB0aGlzLl9pc0FkbWluID0gdmFsdWU7IH1cclxuICAgIGdldCB1c2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuX3VzZXJOYW1lOyB9XHJcbiAgICBzZXQgdXNlck5hbWUodmFsdWUpIHsgdGhpcy5fdXNlck5hbWUgPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IHBhc3N3b3JkKCkgeyByZXR1cm4gdGhpcy5fcGFzc3dvcmQ7IH1cclxuICAgIHNldCBwYXNzd29yZCh2YWx1ZSkgeyB0aGlzLl9wYXNzd29yZCA9IHZhbHVlOyB9XHJcbiAgICBnZXQgY2xhc3NJbkNoYXJnZSgpIHsgcmV0dXJuIHRoaXMuX2NsYXNzSW5DaGFyZ2U7IH1cclxuICAgIHNldCBjbGFzc0luQ2hhcmdlKHZhbHVlKSB7IHRoaXMuX2NsYXNzSW5DaGFyZ2UgPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IHF1YWxpZmljYXRpb24oKSB7IHJldHVybiB0aGlzLl9xdWFsaWZpY2F0aW9uOyB9XHJcbiAgICBzZXQgcXVhbGlmaWNhdGlvbih2YWx1ZSkgeyB0aGlzLl9xdWFsaWZpY2F0aW9uID0gdmFsdWU7IH1cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgY29uc3Qgc2F2ZVByb21pc2UgPSB0aGlzLl9pZFxyXG4gICAgICAgICAgICA/IHRoaXMuX3RlYWNoZXJTZXJ2aWNlLnVwZGF0ZVRlYWNoZXIodGhpcy5faWQsIHRoaXMuX25hbWUsIHRoaXMuX2lzQWRtaW4sIHRoaXMuX3Bhc3N3b3JkLCB0aGlzLl91c2VyTmFtZSwgdGhpcy5fY2xhc3NJbkNoYXJnZSwgdGhpcy5fcXVhbGlmaWNhdGlvbilcclxuICAgICAgICAgICAgOiB0aGlzLl90ZWFjaGVyU2VydmljZS5jcmVhdGVUZWFjaGVyKHRoaXMuX25hbWUsIHRoaXMuX2lzQWRtaW4sIHRoaXMuX3Bhc3N3b3JkLCB0aGlzLl91c2VyTmFtZSwgdGhpcy5fY2xhc3NJbkNoYXJnZSwgdGhpcy5fcXVhbGlmaWNhdGlvbik7XHJcbiAgICAgICAgc2F2ZVByb21pc2VcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGUoUm91dGVzLmxpc3RUZWFjaGVycywge30pKVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICB9XHJcbiAgICBvbkVudGVyKGlkKSB7XHJcbiAgICAgICAgdGhpcy5fYWRtaW5TZXJ2aWNlLmdldERpdmlzaW9ucygpXHJcbiAgICAgICAgICAgIC50aGVuKHQgPT4gdGhpcy5fZGl2aXNpb25zID0gdClcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgIHRoaXMuX3RlYWNoZXJTZXJ2aWNlLmdldFF1YWxpZmljYXRpb24oKVxyXG4gICAgICAgICAgICAudGhlbih0ID0+IHRoaXMuX3F1YWxpZmljYXRpb25zID0gdClcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgIGlmIChpZCAmJiAhaWQuaXNFbXB0eU9yV2hpdGVTcGFjZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wZXJhdGlvbiA9IFwiVXBkYXRlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX3RlYWNoZXJTZXJ2aWNlLmdldFRlYWNoZXIoaWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbih0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lkID0gdC5pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzQWRtaW4gPSB0LmlzQWRtaW47XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9uYW1lID0gdC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlck5hbWUgPSB0LnVzZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFzc3dvcmQgPSB0LnBhc3N3b3JkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2xhc3NJbkNoYXJnZSA9IHQuY2xhc3NJbkNoYXJnZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVhbGlmaWNhdGlvbiA9IHQucXVhbGlmaWNhdGlvbjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wZXJhdGlvbiA9IFwiQWRkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5NYW5hZ2VUZWFjaGVyVmlld01vZGVsID0gX19kZWNvcmF0ZShbXHJcbiAgICBuX2FwcF8xLnRlbXBsYXRlKHJlcXVpcmUoXCIuL21hbmFnZS10ZWFjaGVyLXZpZXcuaHRtbFwiKSksXHJcbiAgICBuX2FwcF8xLnJvdXRlKFJvdXRlcy5tYW5hZ2VUZWFjaGVyKSxcclxuICAgIG5famVjdF8xLmluamVjdChcIlRlYWNoZXJTZXJ2aWNlXCIsIFwiTmF2aWdhdGlvblNlcnZpY2VcIiwgXCJBZG1pblNlcnZpY2VcIiksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW09iamVjdCwgT2JqZWN0LCBPYmplY3RdKVxyXG5dLCBNYW5hZ2VUZWFjaGVyVmlld01vZGVsKTtcclxuZXhwb3J0cy5NYW5hZ2VUZWFjaGVyVmlld01vZGVsID0gTWFuYWdlVGVhY2hlclZpZXdNb2RlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFuYWdlLXRlYWNoZXItdmlldy1tb2RlbC5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9