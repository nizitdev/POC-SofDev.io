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
        this._user = [];
    }
    get userName() { return this._userName; }
    set userName(value) { this._userName = value; }
    get password() { return this._password; }
    set password(value) { this._password = value; }
    get users() { return this._user; }
    login() {
        let us = this._user.find(t => t.userName === this.userName && t.password === this.password);
        alert(us.isAdmin);
        if (us.isAdmin === true) {
            this._adminService.login(this.userName, this.password)
                .then(t => this._user = t)
                .then(() => this._navigationService.navigate(Routes.listTeachers, {})).catch(e => console.log(e));
        }
        else {
            this._adminService.login(this.userName, this.password)
                .then(t => this._user = t)
                .then(() => this._navigationService.navigate(Routes.listStudents, {})).catch(e => console.log(e));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9hZG1pbi9hZG1pbi12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDNUMsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbEMsZUFBZSxtQkFBTyxDQUFDLGtEQUFjO0FBQ3JDLHNCQUFzQixtQkFBTyxDQUFDLHVGQUEwQjtBQUN4RCxpQkFBaUIsbUJBQU8sQ0FBQyw2RUFBcUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQyx5QkFBeUIsd0JBQXdCO0FBQ2pELG9CQUFvQix1QkFBdUI7QUFDM0MseUJBQXlCLHdCQUF3QjtBQUNqRCxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQkFBTyxDQUFDLGlGQUEwQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEMiLCJmaWxlIjoibWFpbi5jODMzNjk4MWY1ZGMzOWQxOWRiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5fYXBwXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tYXBwXCIpO1xyXG5yZXF1aXJlKFwiLi4vYWRtaW4vYWRtaW4tdmlldy5zY3NzXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vcm91dGVzXCIpO1xyXG5jb25zdCBuX2RlZmVuc2l2ZV8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWRlZmVuc2l2ZVwiKTtcclxuY29uc3Qgbl9qZWN0XzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tamVjdFwiKTtcclxubGV0IExpc3RBZG1pblZpZXdNb2RlbCA9IGNsYXNzIExpc3RBZG1pblZpZXdNb2RlbCBleHRlbmRzIG5fYXBwXzEuUGFnZVZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihhZG1pblNlcnZpY2UsIG5hdmlnYXRpb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKG5hdmlnYXRpb25TZXJ2aWNlLCBcIm5hdmlnYXRpb25TZXJ2aWNlXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNPYmplY3QoKTtcclxuICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZSA9IG5hdmlnYXRpb25TZXJ2aWNlO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oYWRtaW5TZXJ2aWNlLCBcImFkbWluU2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fYWRtaW5TZXJ2aWNlID0gYWRtaW5TZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuX3VzZXIgPSBbXTtcclxuICAgIH1cclxuICAgIGdldCB1c2VyTmFtZSgpIHsgcmV0dXJuIHRoaXMuX3VzZXJOYW1lOyB9XHJcbiAgICBzZXQgdXNlck5hbWUodmFsdWUpIHsgdGhpcy5fdXNlck5hbWUgPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IHBhc3N3b3JkKCkgeyByZXR1cm4gdGhpcy5fcGFzc3dvcmQ7IH1cclxuICAgIHNldCBwYXNzd29yZCh2YWx1ZSkgeyB0aGlzLl9wYXNzd29yZCA9IHZhbHVlOyB9XHJcbiAgICBnZXQgdXNlcnMoKSB7IHJldHVybiB0aGlzLl91c2VyOyB9XHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICBsZXQgdXMgPSB0aGlzLl91c2VyLmZpbmQodCA9PiB0LnVzZXJOYW1lID09PSB0aGlzLnVzZXJOYW1lICYmIHQucGFzc3dvcmQgPT09IHRoaXMucGFzc3dvcmQpO1xyXG4gICAgICAgIGFsZXJ0KHVzLmlzQWRtaW4pO1xyXG4gICAgICAgIGlmICh1cy5pc0FkbWluID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkbWluU2VydmljZS5sb2dpbih0aGlzLnVzZXJOYW1lLCB0aGlzLnBhc3N3b3JkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odCA9PiB0aGlzLl91c2VyID0gdClcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuX25hdmlnYXRpb25TZXJ2aWNlLm5hdmlnYXRlKFJvdXRlcy5saXN0VGVhY2hlcnMsIHt9KSkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9hZG1pblNlcnZpY2UubG9naW4odGhpcy51c2VyTmFtZSwgdGhpcy5wYXNzd29yZClcclxuICAgICAgICAgICAgICAgIC50aGVuKHQgPT4gdGhpcy5fdXNlciA9IHQpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZShSb3V0ZXMubGlzdFN0dWRlbnRzLCB7fSkpLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuTGlzdEFkbWluVmlld01vZGVsID0gX19kZWNvcmF0ZShbXHJcbiAgICBuX2FwcF8xLnRlbXBsYXRlKHJlcXVpcmUoXCIuLi9hZG1pbi9hZG1pbi12aWV3Lmh0bWxcIikpLFxyXG4gICAgbl9hcHBfMS5yb3V0ZShSb3V0ZXMuYWRtaW5QYWdlKSxcclxuICAgIG5famVjdF8xLmluamVjdChcIkFkbWluU2VydmljZVwiLCBcIk5hdmlnYXRpb25TZXJ2aWNlXCIpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtPYmplY3QsIE9iamVjdF0pXHJcbl0sIExpc3RBZG1pblZpZXdNb2RlbCk7XHJcbmV4cG9ydHMuTGlzdEFkbWluVmlld01vZGVsID0gTGlzdEFkbWluVmlld01vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZG1pbi12aWV3LW1vZGVsLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=