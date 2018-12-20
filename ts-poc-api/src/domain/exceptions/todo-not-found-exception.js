"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n_exception_1 = require("@nivinjoseph/n-exception");
const n_defensive_1 = require("@nivinjoseph/n-defensive");
class TodoNotFoundException extends n_exception_1.ApplicationException {
    constructor(id) {
        n_defensive_1.given(id, "id").ensureHasValue().ensureIsString();
        super(`Todo with id '${id}' was not found.`);
    }
}
exports.TodoNotFoundException = TodoNotFoundException;
//# sourceMappingURL=todo-not-found-exception.js.map