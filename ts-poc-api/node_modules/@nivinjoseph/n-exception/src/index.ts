import { Exception } from "./exception";
import { ApplicationException } from "./application-exception";
import { ArgumentException } from "./argument-exception";
import { ArgumentNullException } from "./argument-null-exception";
import { InvalidArgumentException } from "./invalid-argument-exception";
import { InvalidOperationException } from "./invalid-operation-exception";
import { NotImplementedException } from "./not-implemented-exception";

Error.prototype.toString = function ()
{
    let obj = Object(this);
    if (obj !== this)
        throw new TypeError();

    let log = this.stack;
    if (this.innerException)
        log = log + "\n" + "Inner Exception --> " + this.innerException.toString();

    return log;
};

export
{
    Exception,
    ApplicationException,
    ArgumentException,
    ArgumentNullException,
    InvalidArgumentException,
    InvalidOperationException,
    NotImplementedException
};