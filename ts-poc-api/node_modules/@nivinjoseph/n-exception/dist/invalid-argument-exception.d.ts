import { ArgumentException } from "./argument-exception";
import { Exception } from "./exception";
export declare class InvalidArgumentException extends ArgumentException {
    constructor(argName: string);
    constructor(argName: string, innerException: Exception);
}
