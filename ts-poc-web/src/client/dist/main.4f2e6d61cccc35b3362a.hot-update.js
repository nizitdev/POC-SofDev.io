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
                    classInCharge: "div0",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZpY2VzL3NjaG9vbC9hZG1pbi9sb2NhbC1hZG1pbi1zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELHNCQUFzQixtQkFBTyxDQUFDLHVGQUEwQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0MiLCJmaWxlIjoibWFpbi40ZjJlNmQ2MWNjY2MzNWIzMzYyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbl9kZWZlbnNpdmVfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1kZWZlbnNpdmVcIik7XHJcbmNsYXNzIExvY2FsQWRtaW5TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgY29uc3QgZGl2aXNpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgY29uc3QgZGl2Q291bnQgPSAyO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gMjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpdkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgZGl2aXNpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiaWRcIiArIGksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImRpdlwiICsgaSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2RpdmlzaW9uID0gZGl2aXNpb25zO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHVzZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImlkXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiICsgaSxcclxuICAgICAgICAgICAgICAgICAgICBpc0FkbWluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lOiBcImFkbWluXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiYWRtaW5cIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0luQ2hhcmdlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB1c2Vycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJpZFwiICsgaSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIiArIGksXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBZG1pbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6IFwiTml2eWFcIixcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogXCIxMjM0NTY3OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzSW5DaGFyZ2U6IFwiZGl2MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3VzZXIgPSB1c2VycztcclxuICAgIH1cclxuICAgIGdldERpdmlzaW9ucygpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2RpdmlzaW9uKTtcclxuICAgIH1cclxuICAgIGdldFVzZXJzKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fdXNlcik7XHJcbiAgICB9XHJcbiAgICBsb2dpbih1c2VyTmFtZSwgcGFzc3dvcmQpIHtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHVzZXJOYW1lLCBcInVzZXJOYW1lXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHBhc3N3b3JkLCBcInBhc3N3b3JkXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBsZXQgdXNlciA9IHRoaXMuX3VzZXIuZmlsdGVyKHQgPT4gdC51c2VyTmFtZSA9PT0gdXNlck5hbWUgJiYgdC5wYXNzd29yZCA9PT0gcGFzc3dvcmQpWzBdO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodXNlcik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Mb2NhbEFkbWluU2VydmljZSA9IExvY2FsQWRtaW5TZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2NhbC1hZG1pbi1zZXJ2aWNlLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=