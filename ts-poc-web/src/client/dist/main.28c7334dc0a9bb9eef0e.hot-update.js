webpackHotUpdate("main",{

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/btoa.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/is-buffer/index.js":
false,

/***/ "./src/client/pages/manage-todo/manage-todo-view-model.js":
/*!****************************************************************!*\
  !*** ./src/client/pages/manage-todo/manage-todo-view-model.js ***!
  \****************************************************************/
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
const Routes = __webpack_require__(/*! ../routes */ "./src/client/pages/routes.js");
__webpack_require__(/*! ./manage-todo-view.scss */ "./src/client/pages/manage-todo/manage-todo-view.scss");
const n_ject_1 = __webpack_require__(/*! @nivinjoseph/n-ject */ "./node_modules/@nivinjoseph/n-ject/dist/index.js");
const n_defensive_1 = __webpack_require__(/*! @nivinjoseph/n-defensive */ "./node_modules/@nivinjoseph/n-defensive/dist/index.js");
let ManageTodoViewModel = class ManageTodoViewModel extends n_app_1.PageViewModel {
    constructor(todoService, navigationService) {
        super();
        n_defensive_1.given(todoService, "todoService").ensureHasValue().ensureIsObject();
        n_defensive_1.given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._todoService = todoService;
        this._navigationService = navigationService;
        this._operation = "";
        this._id = null;
        this._title = "";
        this._description = "";
    }
    get operation() { return this._operation; }
    get title() { return this._title; }
    set title(value) { this._title = value; }
    get description() { return this._description; }
    set description(value) { this._description = value; }
    save() {
        const savePromise = this._id
            ? this._todoService.updateTodo(this._id, this._title, this._description)
            : this._todoService.createTodo(this._title, this._description);
        savePromise
            .then(() => this._navigationService.navigate(Routes.listTodos, {}))
            .catch(e => console.log(e));
    }
    onEnter(id) {
        if (id && !id.isEmptyOrWhiteSpace()) {
            this._operation = "Update";
            debugger;
            this._todoService.getTodo(id)
                .then(t => {
                this._id = t.id;
                this._title = t.title;
                this._description = t.description;
            })
                .catch(e => console.log(e));
        }
        else {
            this._operation = "Add";
        }
    }
};
ManageTodoViewModel = __decorate([
    n_app_1.template(__webpack_require__(/*! ./manage-todo-view.html */ "./src/client/pages/manage-todo/manage-todo-view.html")),
    n_app_1.route(Routes.manageTodo),
    n_ject_1.inject("TodoService", "NavigationService"),
    __metadata("design:paramtypes", [Object, Object])
], ManageTodoViewModel);
exports.ManageTodoViewModel = ManageTodoViewModel;
//# sourceMappingURL=manage-todo-view-model.js.map

/***/ }),

/***/ "./src/client/pages/school/list-teachers/list-teacher-view.html":
/*!**********************************************************************!*\
  !*** ./src/client/pages/school/list-teachers/list-teacher-view.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-teacher-view\">\r\n    <nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\r\n        <div class=\"navbar-brand\">\r\n            <router-link to=\"/manageTeacher\" class=\"button is-primary create-teacher-button\">Create teacher</router-link>\r\n        </div>\r\n    </nav>\r\n    <div> \r\n        <select >\r\n            <option v-for=\"item in teachers\" :value=\"item\" :key=\"item.id\">\r\n              {{ item.name }}\r\n            </option>\r\n          </select> \r\n    </div>\r\n    <div class=\"teacher-container\">\r\n        <teacherElement v-for=\"item in teachers\" v-bind:key=\"item.id\" v-bind:value=\"item\"></teacherElement>\r\n    </div>\r\n\r\n   \r\n</div>";

/***/ }),

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
    get operation() { return this._operation; }
    get name() { return this._name; }
    set name(value) { this._name = value; }
    get isAdmin() { return this._isAdmin; }
    set isAdmin(value) { this._isAdmin = value; }
    get userName() { return this._userName; }
    set userName(value) { this._userName = value; }
    get password() { return this._password; }
    set password(value) { this._password = value; }
    get classInCharge() {
        return this._classInCharge;
    }
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

/***/ }),

