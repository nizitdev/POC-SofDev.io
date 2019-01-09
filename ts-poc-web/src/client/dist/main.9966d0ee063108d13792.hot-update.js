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
    get qualification() { return this._qualification; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9tYW5hZ2UtdGVhY2hlci9tYW5hZ2UtdGVhY2hlci12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLGtEQUFjO0FBQ3JDLG1CQUFPLENBQUMscUdBQTRCO0FBQ3BDLGlCQUFpQixtQkFBTyxDQUFDLDZFQUFxQjtBQUM5QyxzQkFBc0IsbUJBQU8sQ0FBQyx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3Qyx5QkFBeUIsNEJBQTRCO0FBQ3JELHFCQUFxQix3QkFBd0I7QUFDN0MsZ0JBQWdCLG1CQUFtQjtBQUNuQyxxQkFBcUIsb0JBQW9CO0FBQ3pDLG1CQUFtQixzQkFBc0I7QUFDekMsd0JBQXdCLHVCQUF1QjtBQUMvQyxvQkFBb0IsdUJBQXVCO0FBQzNDLHlCQUF5Qix3QkFBd0I7QUFDakQsb0JBQW9CLHVCQUF1QjtBQUMzQyx5QkFBeUIsd0JBQXdCO0FBQ2pELHlCQUF5Qiw0QkFBNEI7QUFDckQsOEJBQThCLDZCQUE2QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQkFBTyxDQUFDLHFHQUE0QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUQiLCJmaWxlIjoibWFpbi45OTY2ZDBlZTA2MzEwOGQxMzc5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5fYXBwXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tYXBwXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vcm91dGVzXCIpO1xyXG5yZXF1aXJlKFwiLi9tYW5hZ2UtdGVhY2hlci12aWV3LnNjc3NcIik7XHJcbmNvbnN0IG5famVjdF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWplY3RcIik7XHJcbmNvbnN0IG5fZGVmZW5zaXZlXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tZGVmZW5zaXZlXCIpO1xyXG5sZXQgTWFuYWdlVGVhY2hlclZpZXdNb2RlbCA9IGNsYXNzIE1hbmFnZVRlYWNoZXJWaWV3TW9kZWwgZXh0ZW5kcyBuX2FwcF8xLlBhZ2VWaWV3TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IodGVhY2hlclNlcnZpY2UsIG5hdmlnYXRpb25TZXJ2aWNlLCBhZG1pblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oYWRtaW5TZXJ2aWNlLCBcImFkbWluU2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fYWRtaW5TZXJ2aWNlID0gYWRtaW5TZXJ2aWNlO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4odGVhY2hlclNlcnZpY2UsIFwidGVhY2hlclNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX3RlYWNoZXJTZXJ2aWNlID0gdGVhY2hlclNlcnZpY2U7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihuYXZpZ2F0aW9uU2VydmljZSwgXCJuYXZpZ2F0aW9uU2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UgPSBuYXZpZ2F0aW9uU2VydmljZTtcclxuICAgICAgICB0aGlzLl9kaXZpc2lvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2lkID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9uYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9pc0FkbWluID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcGFzc3dvcmQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX3VzZXJOYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9jbGFzc0luQ2hhcmdlID0gXCJcIjtcclxuICAgIH1cclxuICAgIGdldCBkaXZpc2lvbnMoKSB7IHJldHVybiB0aGlzLl9kaXZpc2lvbnM7IH1cclxuICAgIGdldCBxdWFsaWZpY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5fcXVhbGlmaWNhdGlvbjsgfVxyXG4gICAgZ2V0IG9wZXJhdGlvbigpIHsgcmV0dXJuIHRoaXMuX29wZXJhdGlvbjsgfVxyXG4gICAgZ2V0IG5hbWUoKSB7IHJldHVybiB0aGlzLl9uYW1lOyB9XHJcbiAgICBzZXQgbmFtZSh2YWx1ZSkgeyB0aGlzLl9uYW1lID0gdmFsdWU7IH1cclxuICAgIGdldCBpc0FkbWluKCkgeyByZXR1cm4gdGhpcy5faXNBZG1pbjsgfVxyXG4gICAgc2V0IGlzQWRtaW4odmFsdWUpIHsgdGhpcy5faXNBZG1pbiA9IHZhbHVlOyB9XHJcbiAgICBnZXQgdXNlck5hbWUoKSB7IHJldHVybiB0aGlzLl91c2VyTmFtZTsgfVxyXG4gICAgc2V0IHVzZXJOYW1lKHZhbHVlKSB7IHRoaXMuX3VzZXJOYW1lID0gdmFsdWU7IH1cclxuICAgIGdldCBwYXNzd29yZCgpIHsgcmV0dXJuIHRoaXMuX3Bhc3N3b3JkOyB9XHJcbiAgICBzZXQgcGFzc3dvcmQodmFsdWUpIHsgdGhpcy5fcGFzc3dvcmQgPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IGNsYXNzSW5DaGFyZ2UoKSB7IHJldHVybiB0aGlzLl9jbGFzc0luQ2hhcmdlOyB9XHJcbiAgICBzZXQgY2xhc3NJbkNoYXJnZSh2YWx1ZSkgeyB0aGlzLl9jbGFzc0luQ2hhcmdlID0gdmFsdWU7IH1cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgY29uc3Qgc2F2ZVByb21pc2UgPSB0aGlzLl9pZFxyXG4gICAgICAgICAgICA/IHRoaXMuX3RlYWNoZXJTZXJ2aWNlLnVwZGF0ZVRlYWNoZXIodGhpcy5faWQsIHRoaXMuX25hbWUsIHRoaXMuX2lzQWRtaW4sIHRoaXMuX3Bhc3N3b3JkLCB0aGlzLl91c2VyTmFtZSwgdGhpcy5fY2xhc3NJbkNoYXJnZSlcclxuICAgICAgICAgICAgOiB0aGlzLl90ZWFjaGVyU2VydmljZS5jcmVhdGVUZWFjaGVyKHRoaXMuX25hbWUsIHRoaXMuX2lzQWRtaW4sIHRoaXMuX3Bhc3N3b3JkLCB0aGlzLl91c2VyTmFtZSwgdGhpcy5fY2xhc3NJbkNoYXJnZSk7XHJcbiAgICAgICAgc2F2ZVByb21pc2VcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGUoUm91dGVzLmxpc3RUZWFjaGVycywge30pKVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICB9XHJcbiAgICBvbkVudGVyKGlkKSB7XHJcbiAgICAgICAgdGhpcy5fYWRtaW5TZXJ2aWNlLmdldERpdmlzaW9ucygpXHJcbiAgICAgICAgICAgIC50aGVuKHQgPT4gdGhpcy5fZGl2aXNpb25zID0gdClcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgIGlmIChpZCAmJiAhaWQuaXNFbXB0eU9yV2hpdGVTcGFjZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wZXJhdGlvbiA9IFwiVXBkYXRlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX3RlYWNoZXJTZXJ2aWNlLmdldFRlYWNoZXIoaWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbih0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lkID0gdC5pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzQWRtaW4gPSB0LmlzQWRtaW47XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9uYW1lID0gdC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlck5hbWUgPSB0LnVzZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFzc3dvcmQgPSB0LnBhc3N3b3JkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2xhc3NJbkNoYXJnZSA9IHQuY2xhc3NJbkNoYXJnZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wZXJhdGlvbiA9IFwiQWRkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5NYW5hZ2VUZWFjaGVyVmlld01vZGVsID0gX19kZWNvcmF0ZShbXHJcbiAgICBuX2FwcF8xLnRlbXBsYXRlKHJlcXVpcmUoXCIuL21hbmFnZS10ZWFjaGVyLXZpZXcuaHRtbFwiKSksXHJcbiAgICBuX2FwcF8xLnJvdXRlKFJvdXRlcy5tYW5hZ2VUZWFjaGVyKSxcclxuICAgIG5famVjdF8xLmluamVjdChcIlRlYWNoZXJTZXJ2aWNlXCIsIFwiTmF2aWdhdGlvblNlcnZpY2VcIiwgXCJBZG1pblNlcnZpY2VcIiksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW09iamVjdCwgT2JqZWN0LCBPYmplY3RdKVxyXG5dLCBNYW5hZ2VUZWFjaGVyVmlld01vZGVsKTtcclxuZXhwb3J0cy5NYW5hZ2VUZWFjaGVyVmlld01vZGVsID0gTWFuYWdlVGVhY2hlclZpZXdNb2RlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFuYWdlLXRlYWNoZXItdmlldy1tb2RlbC5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9