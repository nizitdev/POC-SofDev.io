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
require("./list-contact-view.scss");
const n_ject_1 = require("@nivinjoseph/n-ject");
const n_defensive_1 = require("@nivinjoseph/n-defensive");
let ListContactViewModel = class ListContactViewModel extends n_app_1.PageViewModel {
    constructor(contactService) {
        super();
        n_defensive_1.given(contactService, "contactService").ensureHasValue().ensureIsObject();
        this._contactService = contactService;
        this._contacts = [];
    }
    get contacts() { return this._contacts; }
    get searchText() { return this._searchText; }
    set searchText(value) { this._searchText = value; }
    search() {
        this._contactService.searchContacts(this.searchText)
            .then(t => this._contacts = t)
            .catch(e => console.log(e));
    }
    onEnter() {
        this._contactService.getContacts()
            .then(t => this._contacts = t)
            .catch(e => console.log(e));
    }
};
ListContactViewModel = __decorate([
    n_app_1.template(require("./list-contact-view.html")),
    n_app_1.route(Routes.listContacts),
    n_ject_1.inject("ContactService"),
    __metadata("design:paramtypes", [Object])
], ListContactViewModel);
exports.ListContactViewModel = ListContactViewModel;
//# sourceMappingURL=list-contact-view-model.js.map