/***/ "./src/client/pages/school/manage-teacher/manage-teacher-view.html":
/*!*************************************************************************!*\
  !*** ./src/client/pages/school/manage-teacher/manage-teacher-view.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"manage-teacher-view\">\r\n    <h1 class=\"title\">\r\n        {{operation}}\r\n    </h1>\r\n\r\n    <form>\r\n        <div class=\"field\">\r\n            <label class=\"label\">Name</label>\r\n            <div class=\"control\">\r\n                <input class=\"input\" type=\"text\" v-model=\"name\" placeholder=\"Name\">\r\n            </div>\r\n        </div>\r\n        <div class=\"field\">\r\n            <label class=\"label\">UserName</label>\r\n            <div class=\"control\">\r\n                <input class=\"input\" type=\"text\" v-model=\"userName\" placeholder=\"UserName\">\r\n            </div>\r\n        </div>\r\n        <div class=\"field\">\r\n            <label class=\"label\">Password</label>\r\n            <div class=\"control\">\r\n                <input class=\"input\" type=\"password\" v-model=\"password\" placeholder=\"Password\">\r\n            </div>\r\n        </div>\r\n       \r\n        <div class=\"field\">\r\n            <label class=\"label\"></label>\r\n            <div class=\"control\">\r\n                Is Active: <input class=\"checkbox\" type=\"checkbox\" v-model=\"isAdmin\">\r\n            </div>\r\n        </div>\r\n        <div class=\"field\">\r\n            <label class=\"label\">class In Charge</label>\r\n        <div class=\"control\">\r\n          <div class=\"select\">\r\n            <select  id=\"selectClassInCharge\"  v-model=\"classInCharge\">\r\n                <option v-for=\"item in divisions\" v-bind:value=\"item.id\" >\r\n                  {{ item.name }}\r\n                </option>\r\n              </select> \r\n          </div>\r\n        </div>\r\n      </div>\r\n        <div class=\"field is-grouped\">\r\n            <div class=\"control\">\r\n                <button class=\"button is-link\" v-on:click.prevent=\"save\">Save</button>\r\n            </div>\r\n            <div class=\"control\">\r\n                <router-link class=\"button is-text\" to=\"/listTeacher\">Cancel</router-link>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>";

/***/ }),

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
    login(userName, password) {
        n_defensive_1.given(userName, "userName").ensureHasValue().ensureIsString();
        n_defensive_1.given(password, "password").ensureHasValue().ensureIsString();
        return Promise.resolve(this._user.filter(t => t.userName === userName && t.password === password));
    }
}
exports.LocalAdminService = LocalAdminService;
//# sourceMappingURL=local-admin-service.js.map

/***/ }),

/***/ "./src/client/services/school/teacher/local-teacher-service.js":
/*!*********************************************************************!*\
  !*** ./src/client/services/school/teacher/local-teacher-service.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const n_defensive_1 = __webpack_require__(/*! @nivinjoseph/n-defensive */ "./node_modules/@nivinjoseph/n-defensive/dist/index.js");
class LocalTeacherService {
    constructor() {
        const teacher = new Array();
        const count = 10;
        for (let i = 0; i < count; i++) {
            teacher.push({
                id: "id" + i,
                name: "teacher" + i,
                userName: "" + i,
                isAdmin: false,
                classInCharge: null,
                password: "12345678",
                isDeleted: false
            });
        }
        this._teacher = teacher;
        this._counter = count;
    }
    getTeachers() {
        return Promise.resolve(this._teacher);
    }
    getTeacher(id) {
        debugger;
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        return Promise.resolve(this._teacher.find(t => t.id === id));
    }
    createTeacher(name, isAdmin, password, userName, classInCharge) {
        debugger;
        n_defensive_1.given(name, "name").ensureHasValue().ensureIsString();
        n_defensive_1.given(isAdmin, "isAdmin").ensureIsBoolean();
        n_defensive_1.given(password, "password").ensureHasValue().ensureIsString();
        n_defensive_1.given(userName, "userName").ensureHasValue().ensureIsString();
        n_defensive_1.given(classInCharge, "classInCharge").ensureIsString();
        const teacher = {
            id: "id" + this._counter,
            name: name,
            isAdmin: isAdmin,
            password: password,
            userName: userName,
            isDeleted: false,
            classInCharge: classInCharge
        };
        this._teacher.push(teacher);
        return Promise.resolve(teacher);
    }
    updateTeacher(id, name, isAdmin, password, userName, classInCharge) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        n_defensive_1.given(name, "name").ensureHasValue().ensureIsString();
        n_defensive_1.given(isAdmin, "isAdmin").ensureIsBoolean();
        n_defensive_1.given(password, "password").ensureHasValue().ensureIsString();
        n_defensive_1.given(userName, "userName").ensureHasValue().ensureIsString();
        n_defensive_1.given(classInCharge, "classInCharge").ensureIsString();
        const teacher = this._teacher.find(t => t.id === id);
        teacher.name = name;
        teacher.isAdmin = isAdmin;
        teacher.password = password;
        teacher.userName = userName;
        teacher.classInCharge = classInCharge;
        return Promise.resolve();
    }
}
exports.LocalTeacherService = LocalTeacherService;
//# sourceMappingURL=local-teacher-service.js.map

/***/ }),

/***/ "./src/client/services/services-installer.js":
/*!***************************************************!*\
  !*** ./src/client/services/services-installer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const local_todo_service_1 = __webpack_require__(/*! ./todo/local-todo-service */ "./src/client/services/todo/local-todo-service.js");
