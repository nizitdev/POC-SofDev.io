"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n_defensive_1 = require("@nivinjoseph/n-defensive");
class LocalContactService {
    constructor() {
        const contacts = new Array();
        const count = 10;
        for (let i = 0; i < count; i++) {
            contacts.push({
                id: "id" + i,
                firstName: "firstName" + i,
                lastName: "lastName" + i,
                isDeleted: false,
                email: "email" + i,
                phoneNo: "phoneNo" + i,
            });
        }
        this._contact = contacts;
        this._counter = count;
    }
    getContacts() {
        return Promise.resolve(this._contact);
    }
    getContact(id) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        return Promise.resolve(this._contact.find(t => t.id === id));
    }
    public searchContacts(text: string): Promise<ReadonlyArray<Contact>>
    {
        given(text, "text").ensureHasValue().ensureIsString();

        return Promise.resolve(this._contact.filter(
            t => t.firstName.includes(text) || t.lastName.includes(text) ||
                t.phoneNo.includes(text) || t.email.includes(text)));
    }
    createContact(firstName, lastName, phoneNo, email) {
        const contact = {
            id: "id" + this._counter,
            firstName: firstName,
            lastName: lastName,
            phoneNo: phoneNo,
            email: email,
            isDeleted: false,
        };
        this._contact.push(contact);
        return Promise.resolve(contact);
    }
    updateContact(id, firstName, lastName, phoneNo, email) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        n_defensive_1.given(firstName, "firstName").ensureHasValue().ensureIsString();
        n_defensive_1.given(lastName, "lastName").ensureIsString();
        n_defensive_1.given(phoneNo, "phoneNo").ensureIsString();
        n_defensive_1.given(email, "email").ensureIsString();
        const contact = this._contact.find(t => t.id === id);
        contact.firstName = firstName;
        contact.lastName = lastName;
        contact.phoneNo = phoneNo;
        contact.email = email;
        return Promise.resolve();
    }
    deleteContact(id) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        const contact = this._contact.find(t => t.id === id);
        contact.isDeleted = true;
        return Promise.resolve();
    }
}
exports.LocalContactService = LocalContactService;
//# sourceMappingURL=local-contact-service.js.map