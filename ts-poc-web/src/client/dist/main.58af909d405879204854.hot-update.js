webpackHotUpdate("main",{

/***/ "./src/client/pages/school/admin/admin-view-model.js":
/*!***********************************************************!*\
  !*** ./src/client/pages/school/admin/admin-view-model.js ***!
  \***********************************************************/
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
__webpack_require__(/*! ../admin/admin-view.scss */ "./src/client/pages/school/admin/admin-view.scss");
const Routes = __webpack_require__(/*! ../../routes */ "./src/client/pages/routes.js");
const n_defensive_1 = __webpack_require__(/*! @nivinjoseph/n-defensive */ "./node_modules/@nivinjoseph/n-defensive/dist/index.js");
const n_ject_1 = __webpack_require__(/*! @nivinjoseph/n-ject */ "./node_modules/@nivinjoseph/n-ject/dist/index.js");
let ListAdminViewModel = class ListAdminViewModel extends n_app_1.PageViewModel {
    constructor(adminService, navigationService) {
        super();
        n_defensive_1.given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;
        n_defensive_1.given(adminService, "adminService").ensureHasValue().ensureIsObject();
        this._adminService = adminService;
    }
    get userName() { return this._userName; }
    set userName(value) { this._userName = value; }
    get password() { return this._password; }
    set password(value) { this._password = value; }
    get user() { return this._user; }
    login() {
        this._adminService.login(this.userName, this.password)
            .then(x => this._user = x)
            .catch(e => console.log(e));
        if (this._user.isAdmin === true) {
            this._navigationService.navigate(Routes.listTeachers, {});
        }
        else {
            this._navigationService.navigate(Routes.listStudents, {});
        }
    }
};
ListAdminViewModel = __decorate([
    n_app_1.template(__webpack_require__(/*! ../admin/admin-view.html */ "./src/client/pages/school/admin/admin-view.html")),
    n_app_1.route(Routes.adminPage),
    n_ject_1.inject("AdminService", "NavigationService"),
    __metadata("design:paramtypes", [Object, Object])
], ListAdminViewModel);
exports.ListAdminViewModel = ListAdminViewModel;
//# sourceMappingURL=admin-view-model.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9hZG1pbi9hZG1pbi12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDNUMsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbEMsZUFBZSxtQkFBTyxDQUFDLGtEQUFjO0FBQ3JDLHNCQUFzQixtQkFBTyxDQUFDLHVGQUEwQjtBQUN4RCxpQkFBaUIsbUJBQU8sQ0FBQyw2RUFBcUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0MseUJBQXlCLHdCQUF3QjtBQUNqRCxvQkFBb0IsdUJBQXVCO0FBQzNDLHlCQUF5Qix3QkFBd0I7QUFDakQsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDIiwiZmlsZSI6Im1haW4uNThhZjkwOWQ0MDU4NzkyMDQ4NTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBuX2FwcF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWFwcFwiKTtcclxucmVxdWlyZShcIi4uL2FkbWluL2FkbWluLXZpZXcuc2Nzc1wiKTtcclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcIi4uLy4uL3JvdXRlc1wiKTtcclxuY29uc3Qgbl9kZWZlbnNpdmVfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1kZWZlbnNpdmVcIik7XHJcbmNvbnN0IG5famVjdF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWplY3RcIik7XHJcbmxldCBMaXN0QWRtaW5WaWV3TW9kZWwgPSBjbGFzcyBMaXN0QWRtaW5WaWV3TW9kZWwgZXh0ZW5kcyBuX2FwcF8xLlBhZ2VWaWV3TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IoYWRtaW5TZXJ2aWNlLCBuYXZpZ2F0aW9uU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihuYXZpZ2F0aW9uU2VydmljZSwgXCJuYXZpZ2F0aW9uU2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UgPSBuYXZpZ2F0aW9uU2VydmljZTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGFkbWluU2VydmljZSwgXCJhZG1pblNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX2FkbWluU2VydmljZSA9IGFkbWluU2VydmljZTtcclxuICAgIH1cclxuICAgIGdldCB1c2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuX3VzZXJOYW1lOyB9XHJcbiAgICBzZXQgdXNlck5hbWUodmFsdWUpIHsgdGhpcy5fdXNlck5hbWUgPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IHBhc3N3b3JkKCkgeyByZXR1cm4gdGhpcy5fcGFzc3dvcmQ7IH1cclxuICAgIHNldCBwYXNzd29yZCh2YWx1ZSkgeyB0aGlzLl9wYXNzd29yZCA9IHZhbHVlOyB9XHJcbiAgICBnZXQgdXNlcigpIHsgcmV0dXJuIHRoaXMuX3VzZXI7IH1cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIHRoaXMuX2FkbWluU2VydmljZS5sb2dpbih0aGlzLnVzZXJOYW1lLCB0aGlzLnBhc3N3b3JkKVxyXG4gICAgICAgICAgICAudGhlbih4ID0+IHRoaXMuX3VzZXIgPSB4KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3VzZXIuaXNBZG1pbiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZShSb3V0ZXMubGlzdFRlYWNoZXJzLCB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZShSb3V0ZXMubGlzdFN0dWRlbnRzLCB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5MaXN0QWRtaW5WaWV3TW9kZWwgPSBfX2RlY29yYXRlKFtcclxuICAgIG5fYXBwXzEudGVtcGxhdGUocmVxdWlyZShcIi4uL2FkbWluL2FkbWluLXZpZXcuaHRtbFwiKSksXHJcbiAgICBuX2FwcF8xLnJvdXRlKFJvdXRlcy5hZG1pblBhZ2UpLFxyXG4gICAgbl9qZWN0XzEuaW5qZWN0KFwiQWRtaW5TZXJ2aWNlXCIsIFwiTmF2aWdhdGlvblNlcnZpY2VcIiksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW09iamVjdCwgT2JqZWN0XSlcclxuXSwgTGlzdEFkbWluVmlld01vZGVsKTtcclxuZXhwb3J0cy5MaXN0QWRtaW5WaWV3TW9kZWwgPSBMaXN0QWRtaW5WaWV3TW9kZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkbWluLXZpZXctbW9kZWwuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==