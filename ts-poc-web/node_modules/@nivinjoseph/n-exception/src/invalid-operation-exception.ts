import { Exception } from "./exception";
import "@nivinjoseph/n-ext";

export class InvalidOperationException extends Exception
{
    private readonly _operation: string;
    
    
    public get operation(): string { return this._operation; }
    
    
    public constructor(operation: string);
    public constructor(operation: string, innerException: Exception);
    public constructor(operation: string, innerException?: Exception)
    {
        if (operation == null || operation.isEmptyOrWhiteSpace())
            operation = "<UNKNOWN>";

        const message = "Operation '{0}' is invalid.".format(operation);

        super(message, innerException);
        
        this._operation = operation;
    }
}