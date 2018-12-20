"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nivinjoseph/n-ext");
class Exception extends Error {
    get name() { return this._name; }
    get innerException() { return this._innerException; }
    constructor(message, innerException) {
        if (message == null || message.isEmptyOrWhiteSpace())
            message = "<none>";
        super(message);
        this.message = message;
        this._name = this.getTypeName();
        this._innerException = innerException ? innerException : null;
    }
}
exports.Exception = Exception;
//# sourceMappingURL=exception.js.map