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
        return Promise.resolve(this._division);
    }
    login(userName, password) {
        n_defensive_1.given(userName, "userName").ensureHasValue().ensureIsString();
        n_defensive_1.given(password, "password").ensureHasValue().ensureIsString();
        return Promise.resolve(this._user.filter(t => t.userName === userName && t.password === password));
    }
}
exports.LocalAdminService = LocalAdminService;
//# sourceMappingURL=local-admin-service.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZpY2VzL3NjaG9vbC9hZG1pbi9sb2NhbC1hZG1pbi1zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELHNCQUFzQixtQkFBTyxDQUFDLHVGQUEwQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0MiLCJmaWxlIjoibWFpbi4zYTg4MGI5MzkxOTI3MDQ5ZWY1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbl9kZWZlbnNpdmVfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1kZWZlbnNpdmVcIik7XHJcbmNsYXNzIExvY2FsQWRtaW5TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgY29uc3QgZGl2aXNpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgY29uc3QgZGl2Q291bnQgPSAyO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gMjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpdkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgZGl2aXNpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiaWRcIiArIGksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImRpdlwiICsgaSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2RpdmlzaW9uID0gZGl2aXNpb25zO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdXNlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaWRcIiArIGksXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWRtaW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6IFwiYWRtaW5cIixcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogXCJhZG1pblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzSW5DaGFyZ2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJpZFwiICsgaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FkbWluOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6IFwiTml2eWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiMTIzNDU2NzhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NJbkNoYXJnZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3VzZXIgPSB1c2VycztcclxuICAgIH1cclxuICAgIGdldERpdmlzaW9ucygpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2RpdmlzaW9uKTtcclxuICAgIH1cclxuICAgIGdldFVzZXJzKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fZGl2aXNpb24pO1xyXG4gICAgfVxyXG4gICAgbG9naW4odXNlck5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbih1c2VyTmFtZSwgXCJ1c2VyTmFtZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihwYXNzd29yZCwgXCJwYXNzd29yZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl91c2VyLmZpbHRlcih0ID0+IHQudXNlck5hbWUgPT09IHVzZXJOYW1lICYmIHQucGFzc3dvcmQgPT09IHBhc3N3b3JkKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Mb2NhbEFkbWluU2VydmljZSA9IExvY2FsQWRtaW5TZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2NhbC1hZG1pbi1zZXJ2aWNlLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=