import { ArgumentException } from "./argument-exception";
import { Exception } from "./exception";
    
export class InvalidArgumentException extends ArgumentException
{
    public constructor(argName: string);
    public constructor(argName: string, innerException: Exception);
    public constructor(argName: string, innerException?: Exception)
    {   
        super(argName, "is invalid", innerException);
    }
}