  
import { given } from "@nivinjoseph/n-defensive";
import { AdminService } from "./admin-service";
import { User } from "../../../models/school/user";
import { Division } from "../../../models/school/division";


export class LocalAdminService implements AdminService
{
    
    private readonly _division: ReadonlyArray<Division>;
 
    private readonly _user: Array<User>; 
    
    
    public constructor()
    {
        const users = new Array<User>();
        const divisions = new Array<Division>();
        const divCount = 2;
        const count = 2;
        for (let i = 0; i < divCount; i++)
        {
            divisions.push({
                    id:  "id" + i,
                    name: "div" + i,
                    
                });
        }
        
        this._division = divisions;


        
        for (let i = 0; i < count; i++)
        {
            debugger;
            if (i === 0) {
                users.push({
                    id: "id" + i,
                    name: "name" + i,
                    isAdmin: true,
                    userName: "admin",
                    password: "admin", 
                    classInCharge : null,
                    isDeleted: false
                });
            }
                if (i !== 0) {
                    users.push({
                        id: "id" + i,
                        name: "name" + i,
                        isAdmin: false,
                        userName: "Nivya",
                        password: "12345678", 
                        classInCharge : "x-a",
                        isDeleted: false
                    });
            }
            }
        
        
        this._user = users;
       // this._counter = count;
    }
    
    public getDivisions(): Promise<ReadonlyArray<Division>> {
        return Promise.resolve(this._division);
    }
    public getUsers(): Promise<ReadonlyArray<User>> {
        return Promise.resolve(this._user);
    }
     
    public login(userName: string, password: string): Promise<User>
    {
        given(userName, "userName").ensureHasValue().ensureIsString();
        given(password, "password").ensureHasValue().ensureIsString();
        debugger;
 let user = this._user.filter(t => t.userName === userName && t.password === password)[0];
        return Promise.resolve(user);
    }
   
    
    
    
     
    
    
}