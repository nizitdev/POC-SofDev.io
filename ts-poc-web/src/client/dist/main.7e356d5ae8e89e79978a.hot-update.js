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
        let user = this._user.filter(t => t.userName === userName && t.password === password)[0];
        return Promise.resolve(user);
    }
}
exports.LocalAdminService = LocalAdminService;
//# sourceMappingURL=local-admin-service.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZpY2VzL3NjaG9vbC9hZG1pbi9sb2NhbC1hZG1pbi1zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELHNCQUFzQixtQkFBTyxDQUFDLHVGQUEwQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQyIsImZpbGUiOiJtYWluLjdlMzU2ZDVhZThlODllNzk5NzhhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBuX2RlZmVuc2l2ZV8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWRlZmVuc2l2ZVwiKTtcclxuY2xhc3MgTG9jYWxBZG1pblNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc3QgdXNlcnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBjb25zdCBkaXZpc2lvbnMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBjb25zdCBkaXZDb3VudCA9IDI7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSAyO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGl2Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBkaXZpc2lvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJpZFwiICsgaSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZGl2XCIgKyBpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGl2aXNpb24gPSBkaXZpc2lvbnM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB1c2Vycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJpZFwiICsgaSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIiArIGksXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBZG1pbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTogXCJhZG1pblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBcImFkbWluXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NJbkNoYXJnZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChpICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImlkXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIiArIGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWRtaW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTogXCJOaXZ5YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogXCIxMjM0NTY3OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0luQ2hhcmdlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdXNlciA9IHVzZXJzO1xyXG4gICAgfVxyXG4gICAgZ2V0RGl2aXNpb25zKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fZGl2aXNpb24pO1xyXG4gICAgfVxyXG4gICAgZ2V0VXNlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl91c2VyKTtcclxuICAgIH1cclxuICAgIGxvZ2luKHVzZXJOYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4odXNlck5hbWUsIFwidXNlck5hbWVcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4ocGFzc3dvcmQsIFwicGFzc3dvcmRcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIGxldCB1c2VyID0gdGhpcy5fdXNlci5maWx0ZXIodCA9PiB0LnVzZXJOYW1lID09PSB1c2VyTmFtZSAmJiB0LnBhc3N3b3JkID09PSBwYXNzd29yZClbMF07XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1c2VyKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkxvY2FsQWRtaW5TZXJ2aWNlID0gTG9jYWxBZG1pblNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvY2FsLWFkbWluLXNlcnZpY2UuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==