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
let ManageTeacherViewModel = class ManageTeacherViewModel extends n_app_1.PageViewModel {
    constructor(teacherService, navigationService) {
        super();
        n_defensive_1.given(teacherService, " teacherService").ensureHasValue().ensureIsObject();
        n_defensive_1.given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._teacherService = teacherService;
        this._navigationService = navigationService;
        this._operation = "";
        this._id = null;
        this._firstName = "";
        this._lastName = "";
        this._sex = "";
        this._address = "";
        this._dateOfBirth = "";
    }
    get operation() { return this._operation; }
    get firstName() { return this._firstName; }
    set firstName(value) { this._firstName = value; }
    get lastName() { return this._lastName; }
    set lastName(value) { this._lastName = value; }
    get sex() { return this._sex; }
    set sex(value) { this._sex = value; }
    get dateOfBirth() { return this._dateOfBirth; }
    set dateOfBirth(value) { this._dateOfBirth = value; }
    get address() { return this._address; }
    set address(value) { this._address = value; }
    save() {
        debugger;
        const savePromise = this._id
            ? this._teacherService.updateTeacher(this._id, this._firstName, this._lastName, this._dateOfBirth, this._sex, this._address)
            : this._teacherService.createTeacher(this._firstName, this._lastName, this._dateOfBirth, this._sex, this._address);
        savePromise
            .then(() => this._navigationService.navigate(Routes.listTeachers, {}))
            .catch(e => console.log(e));
    }
    onEnter(id) {
        if (id && !id.isEmptyOrWhiteSpace()) {
            this._operation = "Update";
            this._teacherService.getTeacher(id)
                .then(t => {
                this._id = t.id;
                this._firstName = t.firstName;
                this._lastName = t.lastName;
                this._address = t.address;
                this._sex = t.sex;
                this._dateOfBirth = t.dateOfBirth;
            })
                .catch(e => console.log(e));
        }
        else {
            this._operation = "Add";
        }
    }
};
ManageTeacherViewModel = __decorate([
    n_app_1.template(require("./manage-teacher-view.html")),
    n_app_1.route(Routes.manageTeacher),
    n_ject_1.inject("TeacherService", "NavigationService"),
    __metadata("design:paramtypes", [Object, Object])
], ManageTeacherViewModel);
exports.ManageTeacherViewModel = ManageTeacherViewModel;
//# sourceMappingURL=manage-teacher-view-model.js.map