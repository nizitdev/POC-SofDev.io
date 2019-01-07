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
        let that = this;
        this._adminService.login(this.userName, this.password)
            .then(function (result) {
            debugger;
            console.log(result);
            that._user = result;
        }, function (error) {
            console.log(error);
        });
        debugger;
        alert(that._user);
        if (that._user.isAdmin === true) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9hZG1pbi9hZG1pbi12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDNUMsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbEMsZUFBZSxtQkFBTyxDQUFDLGtEQUFjO0FBQ3JDLHNCQUFzQixtQkFBTyxDQUFDLHVGQUEwQjtBQUN4RCxpQkFBaUIsbUJBQU8sQ0FBQyw2RUFBcUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0MseUJBQXlCLHdCQUF3QjtBQUNqRCxvQkFBb0IsdUJBQXVCO0FBQzNDLHlCQUF5Qix3QkFBd0I7QUFDakQsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQkFBTyxDQUFDLGlGQUEwQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEMiLCJmaWxlIjoibWFpbi4zMzc2NjgzZTA4YjE0OWJmMTMzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5fYXBwXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tYXBwXCIpO1xyXG5yZXF1aXJlKFwiLi4vYWRtaW4vYWRtaW4tdmlldy5zY3NzXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vcm91dGVzXCIpO1xyXG5jb25zdCBuX2RlZmVuc2l2ZV8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWRlZmVuc2l2ZVwiKTtcclxuY29uc3Qgbl9qZWN0XzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tamVjdFwiKTtcclxubGV0IExpc3RBZG1pblZpZXdNb2RlbCA9IGNsYXNzIExpc3RBZG1pblZpZXdNb2RlbCBleHRlbmRzIG5fYXBwXzEuUGFnZVZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihhZG1pblNlcnZpY2UsIG5hdmlnYXRpb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKG5hdmlnYXRpb25TZXJ2aWNlLCBcIm5hdmlnYXRpb25TZXJ2aWNlXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNPYmplY3QoKTtcclxuICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZSA9IG5hdmlnYXRpb25TZXJ2aWNlO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oYWRtaW5TZXJ2aWNlLCBcImFkbWluU2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fYWRtaW5TZXJ2aWNlID0gYWRtaW5TZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHVzZXJOYW1lKCkgeyByZXR1cm4gdGhpcy5fdXNlck5hbWU7IH1cclxuICAgIHNldCB1c2VyTmFtZSh2YWx1ZSkgeyB0aGlzLl91c2VyTmFtZSA9IHZhbHVlOyB9XHJcbiAgICBnZXQgcGFzc3dvcmQoKSB7IHJldHVybiB0aGlzLl9wYXNzd29yZDsgfVxyXG4gICAgc2V0IHBhc3N3b3JkKHZhbHVlKSB7IHRoaXMuX3Bhc3N3b3JkID0gdmFsdWU7IH1cclxuICAgIGdldCB1c2VyKCkgeyByZXR1cm4gdGhpcy5fdXNlcjsgfVxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2FkbWluU2VydmljZS5sb2dpbih0aGlzLnVzZXJOYW1lLCB0aGlzLnBhc3N3b3JkKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICB0aGF0Ll91c2VyID0gcmVzdWx0O1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgYWxlcnQodGhhdC5fdXNlcik7XHJcbiAgICAgICAgaWYgKHRoYXQuX3VzZXIuaXNBZG1pbiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZShSb3V0ZXMubGlzdFRlYWNoZXJzLCB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZShSb3V0ZXMubGlzdFN0dWRlbnRzLCB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5MaXN0QWRtaW5WaWV3TW9kZWwgPSBfX2RlY29yYXRlKFtcclxuICAgIG5fYXBwXzEudGVtcGxhdGUocmVxdWlyZShcIi4uL2FkbWluL2FkbWluLXZpZXcuaHRtbFwiKSksXHJcbiAgICBuX2FwcF8xLnJvdXRlKFJvdXRlcy5hZG1pblBhZ2UpLFxyXG4gICAgbl9qZWN0XzEuaW5qZWN0KFwiQWRtaW5TZXJ2aWNlXCIsIFwiTmF2aWdhdGlvblNlcnZpY2VcIiksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW09iamVjdCwgT2JqZWN0XSlcclxuXSwgTGlzdEFkbWluVmlld01vZGVsKTtcclxuZXhwb3J0cy5MaXN0QWRtaW5WaWV3TW9kZWwgPSBMaXN0QWRtaW5WaWV3TW9kZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkbWluLXZpZXctbW9kZWwuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==