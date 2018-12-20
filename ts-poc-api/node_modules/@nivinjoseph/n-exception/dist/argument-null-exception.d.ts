import { ArgumentException } from "./argument-exception";
import { Exception } from "./exception";
export declare class ArgumentNullException extends ArgumentException {
    constructor(argName: string);
    constructor(argName: string, innerException: Exception);
}
