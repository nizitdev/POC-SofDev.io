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
require("./student-view.scss");
let StudentViewModel = class StudentViewModel extends n_app_1.ComponentViewModel {
    constructor(studentService, navigationService) {
        super();
        n_defensive_1.given(studentService, "studentService").ensureHasValue().ensureIsObject();
        n_defensive_1.given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._studentService = studentService;
        this._navigationService = navigationService;
    }
    get student() {
        return this.getBound("value");
    }
    manageStudentMark() {
        this._navigationService.navigate(Routes.manageStudentMark, {
            id: this.student.id
        });
    }
    editStudent() {
        this._navigationService.navigate(Routes.manageStudent, {
            id: this.student.id
        });
    }
    deleteStudent() {
        this._studentService.deleteStudent(this.student.id)
            .then(() => this.student.isDeleted = true)
            .catch(e => console.log(e));
    }
};
StudentViewModel = __decorate([
    n_app_1.template(require("./student-view.html")),
    n_app_1.element("studentElement"),
    n_app_1.bind("value"),
    n_ject_1.inject("StudentService", "NavigationService"),
    __metadata("design:paramtypes", [Object, Object])
], StudentViewModel);
exports.StudentViewModel = StudentViewModel;
//# sourceMappingURL=student-view-model.js.map