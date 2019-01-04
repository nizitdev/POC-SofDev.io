"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n_defensive_1 = require("@nivinjoseph/n-defensive");
class LocalAdminService {
    constructor() {
        const users = new Array();
        const divisions = new Array();
        const divCount = 2;
        const count = 2;
        for (let i = 0; i < divCount; i++) {
            divisions.push({
                id: "id" + i,
                name: "div" + i,
            });
        }
        this._division = divisions;
        for (let i = 0; i < count; i++) {
            if (i === 0) {
                users.push({
                    id: "id" + i,
                    name: "name" + i,
                    isAdmin: true,
                    userName: "admin",
                    password: "admin",
                    classInCharge: null,
                    isDeleted: false
                });
                if (i !== 0) {
                    users.push({
                        id: "id" + i,
                        name: "name" + i,
                        isAdmin: false,
                        userName: "Nivya",
                        password: "12345678",
                        classInCharge: null,
                        isDeleted: false
                    });
                }
            }
        }
        this._user = users;
    }
    getDivisions() {
        return Promise.resolve(this._division);
    }
    login(userName, password) {
        n_defensive_1.given(userName, "userName").ensureHasValue().ensureIsString();
        n_defensive_1.given(password, "password").ensureHasValue().ensureIsString();
        return Promise.resolve(this._user.filter(t => t.userName === userName && t.password === password));
    }
}
exports.LocalAdminService = LocalAdminService;
//# sourceMappingURL=local-admin-service.js.map