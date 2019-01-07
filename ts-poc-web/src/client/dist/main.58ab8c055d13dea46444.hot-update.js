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
            if (i === 0) {
                users.push({
                    id: "id" + i,
                    name: "name" + i,
                    isAdmin: true,
                    userName: "admin",
                    password: "admin",
                    classInCharge: null,
                    isDeleted: false
                });
                if (i !== 0) {
                    users.push({
                        id: "id" + i,
                        name: "name" + i,
                        isAdmin: false,
                        userName: "Nivya",
                        password: "12345678",
                        classInCharge: null,
                        isDeleted: false
                    });
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZpY2VzL3NjaG9vbC9hZG1pbi9sb2NhbC1hZG1pbi1zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELHNCQUFzQixtQkFBTyxDQUFDLHVGQUEwQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDIiwiZmlsZSI6Im1haW4uNThhYjhjMDU1ZDEzZGVhNDY0NDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5fZGVmZW5zaXZlXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tZGVmZW5zaXZlXCIpO1xyXG5jbGFzcyBMb2NhbEFkbWluU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCB1c2VycyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGNvbnN0IGRpdmlzaW9ucyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGNvbnN0IGRpdkNvdW50ID0gMjtcclxuICAgICAgICBjb25zdCBjb3VudCA9IDI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXZDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRpdmlzaW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImlkXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJkaXZcIiArIGksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kaXZpc2lvbiA9IGRpdmlzaW9ucztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHVzZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImlkXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiICsgaSxcclxuICAgICAgICAgICAgICAgICAgICBpc0FkbWluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lOiBcImFkbWluXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiYWRtaW5cIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0luQ2hhcmdlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2Vycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaWRcIiArIGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiICsgaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBZG1pbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lOiBcIk5pdnlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBcIjEyMzQ1Njc4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzSW5DaGFyZ2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl91c2VyID0gdXNlcnM7XHJcbiAgICB9XHJcbiAgICBnZXREaXZpc2lvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9kaXZpc2lvbik7XHJcbiAgICB9XHJcbiAgICBnZXRVc2VycygpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3VzZXIpO1xyXG4gICAgfVxyXG4gICAgbG9naW4odXNlck5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbih1c2VyTmFtZSwgXCJ1c2VyTmFtZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihwYXNzd29yZCwgXCJwYXNzd29yZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgbGV0IHVzZXIgPSB0aGlzLl91c2VyLmZpbHRlcih0ID0+IHQudXNlck5hbWUgPT09IHVzZXJOYW1lICYmIHQucGFzc3dvcmQgPT09IHBhc3N3b3JkKVswXTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVzZXIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTG9jYWxBZG1pblNlcnZpY2UgPSBMb2NhbEFkbWluU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9jYWwtYWRtaW4tc2VydmljZS5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9