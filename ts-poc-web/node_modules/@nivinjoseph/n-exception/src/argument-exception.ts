import { Exception } from "./exception";
import "@nivinjoseph/n-ext";

export class ArgumentException extends Exception
{
    private readonly _argName: string;
    private readonly _reason: string;
    
    
    public get argName(): string { return this._argName; }
    public get reason(): string { return this._reason; }
    
    
    public constructor(argName: string, reason: string);
    public constructor(argName: string, reason: string, innerException: Exception);
    public constructor(argName: string, reason: string, innerException?: Exception)
    {
        if (argName == null || argName.isEmptyOrWhiteSpace())
            argName = "<UNKNOWN>";

        if (reason == null || reason.isEmptyOrWhiteSpace())
            reason = "is not valid";
        
        const message = "Argument '{0}' {1}.".format(argName, reason);

        super(message, innerException);
        
        this._argName = argName;
        this._reason = reason;
    }
}