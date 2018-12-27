import * as assert from "assert";
import "@nivinjoseph/n-ext";
import  
{
    // ApplicationException,
    // ArgumentException,
    ArgumentNullException,
    // InvalidArgumentException,
    // InvalidOperationException
} from "../src/index";

suite("ArgumentNullException", () =>
{
    suite("name property", () =>
    {
        test("should have the right name", () =>
        {
            let exp = new ArgumentNullException("test exception");
            
            assert.strictEqual(exp.name, "ArgumentNullException");
        });
    });
    
    suite("message property", () =>
    {
        test("should be formated with provided value when argName is provided", () =>
        {
            let exp = new ArgumentNullException("i");
            
            assert.strictEqual(exp.message, "Argument 'i' is NULL.");
        });
        
        test("should be formated with default value when argName is null", () =>
        {
            let exp = new ArgumentNullException(null);
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is NULL.");
        });

        test("should be formated with default value when argName is an empty string", () =>
        {
            let exp = new ArgumentNullException("");
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is NULL.");
        });

        test("should be formated with default value when argName is a space character", () =>
        {
            let exp = new ArgumentNullException(" ");
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is NULL.");
        });
    });
    
    suite("base class reason property", () =>
    {
        test("should be 'is NULL'", () =>
        {
            let exp = new ArgumentNullException("i");
            
            assert.strictEqual(exp.reason, "is NULL");
        });
    });
    
    suite("argName property", () =>
    {
        test("should be value that is provided when argName argument is provided", () =>
        {
            let exp = new ArgumentNullException("i");
            
            assert.strictEqual(exp.argName, "i");
        });
        
        test("should be default value when argName is null", () =>
        {
            let exp = new ArgumentNullException(null);
            
            assert.strictEqual(exp.argName, "<UNKNOWN>");
        });
        
        test("should be default value when argName is a space character", () =>
        {
            let exp = new ArgumentNullException(" ");
            
            assert.strictEqual(exp.argName, "<UNKNOWN>");
        });
        
        test("should be default value when argName is an empty string", () =>
        {
            let exp = new ArgumentNullException("");
            
            assert.strictEqual(exp.argName, "<UNKNOWN>");
        });
    });
    
    suite("innerException property", () =>
    {
        test("should be null when no innerException argument is provided", () =>
        {
            let exp = new ArgumentNullException("404");
            
            assert.strictEqual(exp.innerException, null);
        });
        
        test("should be the same object that was provided as the innerException argument", () =>
        {
            let innerExp = new ArgumentNullException("401");
            let exp = new ArgumentNullException("404", innerExp);
            
            assert.strictEqual(exp.innerException, innerExp);
        });
    });
    
    suite("stack property", () =>
    {
        test("should have value", () =>
        {
            let exp = new ArgumentNullException("404");
            
            assert.ok(exp.stack != null && exp.stack !== undefined && !exp.stack.isEmptyOrWhiteSpace());
        });
    });
});