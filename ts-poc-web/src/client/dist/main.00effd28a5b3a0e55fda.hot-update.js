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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL3NjaG9vbC9hZG1pbi9hZG1pbi12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQywyRUFBb0I7QUFDNUMsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbEMsZUFBZSxtQkFBTyxDQUFDLGtEQUFjO0FBQ3JDLHNCQUFzQixtQkFBTyxDQUFDLHVGQUEwQjtBQUN4RCxpQkFBaUIsbUJBQU8sQ0FBQyw2RUFBcUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0MseUJBQXlCLHdCQUF3QjtBQUNqRCxvQkFBb0IsdUJBQXVCO0FBQzNDLHlCQUF5Qix3QkFBd0I7QUFDakQsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QyIsImZpbGUiOiJtYWluLjAwZWZmZDI4YTViM2EwZTU1ZmRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbl9hcHBfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1hcHBcIik7XHJcbnJlcXVpcmUoXCIuLi9hZG1pbi9hZG1pbi12aWV3LnNjc3NcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi9yb3V0ZXNcIik7XHJcbmNvbnN0IG5fZGVmZW5zaXZlXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tZGVmZW5zaXZlXCIpO1xyXG5jb25zdCBuX2plY3RfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1qZWN0XCIpO1xyXG5sZXQgTGlzdEFkbWluVmlld01vZGVsID0gY2xhc3MgTGlzdEFkbWluVmlld01vZGVsIGV4dGVuZHMgbl9hcHBfMS5QYWdlVmlld01vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKGFkbWluU2VydmljZSwgbmF2aWdhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4obmF2aWdhdGlvblNlcnZpY2UsIFwibmF2aWdhdGlvblNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX25hdmlnYXRpb25TZXJ2aWNlID0gbmF2aWdhdGlvblNlcnZpY2U7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihhZG1pblNlcnZpY2UsIFwiYWRtaW5TZXJ2aWNlXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNPYmplY3QoKTtcclxuICAgICAgICB0aGlzLl9hZG1pblNlcnZpY2UgPSBhZG1pblNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBnZXQgdXNlck5hbWUoKSB7IHJldHVybiB0aGlzLl91c2VyTmFtZTsgfVxyXG4gICAgc2V0IHVzZXJOYW1lKHZhbHVlKSB7IHRoaXMuX3VzZXJOYW1lID0gdmFsdWU7IH1cclxuICAgIGdldCBwYXNzd29yZCgpIHsgcmV0dXJuIHRoaXMuX3Bhc3N3b3JkOyB9XHJcbiAgICBzZXQgcGFzc3dvcmQodmFsdWUpIHsgdGhpcy5fcGFzc3dvcmQgPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IHVzZXIoKSB7IHJldHVybiB0aGlzLl91c2VyOyB9XHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICB0aGlzLl9hZG1pblNlcnZpY2UubG9naW4odGhpcy51c2VyTmFtZSwgdGhpcy5wYXNzd29yZClcclxuICAgICAgICAgICAgLnRoZW4oeCA9PiB0aGlzLl91c2VyID0geClcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgIGlmICh0aGlzLl91c2VyLmlzQWRtaW4gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGUoUm91dGVzLmxpc3RUZWFjaGVycywge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fYWRtaW5TZXJ2aWNlLmxvZ2luKHRoaXMudXNlck5hbWUsIHRoaXMucGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICAudGhlbih0ID0+IHRoaXMuX3VzZXIgPSB0KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGUoUm91dGVzLmxpc3RTdHVkZW50cywge30pKS5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbkxpc3RBZG1pblZpZXdNb2RlbCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgbl9hcHBfMS50ZW1wbGF0ZShyZXF1aXJlKFwiLi4vYWRtaW4vYWRtaW4tdmlldy5odG1sXCIpKSxcclxuICAgIG5fYXBwXzEucm91dGUoUm91dGVzLmFkbWluUGFnZSksXHJcbiAgICBuX2plY3RfMS5pbmplY3QoXCJBZG1pblNlcnZpY2VcIiwgXCJOYXZpZ2F0aW9uU2VydmljZVwiKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbT2JqZWN0LCBPYmplY3RdKVxyXG5dLCBMaXN0QWRtaW5WaWV3TW9kZWwpO1xyXG5leHBvcnRzLkxpc3RBZG1pblZpZXdNb2RlbCA9IExpc3RBZG1pblZpZXdNb2RlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWRtaW4tdmlldy1tb2RlbC5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9