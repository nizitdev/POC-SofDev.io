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
const Routes = require("../routes");
require("./manage-contact-view.scss");
const n_ject_1 = require("@nivinjoseph/n-ject");
const n_defensive_1 = require("@nivinjoseph/n-defensive");
let ManageContactViewModel = class ManageContactViewModel extends n_app_1.PageViewModel {
    constructor(contactService, navigationService) {
        super();
        n_defensive_1.given(contactService, "contactService").ensureHasValue().ensureIsObject();
        n_defensive_1.given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._contactService = contactService;
        this._navigationService = navigationService;
        this._operation = "";
        this._id = null;
        this._firstName = "";
        this._lastName = "";
        this._email = "";
        this._phoneNo = "";
    }
    get operation() { return this._operation; }
    get firstName() { return this._firstName; }
    set firstName(value) { this._firstName = value; }
    get lastName() { return this._lastName; }
    set lastName(value) { this._lastName = value; }
    get email() { return this._email; }
    set email(value) { this._email = value; }
    get phoneNo() { return this._phoneNo; }
    set phoneNo(value) { this._phoneNo = value; }
    save() {
        const savePromise = this._id
            ? this._contactService.updateContact(this._id, this._firstName, this._lastName, this._phoneNo, this._email)
            : this._contactService.createContact(this._firstName, this._lastName, this._phoneNo, this._email);
        savePromise
            .then(() => this._navigationService.navigate(Routes.listContacts, {}))
            .catch(e => console.log(e));
    }
    onEnter(id) {
        if (id && !id.isEmptyOrWhiteSpace()) {
            this._operation = "Update";
            this._contactService.getContact(id)
                .then(t => {
                this._id = t.id;
                this._firstName = t.firstName;
                this._lastName = t.lastName;
                this._phoneNo = t.phoneNo;
                this._email = t.email;
            })
                .catch(e => console.log(e));
        }
        else {
            this._operation = "Add";
        }
    }
};
ManageContactViewModel = __decorate([
    n_app_1.template(require("./manage-contact-view.html")),
    n_app_1.route(Routes.manageContact),
    n_ject_1.inject("ContactService", "NavigationService"),
    __metadata("design:paramtypes", [Object, Object])
], ManageContactViewModel);
exports.ManageContactViewModel = ManageContactViewModel;
//# sourceMappingURL=manage-contact-view-model.js.map