"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exception_1 = require("./exception");
require("@nivinjoseph/n-ext");
class InvalidOperationException extends exception_1.Exception {
    get operation() { return this._operation; }
    constructor(operation, innerException) {
        if (operation == null || operation.isEmptyOrWhiteSpace())
            operation = "<UNKNOWN>";
        const message = "Operation '{0}' is invalid.".format(operation);
        super(message, innerException);
        this._operation = operation;
    }
}
exports.InvalidOperationException = InvalidOperationException;
//# sourceMappingURL=invalid-operation-exception.js.map