import { Exception } from "./exception";
import "@nivinjoseph/n-ext";
export declare class InvalidOperationException extends Exception {
    private readonly _operation;
    readonly operation: string;
    constructor(operation: string);
    constructor(operation: string, innerException: Exception);
}
