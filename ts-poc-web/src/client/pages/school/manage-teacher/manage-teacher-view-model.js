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
const n_app_1 = require("@nivinjoseph/n-app");
const Routes = require("../../routes");
require("./manage-teacher-view.scss");
const n_ject_1 = require("@nivinjoseph/n-ject");
const n_defensive_1 = require("@nivinjoseph/n-defensive");
let ManageTeacherViewModel = class ManageTeacherViewModel extends n_app_1.ComponentViewModel {
    constructor(teacherService) {
        super();
        n_defensive_1.given(teacherService, " teacherService").ensureHasValue().ensureIsObject();
        this._divisions = [];
        this._operation = "";
        this._name = "";
        this._isAdmin = false;
        this._password = "";
        this._userName = "";
    }
    get division() {
        return this.getBound("value");
    }
    get divisions() {
        return this._divisions;
    }
    get operation() { return this._operation; }
    get name() { return this._name; }
    set name(value) { this._name = value; }
    get isAdmin() { return this._isAdmin; }
    set isAdmin(value) { this._isAdmin = value; }
    get userName() { return this._userName; }
    set userName(value) { this._userName = value; }
    get password() { return this._password; }
    set password(value) { this._password = value; }
};
ManageTeacherViewModel = __decorate([
    n_app_1.template(require("./manage-teacher-view.html")),
    n_app_1.route(Routes.manageTeacher),
    n_app_1.bind("value"),
    n_ject_1.inject("TeacherService", "NavigationService"),
    __metadata("design:paramtypes", [Object])
], ManageTeacherViewModel);
exports.ManageTeacherViewModel = ManageTeacherViewModel;
//# sourceMappingURL=manage-teacher-view-model.js.map