const local_contact_service_1 = __webpack_require__(/*! ./contact/local-contact-service */ "./src/client/services/contact/local-contact-service.js");
const local_admin_service_1 = __webpack_require__(/*! ./school/admin/local-admin-service */ "./src/client/services/school/admin/local-admin-service.js");
const local_teacher_service_1 = __webpack_require__(/*! ./school/teacher/local-teacher-service */ "./src/client/services/school/teacher/local-teacher-service.js");
class ServicesInstaller {
    install(registry) {
        registry.registerSingleton("TodoService", local_todo_service_1.LocalTodoService);
        registry.registerSingleton("ContactService", local_contact_service_1.LocalContactService);
        registry.registerSingleton("TeacherService", local_teacher_service_1.LocalTeacherService);
        registry.registerSingleton("AdminService", local_admin_service_1.LocalAdminService);
    }
}
exports.ServicesInstaller = ServicesInstaller;
//# sourceMappingURL=services-installer.js.map

/***/ }),

/***/ "./src/client/services/todo/local-todo-service.js":
/*!********************************************************!*\
  !*** ./src/client/services/todo/local-todo-service.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const n_defensive_1 = __webpack_require__(/*! @nivinjoseph/n-defensive */ "./node_modules/@nivinjoseph/n-defensive/dist/index.js");
class LocalTodoService {
    constructor() {
        const todos = new Array();
        const count = 10;
        for (let i = 0; i < count; i++) {
            todos.push({
                id: "id" + i,
                title: "title" + i,
                description: "description" + i,
                isCompleted: false,
                isDeleted: false
            });
        }
        this._todos = todos;
        this._counter = count;
    }
    getTodos() {
        return Promise.resolve(this._todos);
    }
    getTodo(id) {
        debugger;
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        return Promise.resolve(this._todos.find(t => t.id === id));
    }
    createTodo(title, description) {
        n_defensive_1.given(title, "title").ensureHasValue().ensureIsString();
        n_defensive_1.given(description, "description").ensureIsString();
        const todo = {
            id: "id" + this._counter,
            title: title,
            description: description,
            isCompleted: false,
            isDeleted: false
        };
        this._todos.push(todo);
        return Promise.resolve(todo);
    }
    updateTodo(id, title, description) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        n_defensive_1.given(title, "title").ensureHasValue().ensureIsString();
        n_defensive_1.given(description, "description").ensureIsString();
        const todo = this._todos.find(t => t.id === id);
        todo.title = title;
        todo.description = description;
        return Promise.resolve();
    }
    markTodoAsCompleted(id) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        const todo = this._todos.find(t => t.id === id);
        todo.isCompleted = true;
        return Promise.resolve();
    }
    deleteTodo(id) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        const todo = this._todos.find(t => t.id === id);
        todo.isDeleted = true;
        return Promise.resolve();
    }
}
exports.LocalTodoService = LocalTodoService;
//# sourceMappingURL=local-todo-service.js.map

/***/ }),

