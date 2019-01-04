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
        return this._classInCharge;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9tYW5hZ2UtdGVhY2hlci9tYW5hZ2UtdGVhY2hlci12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLGtEQUFjO0FBQ3JDLG1CQUFPLENBQUMscUdBQTRCO0FBQ3BDLGlCQUFpQixtQkFBTyxDQUFDLDZFQUFxQjtBQUM5QyxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QyxxQkFBcUIsd0JBQXdCO0FBQzdDLGdCQUFnQixtQkFBbUI7QUFDbkMscUJBQXFCLG9CQUFvQjtBQUN6QyxtQkFBbUIsc0JBQXNCO0FBQ3pDLHdCQUF3Qix1QkFBdUI7QUFDL0Msb0JBQW9CLHVCQUF1QjtBQUMzQyx5QkFBeUIsd0JBQXdCO0FBQ2pELG9CQUFvQix1QkFBdUI7QUFDM0MseUJBQXlCLHdCQUF3QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNkJBQTZCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMscUdBQTRCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRCIsImZpbGUiOiJtYWluLmZmNjQ3YjE0MmIwNDRhNmU4YjM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbl9hcHBfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1hcHBcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi9yb3V0ZXNcIik7XHJcbnJlcXVpcmUoXCIuL21hbmFnZS10ZWFjaGVyLXZpZXcuc2Nzc1wiKTtcclxuY29uc3Qgbl9qZWN0XzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tamVjdFwiKTtcclxuY29uc3Qgbl9kZWZlbnNpdmVfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1kZWZlbnNpdmVcIik7XHJcbmxldCBNYW5hZ2VUZWFjaGVyVmlld01vZGVsID0gY2xhc3MgTWFuYWdlVGVhY2hlclZpZXdNb2RlbCBleHRlbmRzIG5fYXBwXzEuUGFnZVZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZWFjaGVyU2VydmljZSwgbmF2aWdhdGlvblNlcnZpY2UsIGFkbWluU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihhZG1pblNlcnZpY2UsIFwiYWRtaW5TZXJ2aWNlXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNPYmplY3QoKTtcclxuICAgICAgICB0aGlzLl9hZG1pblNlcnZpY2UgPSBhZG1pblNlcnZpY2U7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbih0ZWFjaGVyU2VydmljZSwgXCJ0ZWFjaGVyU2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fdGVhY2hlclNlcnZpY2UgPSB0ZWFjaGVyU2VydmljZTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKG5hdmlnYXRpb25TZXJ2aWNlLCBcIm5hdmlnYXRpb25TZXJ2aWNlXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNPYmplY3QoKTtcclxuICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZSA9IG5hdmlnYXRpb25TZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuX2RpdmlzaW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX29wZXJhdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5faWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2lzQWRtaW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9wYXNzd29yZCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fdXNlck5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2NsYXNzSW5DaGFyZ2UgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRpdmlzaW9ucygpIHsgcmV0dXJuIHRoaXMuX2RpdmlzaW9uczsgfVxyXG4gICAgZ2V0IG9wZXJhdGlvbigpIHsgcmV0dXJuIHRoaXMuX29wZXJhdGlvbjsgfVxyXG4gICAgZ2V0IG5hbWUoKSB7IHJldHVybiB0aGlzLl9uYW1lOyB9XHJcbiAgICBzZXQgbmFtZSh2YWx1ZSkgeyB0aGlzLl9uYW1lID0gdmFsdWU7IH1cclxuICAgIGdldCBpc0FkbWluKCkgeyByZXR1cm4gdGhpcy5faXNBZG1pbjsgfVxyXG4gICAgc2V0IGlzQWRtaW4odmFsdWUpIHsgdGhpcy5faXNBZG1pbiA9IHZhbHVlOyB9XHJcbiAgICBnZXQgdXNlck5hbWUoKSB7IHJldHVybiB0aGlzLl91c2VyTmFtZTsgfVxyXG4gICAgc2V0IHVzZXJOYW1lKHZhbHVlKSB7IHRoaXMuX3VzZXJOYW1lID0gdmFsdWU7IH1cclxuICAgIGdldCBwYXNzd29yZCgpIHsgcmV0dXJuIHRoaXMuX3Bhc3N3b3JkOyB9XHJcbiAgICBzZXQgcGFzc3dvcmQodmFsdWUpIHsgdGhpcy5fcGFzc3dvcmQgPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IGNsYXNzSW5DaGFyZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsYXNzSW5DaGFyZ2U7XHJcbiAgICB9XHJcbiAgICBzZXQgY2xhc3NJbkNoYXJnZSh2YWx1ZSkgeyB0aGlzLl9jbGFzc0luQ2hhcmdlID0gdmFsdWU7IH1cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgY29uc3Qgc2F2ZVByb21pc2UgPSB0aGlzLl9pZFxyXG4gICAgICAgICAgICA/IHRoaXMuX3RlYWNoZXJTZXJ2aWNlLnVwZGF0ZVRlYWNoZXIodGhpcy5faWQsIHRoaXMuX25hbWUsIHRoaXMuX2lzQWRtaW4sIHRoaXMuX3Bhc3N3b3JkLCB0aGlzLl91c2VyTmFtZSwgdGhpcy5fY2xhc3NJbkNoYXJnZSlcclxuICAgICAgICAgICAgOiB0aGlzLl90ZWFjaGVyU2VydmljZS5jcmVhdGVUZWFjaGVyKHRoaXMuX25hbWUsIHRoaXMuX2lzQWRtaW4sIHRoaXMuX3Bhc3N3b3JkLCB0aGlzLl91c2VyTmFtZSwgdGhpcy5fY2xhc3NJbkNoYXJnZSk7XHJcbiAgICAgICAgc2F2ZVByb21pc2VcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGUoUm91dGVzLmxpc3RUZWFjaGVycywge30pKVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICB9XHJcbiAgICBvbkVudGVyKGlkKSB7XHJcbiAgICAgICAgdGhpcy5fYWRtaW5TZXJ2aWNlLmdldERpdmlzaW9ucygpXHJcbiAgICAgICAgICAgIC50aGVuKHQgPT4gdGhpcy5fZGl2aXNpb25zID0gdClcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgIGlmIChpZCAmJiAhaWQuaXNFbXB0eU9yV2hpdGVTcGFjZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wZXJhdGlvbiA9IFwiVXBkYXRlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX3RlYWNoZXJTZXJ2aWNlLmdldFRlYWNoZXIoaWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbih0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lkID0gdC5pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzQWRtaW4gPSB0LmlzQWRtaW47XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9uYW1lID0gdC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlck5hbWUgPSB0LnVzZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFzc3dvcmQgPSB0LnBhc3N3b3JkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2xhc3NJbkNoYXJnZSA9IHQuY2xhc3NJbkNoYXJnZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wZXJhdGlvbiA9IFwiQWRkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5NYW5hZ2VUZWFjaGVyVmlld01vZGVsID0gX19kZWNvcmF0ZShbXHJcbiAgICBuX2FwcF8xLnRlbXBsYXRlKHJlcXVpcmUoXCIuL21hbmFnZS10ZWFjaGVyLXZpZXcuaHRtbFwiKSksXHJcbiAgICBuX2FwcF8xLnJvdXRlKFJvdXRlcy5tYW5hZ2VUZWFjaGVyKSxcclxuICAgIG5famVjdF8xLmluamVjdChcIlRlYWNoZXJTZXJ2aWNlXCIsIFwiTmF2aWdhdGlvblNlcnZpY2VcIiwgXCJBZG1pblNlcnZpY2VcIiksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW09iamVjdCwgT2JqZWN0LCBPYmplY3RdKVxyXG5dLCBNYW5hZ2VUZWFjaGVyVmlld01vZGVsKTtcclxuZXhwb3J0cy5NYW5hZ2VUZWFjaGVyVmlld01vZGVsID0gTWFuYWdlVGVhY2hlclZpZXdNb2RlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFuYWdlLXRlYWNoZXItdmlldy1tb2RlbC5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9