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
require("./list-teacher-view.scss");
const n_ject_1 = require("@nivinjoseph/n-ject");
const n_defensive_1 = require("@nivinjoseph/n-defensive");
let ListTeachersViewModel = class ListTeachersViewModel extends n_app_1.PageViewModel {
    constructor(teacherService) {
        super();
        n_defensive_1.given(teacherService, "teacherService").ensureHasValue().ensureIsObject();
        this._teacherService = teacherService;
        this._teachers = [];
    }
    get teachers() {
        return this._teachers;
    }
    onEnter() {
        this._teacherService.getTeachers()
            .then(t => this._teachers = t)
            .catch(e => console.log(e));
    }
};
ListTeachersViewModel = __decorate([
    n_app_1.template(require("./list-teacher-view.html")),
    n_app_1.route(Routes.listTeachers),
    n_ject_1.inject("TeacherService"),
    __metadata("design:paramtypes", [Object])
], ListTeachersViewModel);
exports.ListTeachersViewModel = ListTeachersViewModel;
//# sourceMappingURL=list-teacher-view-model.js.map