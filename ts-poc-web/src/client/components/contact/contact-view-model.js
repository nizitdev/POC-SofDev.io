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
require("./contact-view.scss");
const n_ject_1 = require("@nivinjoseph/n-ject");
const n_defensive_1 = require("@nivinjoseph/n-defensive");
const Routes = require("../../pages/routes");
let ContactViewModel = class ContactViewModel extends n_app_1.ComponentViewModel {
    constructor(contactService, navigationService) {
        super();
        n_defensive_1.given(contactService, "contactService").ensureHasValue().ensureIsObject();
        n_defensive_1.given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._contactService = contactService;
        this._navigationService = navigationService;
    }
    get contact() { return this.getBound("value"); }
    editContact() {
        this._navigationService.navigate(Routes.manageContact, { id: this.contact.id });
    }
    deleteContact() {
        this._contactService.deleteContact(this.contact.id)
            .then(() => this.contact.isDeleted = true)
            .catch(e => console.log(e));
    }
};
ContactViewModel = __decorate([
    n_app_1.template(require("./contact-view.html")),
    n_app_1.element("contact"),
    n_app_1.bind("value"),
    n_ject_1.inject("ContactService", "NavigationService"),
    __metadata("design:paramtypes", [Object, Object])
], ContactViewModel);
exports.ContactViewModel = ContactViewModel;
//# sourceMappingURL=contact-view-model.js.map