/***/ "./src/client/services/todo/remote-todo-service.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL21hbmFnZS10b2RvL21hbmFnZS10b2RvLXZpZXctbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9wYWdlcy9zY2hvb2wvbGlzdC10ZWFjaGVycy9saXN0LXRlYWNoZXItdmlldy5odG1sIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcGFnZXMvc2Nob29sL21hbmFnZS10ZWFjaGVyL21hbmFnZS10ZWFjaGVyLXZpZXctbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9wYWdlcy9zY2hvb2wvbWFuYWdlLXRlYWNoZXIvbWFuYWdlLXRlYWNoZXItdmlldy5odG1sIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvc2VydmljZXMvc2Nob29sL2FkbWluL2xvY2FsLWFkbWluLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zZXJ2aWNlcy9zY2hvb2wvdGVhY2hlci9sb2NhbC10ZWFjaGVyLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zZXJ2aWNlcy9zZXJ2aWNlcy1pbnN0YWxsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zZXJ2aWNlcy90b2RvL2xvY2FsLXRvZG8tc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsMkVBQW9CO0FBQzVDLGVBQWUsbUJBQU8sQ0FBQywrQ0FBVztBQUNsQyxtQkFBTyxDQUFDLHFGQUF5QjtBQUNqQyxpQkFBaUIsbUJBQU8sQ0FBQyw2RUFB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LCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbl9hcHBfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1hcHBcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuLi9yb3V0ZXNcIik7XHJcbnJlcXVpcmUoXCIuL21hbmFnZS10b2RvLXZpZXcuc2Nzc1wiKTtcclxuY29uc3Qgbl9qZWN0XzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tamVjdFwiKTtcclxuY29uc3Qgbl9kZWZlbnNpdmVfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1kZWZlbnNpdmVcIik7XHJcbmxldCBNYW5hZ2VUb2RvVmlld01vZGVsID0gY2xhc3MgTWFuYWdlVG9kb1ZpZXdNb2RlbCBleHRlbmRzIG5fYXBwXzEuUGFnZVZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0b2RvU2VydmljZSwgbmF2aWdhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4odG9kb1NlcnZpY2UsIFwidG9kb1NlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4obmF2aWdhdGlvblNlcnZpY2UsIFwibmF2aWdhdGlvblNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX3RvZG9TZXJ2aWNlID0gdG9kb1NlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UgPSBuYXZpZ2F0aW9uU2VydmljZTtcclxuICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2lkID0gbnVsbDtcclxuICAgICAgICB0aGlzLl90aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgZ2V0IG9wZXJhdGlvbigpIHsgcmV0dXJuIHRoaXMuX29wZXJhdGlvbjsgfVxyXG4gICAgZ2V0IHRpdGxlKCkgeyByZXR1cm4gdGhpcy5fdGl0bGU7IH1cclxuICAgIHNldCB0aXRsZSh2YWx1ZSkgeyB0aGlzLl90aXRsZSA9IHZhbHVlOyB9XHJcbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7IHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjsgfVxyXG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7IHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7IH1cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgY29uc3Qgc2F2ZVByb21pc2UgPSB0aGlzLl9pZFxyXG4gICAgICAgICAgICA/IHRoaXMuX3RvZG9TZXJ2aWNlLnVwZGF0ZVRvZG8odGhpcy5faWQsIHRoaXMuX3RpdGxlLCB0aGlzLl9kZXNjcmlwdGlvbilcclxuICAgICAgICAgICAgOiB0aGlzLl90b2RvU2VydmljZS5jcmVhdGVUb2RvKHRoaXMuX3RpdGxlLCB0aGlzLl9kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgc2F2ZVByb21pc2VcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGUoUm91dGVzLmxpc3RUb2Rvcywge30pKVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICB9XHJcbiAgICBvbkVudGVyKGlkKSB7XHJcbiAgICAgICAgaWYgKGlkICYmICFpZC5pc0VtcHR5T3JXaGl0ZVNwYWNlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gXCJVcGRhdGVcIjtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIHRoaXMuX3RvZG9TZXJ2aWNlLmdldFRvZG8oaWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbih0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lkID0gdC5pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RpdGxlID0gdC50aXRsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdC5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wZXJhdGlvbiA9IFwiQWRkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5NYW5hZ2VUb2RvVmlld01vZGVsID0gX19kZWNvcmF0ZShbXHJcbiAgICBuX2FwcF8xLnRlbXBsYXRlKHJlcXVpcmUoXCIuL21hbmFnZS10b2RvLXZpZXcuaHRtbFwiKSksXHJcbiAgICBuX2FwcF8xLnJvdXRlKFJvdXRlcy5tYW5hZ2VUb2RvKSxcclxuICAgIG5famVjdF8xLmluamVjdChcIlRvZG9TZXJ2aWNlXCIsIFwiTmF2aWdhdGlvblNlcnZpY2VcIiksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW09iamVjdCwgT2JqZWN0XSlcclxuXSwgTWFuYWdlVG9kb1ZpZXdNb2RlbCk7XHJcbmV4cG9ydHMuTWFuYWdlVG9kb1ZpZXdNb2RlbCA9IE1hbmFnZVRvZG9WaWV3TW9kZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hbmFnZS10b2RvLXZpZXctbW9kZWwuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImxpc3QtdGVhY2hlci12aWV3XFxcIj5cXHJcXG4gICAgPG5hdiBjbGFzcz1cXFwibmF2YmFyXFxcIiByb2xlPVxcXCJuYXZpZ2F0aW9uXFxcIiBhcmlhLWxhYmVsPVxcXCJtYWluIG5hdmlnYXRpb25cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWJyYW5kXFxcIj5cXHJcXG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XFxcIi9tYW5hZ2VUZWFjaGVyXFxcIiBjbGFzcz1cXFwiYnV0dG9uIGlzLXByaW1hcnkgY3JlYXRlLXRlYWNoZXItYnV0dG9uXFxcIj5DcmVhdGUgdGVhY2hlcjwvcm91dGVyLWxpbms+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9uYXY+XFxyXFxuICAgIDxkaXY+IFxcclxcbiAgICAgICAgPHNlbGVjdCA+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cXFwiaXRlbSBpbiB0ZWFjaGVyc1xcXCIgOnZhbHVlPVxcXCJpdGVtXFxcIiA6a2V5PVxcXCJpdGVtLmlkXFxcIj5cXHJcXG4gICAgICAgICAgICAgIHt7IGl0ZW0ubmFtZSB9fVxcclxcbiAgICAgICAgICAgIDwvb3B0aW9uPlxcclxcbiAgICAgICAgICA8L3NlbGVjdD4gXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0ZWFjaGVyLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICA8dGVhY2hlckVsZW1lbnQgdi1mb3I9XFxcIml0ZW0gaW4gdGVhY2hlcnNcXFwiIHYtYmluZDprZXk9XFxcIml0ZW0uaWRcXFwiIHYtYmluZDp2YWx1ZT1cXFwiaXRlbVxcXCI+PC90ZWFjaGVyRWxlbWVudD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgXFxyXFxuPC9kaXY+XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5fYXBwXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tYXBwXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vcm91dGVzXCIpO1xyXG5yZXF1aXJlKFwiLi9tYW5hZ2UtdGVhY2hlci12aWV3LnNjc3NcIik7XHJcbmNvbnN0IG5famVjdF8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWplY3RcIik7XHJcbmNvbnN0IG5fZGVmZW5zaXZlXzEgPSByZXF1aXJlKFwiQG5pdmluam9zZXBoL24tZGVmZW5zaXZlXCIpO1xyXG5sZXQgTWFuYWdlVGVhY2hlclZpZXdNb2RlbCA9IGNsYXNzIE1hbmFnZVRlYWNoZXJWaWV3TW9kZWwgZXh0ZW5kcyBuX2FwcF8xLlBhZ2VWaWV3TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IodGVhY2hlclNlcnZpY2UsIG5hdmlnYXRpb25TZXJ2aWNlLCBhZG1pblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oYWRtaW5TZXJ2aWNlLCBcImFkbWluU2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fYWRtaW5TZXJ2aWNlID0gYWRtaW5TZXJ2aWNlO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4odGVhY2hlclNlcnZpY2UsIFwidGVhY2hlclNlcnZpY2VcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX3RlYWNoZXJTZXJ2aWNlID0gdGVhY2hlclNlcnZpY2U7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihuYXZpZ2F0aW9uU2VydmljZSwgXCJuYXZpZ2F0aW9uU2VydmljZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UgPSBuYXZpZ2F0aW9uU2VydmljZTtcclxuICAgICAgICB0aGlzLl9kaXZpc2lvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2lkID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9uYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9pc0FkbWluID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcGFzc3dvcmQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX3VzZXJOYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9jbGFzc0luQ2hhcmdlID0gXCJcIjtcclxuICAgIH1cclxuICAgIGdldCBkaXZpc2lvbnMoKSB7IHJldHVybiB0aGlzLl9kaXZpc2lvbnM7IH1cclxuICAgIGdldCBvcGVyYXRpb24oKSB7IHJldHVybiB0aGlzLl9vcGVyYXRpb247IH1cclxuICAgIGdldCBuYW1lKCkgeyByZXR1cm4gdGhpcy5fbmFtZTsgfVxyXG4gICAgc2V0IG5hbWUodmFsdWUpIHsgdGhpcy5fbmFtZSA9IHZhbHVlOyB9XHJcbiAgICBnZXQgaXNBZG1pbigpIHsgcmV0dXJuIHRoaXMuX2lzQWRtaW47IH1cclxuICAgIHNldCBpc0FkbWluKHZhbHVlKSB7IHRoaXMuX2lzQWRtaW4gPSB2YWx1ZTsgfVxyXG4gICAgZ2V0IHVzZXJOYW1lKCkgeyByZXR1cm4gdGhpcy5fdXNlck5hbWU7IH1cclxuICAgIHNldCB1c2VyTmFtZSh2YWx1ZSkgeyB0aGlzLl91c2VyTmFtZSA9IHZhbHVlOyB9XHJcbiAgICBnZXQgcGFzc3dvcmQoKSB7IHJldHVybiB0aGlzLl9wYXNzd29yZDsgfVxyXG4gICAgc2V0IHBhc3N3b3JkKHZhbHVlKSB7IHRoaXMuX3Bhc3N3b3JkID0gdmFsdWU7IH1cclxuICAgIGdldCBjbGFzc0luQ2hhcmdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jbGFzc0luQ2hhcmdlO1xyXG4gICAgfVxyXG4gICAgc2V0IGNsYXNzSW5DaGFyZ2UodmFsdWUpIHsgdGhpcy5fY2xhc3NJbkNoYXJnZSA9IHZhbHVlOyB9XHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGNvbnN0IHNhdmVQcm9taXNlID0gdGhpcy5faWRcclxuICAgICAgICAgICAgPyB0aGlzLl90ZWFjaGVyU2VydmljZS51cGRhdGVUZWFjaGVyKHRoaXMuX2lkLCB0aGlzLl9uYW1lLCB0aGlzLl9pc0FkbWluLCB0aGlzLl9wYXNzd29yZCwgdGhpcy5fdXNlck5hbWUsIHRoaXMuX2NsYXNzSW5DaGFyZ2UpXHJcbiAgICAgICAgICAgIDogdGhpcy5fdGVhY2hlclNlcnZpY2UuY3JlYXRlVGVhY2hlcih0aGlzLl9uYW1lLCB0aGlzLl9pc0FkbWluLCB0aGlzLl9wYXNzd29yZCwgdGhpcy5fdXNlck5hbWUsIHRoaXMuX2NsYXNzSW5DaGFyZ2UpO1xyXG4gICAgICAgIHNhdmVQcm9taXNlXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuX25hdmlnYXRpb25TZXJ2aWNlLm5hdmlnYXRlKFJvdXRlcy5saXN0VGVhY2hlcnMsIHt9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgfVxyXG4gICAgb25FbnRlcihpZCkge1xyXG4gICAgICAgIHRoaXMuX2FkbWluU2VydmljZS5nZXREaXZpc2lvbnMoKVxyXG4gICAgICAgICAgICAudGhlbih0ID0+IHRoaXMuX2RpdmlzaW9ucyA9IHQpXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgICAgICBpZiAoaWQgJiYgIWlkLmlzRW1wdHlPcldoaXRlU3BhY2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSBcIlVwZGF0ZVwiO1xyXG4gICAgICAgICAgICB0aGlzLl90ZWFjaGVyU2VydmljZS5nZXRUZWFjaGVyKGlkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IHQuaWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0FkbWluID0gdC5pc0FkbWluO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHQubmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJOYW1lID0gdC51c2VyTmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Bhc3N3b3JkID0gdC5wYXNzd29yZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NsYXNzSW5DaGFyZ2UgPSB0LmNsYXNzSW5DaGFyZ2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSBcIkFkZFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuTWFuYWdlVGVhY2hlclZpZXdNb2RlbCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgbl9hcHBfMS50ZW1wbGF0ZShyZXF1aXJlKFwiLi9tYW5hZ2UtdGVhY2hlci12aWV3Lmh0bWxcIikpLFxyXG4gICAgbl9hcHBfMS5yb3V0ZShSb3V0ZXMubWFuYWdlVGVhY2hlciksXHJcbiAgICBuX2plY3RfMS5pbmplY3QoXCJUZWFjaGVyU2VydmljZVwiLCBcIk5hdmlnYXRpb25TZXJ2aWNlXCIsIFwiQWRtaW5TZXJ2aWNlXCIpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtPYmplY3QsIE9iamVjdCwgT2JqZWN0XSlcclxuXSwgTWFuYWdlVGVhY2hlclZpZXdNb2RlbCk7XHJcbmV4cG9ydHMuTWFuYWdlVGVhY2hlclZpZXdNb2RlbCA9IE1hbmFnZVRlYWNoZXJWaWV3TW9kZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hbmFnZS10ZWFjaGVyLXZpZXctbW9kZWwuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIm1hbmFnZS10ZWFjaGVyLXZpZXdcXFwiPlxcclxcbiAgICA8aDEgY2xhc3M9XFxcInRpdGxlXFxcIj5cXHJcXG4gICAgICAgIHt7b3BlcmF0aW9ufX1cXHJcXG4gICAgPC9oMT5cXHJcXG5cXHJcXG4gICAgPGZvcm0+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJsYWJlbFxcXCI+TmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiaW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiIHYtbW9kZWw9XFxcIm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJOYW1lXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwibGFiZWxcXFwiPlVzZXJOYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250cm9sXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJpbnB1dFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdi1tb2RlbD1cXFwidXNlck5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJVc2VyTmFtZVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImxhYmVsXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiaW5wdXRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiB2LW1vZGVsPVxcXCJwYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICBcXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImxhYmVsXFxcIj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRyb2xcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBJcyBBY3RpdmU6IDxpbnB1dCBjbGFzcz1cXFwiY2hlY2tib3hcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiB2LW1vZGVsPVxcXCJpc0FkbWluXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwibGFiZWxcXFwiPmNsYXNzIEluIENoYXJnZTwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250cm9sXFxcIj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VsZWN0XFxcIj5cXHJcXG4gICAgICAgICAgICA8c2VsZWN0ICBpZD1cXFwic2VsZWN0Q2xhc3NJbkNoYXJnZVxcXCIgIHYtbW9kZWw9XFxcImNsYXNzSW5DaGFyZ2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVxcXCJpdGVtIGluIGRpdmlzaW9uc1xcXCIgdi1iaW5kOnZhbHVlPVxcXCJpdGVtLmlkXFxcIiA+XFxyXFxuICAgICAgICAgICAgICAgICAge3sgaXRlbS5uYW1lIH19XFxyXFxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+IFxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQgaXMtZ3JvdXBlZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBpcy1saW5rXFxcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XFxcInNhdmVcXFwiPlNhdmU8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250cm9sXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGNsYXNzPVxcXCJidXR0b24gaXMtdGV4dFxcXCIgdG89XFxcIi9saXN0VGVhY2hlclxcXCI+Q2FuY2VsPC9yb3V0ZXItbGluaz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgbl9kZWZlbnNpdmVfMSA9IHJlcXVpcmUoXCJAbml2aW5qb3NlcGgvbi1kZWZlbnNpdmVcIik7XHJcbmNsYXNzIExvY2FsQWRtaW5TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgY29uc3QgZGl2aXNpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgY29uc3QgZGl2Q291bnQgPSAyO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gMjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpdkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgZGl2aXNpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiaWRcIiArIGksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImRpdlwiICsgaSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2RpdmlzaW9uID0gZGl2aXNpb25zO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdXNlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaWRcIiArIGksXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWRtaW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6IFwiYWRtaW5cIixcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogXCJhZG1pblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzSW5DaGFyZ2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJpZFwiICsgaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FkbWluOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6IFwiTml2eWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiMTIzNDU2NzhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NJbkNoYXJnZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3VzZXIgPSB1c2VycztcclxuICAgIH1cclxuICAgIGdldERpdmlzaW9ucygpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2RpdmlzaW9uKTtcclxuICAgIH1cclxuICAgIGxvZ2luKHVzZXJOYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4odXNlck5hbWUsIFwidXNlck5hbWVcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4ocGFzc3dvcmQsIFwicGFzc3dvcmRcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fdXNlci5maWx0ZXIodCA9PiB0LnVzZXJOYW1lID09PSB1c2VyTmFtZSAmJiB0LnBhc3N3b3JkID09PSBwYXNzd29yZCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTG9jYWxBZG1pblNlcnZpY2UgPSBMb2NhbEFkbWluU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9jYWwtYWRtaW4tc2VydmljZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBuX2RlZmVuc2l2ZV8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWRlZmVuc2l2ZVwiKTtcclxuY2xhc3MgTG9jYWxUZWFjaGVyU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCB0ZWFjaGVyID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSAxMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGVhY2hlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImlkXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJ0ZWFjaGVyXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgdXNlck5hbWU6IFwiXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgaXNBZG1pbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbGFzc0luQ2hhcmdlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiMTIzNDU2NzhcIixcclxuICAgICAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3RlYWNoZXIgPSB0ZWFjaGVyO1xyXG4gICAgICAgIHRoaXMuX2NvdW50ZXIgPSBjb3VudDtcclxuICAgIH1cclxuICAgIGdldFRlYWNoZXJzKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fdGVhY2hlcik7XHJcbiAgICB9XHJcbiAgICBnZXRUZWFjaGVyKGlkKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihpZCwgXCJpZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl90ZWFjaGVyLmZpbmQodCA9PiB0LmlkID09PSBpZCkpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlVGVhY2hlcihuYW1lLCBpc0FkbWluLCBwYXNzd29yZCwgdXNlck5hbWUsIGNsYXNzSW5DaGFyZ2UpIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKG5hbWUsIFwibmFtZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihpc0FkbWluLCBcImlzQWRtaW5cIikuZW5zdXJlSXNCb29sZWFuKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihwYXNzd29yZCwgXCJwYXNzd29yZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbih1c2VyTmFtZSwgXCJ1c2VyTmFtZVwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihjbGFzc0luQ2hhcmdlLCBcImNsYXNzSW5DaGFyZ2VcIikuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBjb25zdCB0ZWFjaGVyID0ge1xyXG4gICAgICAgICAgICBpZDogXCJpZFwiICsgdGhpcy5fY291bnRlcixcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgaXNBZG1pbjogaXNBZG1pbixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICB1c2VyTmFtZTogdXNlck5hbWUsXHJcbiAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNsYXNzSW5DaGFyZ2U6IGNsYXNzSW5DaGFyZ2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3RlYWNoZXIucHVzaCh0ZWFjaGVyKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRlYWNoZXIpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlVGVhY2hlcihpZCwgbmFtZSwgaXNBZG1pbiwgcGFzc3dvcmQsIHVzZXJOYW1lLCBjbGFzc0luQ2hhcmdlKSB7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihpZCwgXCJpZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihuYW1lLCBcIm5hbWVcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oaXNBZG1pbiwgXCJpc0FkbWluXCIpLmVuc3VyZUlzQm9vbGVhbigpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4ocGFzc3dvcmQsIFwicGFzc3dvcmRcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4odXNlck5hbWUsIFwidXNlck5hbWVcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oY2xhc3NJbkNoYXJnZSwgXCJjbGFzc0luQ2hhcmdlXCIpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgdGVhY2hlciA9IHRoaXMuX3RlYWNoZXIuZmluZCh0ID0+IHQuaWQgPT09IGlkKTtcclxuICAgICAgICB0ZWFjaGVyLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRlYWNoZXIuaXNBZG1pbiA9IGlzQWRtaW47XHJcbiAgICAgICAgdGVhY2hlci5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gICAgICAgIHRlYWNoZXIudXNlck5hbWUgPSB1c2VyTmFtZTtcclxuICAgICAgICB0ZWFjaGVyLmNsYXNzSW5DaGFyZ2UgPSBjbGFzc0luQ2hhcmdlO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkxvY2FsVGVhY2hlclNlcnZpY2UgPSBMb2NhbFRlYWNoZXJTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2NhbC10ZWFjaGVyLXNlcnZpY2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbG9jYWxfdG9kb19zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi90b2RvL2xvY2FsLXRvZG8tc2VydmljZVwiKTtcclxuY29uc3QgbG9jYWxfY29udGFjdF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9jb250YWN0L2xvY2FsLWNvbnRhY3Qtc2VydmljZVwiKTtcclxuY29uc3QgbG9jYWxfYWRtaW5fc2VydmljZV8xID0gcmVxdWlyZShcIi4vc2Nob29sL2FkbWluL2xvY2FsLWFkbWluLXNlcnZpY2VcIik7XHJcbmNvbnN0IGxvY2FsX3RlYWNoZXJfc2VydmljZV8xID0gcmVxdWlyZShcIi4vc2Nob29sL3RlYWNoZXIvbG9jYWwtdGVhY2hlci1zZXJ2aWNlXCIpO1xyXG5jbGFzcyBTZXJ2aWNlc0luc3RhbGxlciB7XHJcbiAgICBpbnN0YWxsKHJlZ2lzdHJ5KSB7XHJcbiAgICAgICAgcmVnaXN0cnkucmVnaXN0ZXJTaW5nbGV0b24oXCJUb2RvU2VydmljZVwiLCBsb2NhbF90b2RvX3NlcnZpY2VfMS5Mb2NhbFRvZG9TZXJ2aWNlKTtcclxuICAgICAgICByZWdpc3RyeS5yZWdpc3RlclNpbmdsZXRvbihcIkNvbnRhY3RTZXJ2aWNlXCIsIGxvY2FsX2NvbnRhY3Rfc2VydmljZV8xLkxvY2FsQ29udGFjdFNlcnZpY2UpO1xyXG4gICAgICAgIHJlZ2lzdHJ5LnJlZ2lzdGVyU2luZ2xldG9uKFwiVGVhY2hlclNlcnZpY2VcIiwgbG9jYWxfdGVhY2hlcl9zZXJ2aWNlXzEuTG9jYWxUZWFjaGVyU2VydmljZSk7XHJcbiAgICAgICAgcmVnaXN0cnkucmVnaXN0ZXJTaW5nbGV0b24oXCJBZG1pblNlcnZpY2VcIiwgbG9jYWxfYWRtaW5fc2VydmljZV8xLkxvY2FsQWRtaW5TZXJ2aWNlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNlcnZpY2VzSW5zdGFsbGVyID0gU2VydmljZXNJbnN0YWxsZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNlcnZpY2VzLWluc3RhbGxlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBuX2RlZmVuc2l2ZV8xID0gcmVxdWlyZShcIkBuaXZpbmpvc2VwaC9uLWRlZmVuc2l2ZVwiKTtcclxuY2xhc3MgTG9jYWxUb2RvU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCB0b2RvcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gMTA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRvZG9zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiaWRcIiArIGksXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJ0aXRsZVwiICsgaSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdG9kb3MgPSB0b2RvcztcclxuICAgICAgICB0aGlzLl9jb3VudGVyID0gY291bnQ7XHJcbiAgICB9XHJcbiAgICBnZXRUb2RvcygpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3RvZG9zKTtcclxuICAgIH1cclxuICAgIGdldFRvZG8oaWQpIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGlkLCBcImlkXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3RvZG9zLmZpbmQodCA9PiB0LmlkID09PSBpZCkpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKHRpdGxlLCBcInRpdGxlXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGRlc2NyaXB0aW9uLCBcImRlc2NyaXB0aW9uXCIpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgdG9kbyA9IHtcclxuICAgICAgICAgICAgaWQ6IFwiaWRcIiArIHRoaXMuX2NvdW50ZXIsXHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3RvZG9zLnB1c2godG9kbyk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0b2RvKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVRvZG8oaWQsIHRpdGxlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oaWQsIFwiaWRcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4odGl0bGUsIFwidGl0bGVcIikuZW5zdXJlSGFzVmFsdWUoKS5lbnN1cmVJc1N0cmluZygpO1xyXG4gICAgICAgIG5fZGVmZW5zaXZlXzEuZ2l2ZW4oZGVzY3JpcHRpb24sIFwiZGVzY3JpcHRpb25cIikuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBjb25zdCB0b2RvID0gdGhpcy5fdG9kb3MuZmluZCh0ID0+IHQuaWQgPT09IGlkKTtcclxuICAgICAgICB0b2RvLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdG9kby5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuICAgIG1hcmtUb2RvQXNDb21wbGV0ZWQoaWQpIHtcclxuICAgICAgICBuX2RlZmVuc2l2ZV8xLmdpdmVuKGlkLCBcImlkXCIpLmVuc3VyZUhhc1ZhbHVlKCkuZW5zdXJlSXNTdHJpbmcoKTtcclxuICAgICAgICBjb25zdCB0b2RvID0gdGhpcy5fdG9kb3MuZmluZCh0ID0+IHQuaWQgPT09IGlkKTtcclxuICAgICAgICB0b2RvLmlzQ29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVUb2RvKGlkKSB7XHJcbiAgICAgICAgbl9kZWZlbnNpdmVfMS5naXZlbihpZCwgXCJpZFwiKS5lbnN1cmVIYXNWYWx1ZSgpLmVuc3VyZUlzU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgdG9kbyA9IHRoaXMuX3RvZG9zLmZpbmQodCA9PiB0LmlkID09PSBpZCk7XHJcbiAgICAgICAgdG9kby5pc0RlbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkxvY2FsVG9kb1NlcnZpY2UgPSBMb2NhbFRvZG9TZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2NhbC10b2RvLXNlcnZpY2UuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==