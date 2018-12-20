"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exception_1 = require("./exception");
exports.Exception = exception_1.Exception;
const application_exception_1 = require("./application-exception");
exports.ApplicationException = application_exception_1.ApplicationException;
const argument_exception_1 = require("./argument-exception");
exports.ArgumentException = argument_exception_1.ArgumentException;
const argument_null_exception_1 = require("./argument-null-exception");
exports.ArgumentNullException = argument_null_exception_1.ArgumentNullException;
const invalid_argument_exception_1 = require("./invalid-argument-exception");
exports.InvalidArgumentException = invalid_argument_exception_1.InvalidArgumentException;
const invalid_operation_exception_1 = require("./invalid-operation-exception");
exports.InvalidOperationException = invalid_operation_exception_1.InvalidOperationException;
const not_implemented_exception_1 = require("./not-implemented-exception");
exports.NotImplementedException = not_implemented_exception_1.NotImplementedException;
Error.prototype.toString = function () {
    let obj = Object(this);
    if (obj !== this)
        throw new TypeError();
    let log = this.stack;
    if (this.innerException)
        log = log + "\n" + "Inner Exception --> " + this.innerException.toString();
    return log;
};
//# sourceMappingURL=index.js.map