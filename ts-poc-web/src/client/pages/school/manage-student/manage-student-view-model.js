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
require("./manage-student-view.scss");
const n_ject_1 = require("@nivinjoseph/n-ject");
const n_defensive_1 = require("@nivinjoseph/n-defensive");
let ManageStudentViewModel = class ManageStudentViewModel extends n_app_1.PageViewModel {
    constructor(studentService, navigationService, adminService) {
        super();
        n_defensive_1.given(adminService, "adminService").ensureHasValue().ensureIsObject();
        this._adminService = adminService;
        n_defensive_1.given(studentService, "studentService").ensureHasValue().ensureIsObject();
        this._studentService = studentService;
        n_defensive_1.given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;
        this._divisions = [];
        this._operation = "";
        this._id = null;
        this._name = "";
        this._sex = " ";
        this._division = "";
        this._studentMarkEntry = [];
    }
    get studentMarkEntry() { return this._studentMarkEntry; }
    get divisions() { return this._divisions; }
    get operation() { return this._operation; }
    get name() { return this._name; }
    set name(value) { this._name = value; }
    get sex() { return this._sex; }
    set sex(value) { this._sex = value; }
    get division() { return this._division; }
    set division(value) { this._division = value; }
    save() {
        debugger;
        const savePromise = this._id
            ? this._studentService.updateStudent(this._id, this._name, this._sex, this._division)
            : this._studentService.createStudent(this._name, this._sex, this._division);
        savePromise
            .then(() => this._navigationService.navigate(Routes.listStudents, {}))
            .catch(e => console.log(e));
    }
    onEnter(id) {
        this._adminService.getDivisions()
            .then(t => this._divisions = t)
            .catch(e => console.log(e));
        this._studentService.getStudentMarkEntries()
            .then(t => this._studentMarkEntry = t)
            .catch(e => console.log(e));
        if (id && !id.isEmptyOrWhiteSpace()) {
            this._operation = "Update";
            this._studentService.getStudent(id)
                .then(t => {
                this._id = t.id;
                this._name = t.name;
                this._sex = t.sex;
                this._division = t.division;
            })
                .catch(e => console.log(e));
        }
        else {
            this._operation = "Add";
        }
    }
};
ManageStudentViewModel = __decorate([
    n_app_1.template(require("./manage-student-view.html")),
    n_app_1.route(Routes.manageStudent),
    n_ject_1.inject("StudentService", "NavigationService", "AdminService"),
    __metadata("design:paramtypes", [Object, Object, Object])
], ManageStudentViewModel);
exports.ManageStudentViewModel = ManageStudentViewModel;
//# sourceMappingURL=manage-student-view-model.js.map