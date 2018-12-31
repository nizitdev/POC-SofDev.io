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
const n_defensive_1 = require("@nivinjoseph/n-defensive");
const n_ject_1 = require("@nivinjoseph/n-ject");
const Routes = require("../../../pages/routes");
require("./teacher-view.scss");
let TeacherViewModel = class TeacherViewModel extends n_app_1.ComponentViewModel {
    constructor(teacherService, navigationService) {
        super();
        n_defensive_1.given(teacherService, "teacherService").ensureHasValue().ensureIsObject();
        n_defensive_1.given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._teacherService = teacherService;
        this._navigationService = navigationService;
    }
    get teacher() {
        return this.getBound("value");
    }
    editTeacher() {
        debugger;
        this._navigationService.navigate(Routes.manageTeacher, {
            id: this.teacher.id
        });
    }
    deleteTeacher() {
        this._teacherService.deleteTeacher(this.teacher.id)
            .then(() => this.teacher.isDeleted = true)
            .catch(e => console.log(e));
    }
};
TeacherViewModel = __decorate([
    n_app_1.template(require("./teacher-view.html")),
    n_app_1.element("teacherElement"),
    n_app_1.bind("value"),
    n_ject_1.inject("TeacherService", "NavigationService"),
    __metadata("design:paramtypes", [Object, Object])
], TeacherViewModel);
exports.TeacherViewModel = TeacherViewModel;
//# sourceMappingURL=teacher-view-model.js.map