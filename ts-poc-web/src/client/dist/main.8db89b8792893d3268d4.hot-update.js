webpackHotUpdate("main",{

/***/ "./src/client/services/school/admin/local-admin-service.js":
/*!*****************************************************************!*\
  !*** ./src/client/services/school/admin/local-admin-service.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const n_defensive_1 = __webpack_require__(/*! @nivinjoseph/n-defensive */ "./node_modules/@nivinjoseph/n-defensive/dist/index.js");
class LocalAdminService {
    constructor() {
        const users = new Array();
        const divisions = new Array();
        const divCount = 2;
        const count = 2;
        for (let i = 0; i < divCount; i++) {
            divisions.push({
                id: "id" + i,
                name: "div" + i,
            });
        }
        this._division = divisions;
        for (let i = 0; i < count; i++) {
            debugger;
            if (i === 0) {
                users.push({
                    id: "id" + i,
                    name: "name" + i,
                    isAdmin: true,
                    userName: "admin",
                    password: "admin",
                    classInCharge: null,
                    qualification: null,
                    isDeleted: false
                });
            }
            if (i !== 0) {
                users.push({
                    id: "id" + i,
                    name: "name" + i,
                    isAdmin: false,
                    userName: "Nivya",
                    password: "12345678",
                    classInCharge: "x-a",
                    qualification: null,
                    isDeleted: false
                });
            }
        }
        this._user = users;
    }
    getDivisions() {
        return Promise.resolve(this._division);
    }
    getUsers() {
        return Promise.resolve(this._user);
    }
    login(userName, password) {
        n_defensive_1.given(userName, "userName").ensureHasValue().ensureIsString();
        n_defensive_1.given(password, "password").ensureHasValue().ensureIsString();
        debugger;
        let user = this._user.filter(t => t.userName === userName && t.password === password)[0];
        return Promise.resolve(user);
    }
}
exports.LocalAdminService = LocalAdminService;
//# sourceMappingURL=local-admin-service.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZpY2VzL3NjaG9vbC9hZG1pbi9sb2NhbC1hZG1pbi1zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELHNCQUFzQixtQkFBTyxDQUFDLHVGQUEwQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDIiwiZmlsZSI6Im1haW4uOGRiODliODc5Mjg5M2QzMjY4ZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5fZGVmZW5zaXZlXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tZGVmZW5zaXZlXCIpO1xyXG5jbGFzcyBMb2NhbEFkbWluU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCB1c2VycyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGNvbnN0IGRpdmlzaW9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGNvbnN0IGRpdkNvdW50ID0gMjtcclxuICAgICAgICBjb25zdCBjb3VudCA9IDI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXZDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRpdmlzaW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImlkXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJkaXZcIiArIGksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kaXZpc2lvbiA9IGRpdmlzaW9ucztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB1c2Vycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJpZFwiICsgaSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIiArIGksXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBZG1pbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTogXCJhZG1pblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBcImFkbWluXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NJbkNoYXJnZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBxdWFsaWZpY2F0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB1c2Vycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJpZFwiICsgaSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIiArIGksXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBZG1pbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6IFwiTml2eWFcIixcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogXCIxMjM0NTY3OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzSW5DaGFyZ2U6IFwieC1hXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVhbGlmaWNhdGlvbjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl91c2VyID0gdXNlcnM7XHJcbiAgICB9XHJcbiAgICBnZXREaXZpc2lvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9kaXZpc2lvbik7XHJcbiAgICB9XHJcbiAgICBnZXRVc2VycygpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3VzZXIpO1xyXG4gICAgfVxyXG4gICAgbG9naW4odXNlck5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbih1c2VyTmFtZSwgXCJ1c2VyTmFtZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihwYXNzd29yZCwgXCJwYXNzd29yZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgbGV0IHVzZXIgPSB0aGlzLl91c2VyLmZpbHRlcih0ID0+IHQudXNlck5hbWUgPT09IHVzZXJOYW1lICYmIHQucGFzc3dvcmQgPT09IHBhc3N3b3JkKVswXTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVzZXIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTG9jYWxBZG1pblNlcnZpY2UgPSBMb2NhbEFkbWluU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9jYWwtYWRtaW4tc2VydmljZS5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9