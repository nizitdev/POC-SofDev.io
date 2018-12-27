import { Exception } from "./exception";
import "@nivinjoseph/n-ext";
export declare class ArgumentException extends Exception {
    private readonly _argName;
    private readonly _reason;
    readonly argName: string;
    readonly reason: string;
    constructor(argName: string, reason: string);
    constructor(argName: string, reason: string, innerException: Exception);
}
