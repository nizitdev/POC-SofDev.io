"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n_exception_1 = require("@nivinjoseph/n-exception");
class ValidationException extends n_exception_1.ApplicationException {
    get errors() { return this._errors; }
    constructor(errors) {
        super(`Validation failed; error data: ${errors ? JSON.stringify(errors) : "NONE"}`);
        this._errors = errors;
    }
}
exports.ValidationException = ValidationException;
//# sourceMappingURL=validation-exception.js.map