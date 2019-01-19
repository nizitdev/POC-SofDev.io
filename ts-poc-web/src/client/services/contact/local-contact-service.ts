import { ContactService } from "./contact-service";
import { Contact } from "../../models/contact";
import { given } from "@nivinjoseph/n-defensive";


export class LocalContactService implements ContactService
{
    private readonly _contact: Array<Contact>;
    private _counter: number;
    
    
    public constructor()
    {
        const contacts = new Array<Contact>();
        const count = 10;
        
        for (let i = 0; i < count; i++)
        {
            contacts.push({
                id: "id" + i,
                firstName: "firstName" + i,
                lastName: "lastName" + i,
                isDeleted: false,
                email: "email" + i,
                phoneNo: "phoneNo" + i,
                
            });
        }
        
        this._contact = contacts;
        this._counter = count;
    }
    
    
    public getContacts(): Promise<ReadonlyArray<Contact>>
    {
        return Promise.resolve(this._contact);
    }
    
    public getContact(id: string): Promise<Contact>
    {
        given(id, "id")
        .ensureHasValue()
        .ensureIsString()
        .ensure(t => this._contact.some(u => u.id === t), "Contact not found");
        
        return Promise.resolve(this._contact.find(t => t.id === id)as Contact);
    }
    public searchContacts(text: string): Promise<ReadonlyArray<Contact>>
    {
        given(text, "text").ensureHasValue().ensureIsString();

        return Promise.resolve(this._contact.filter(t => t.firstName === text));
    }
    public createContact(firstName: string, lastName: string, phoneNo:  string, email: string): Promise<Contact>
    {
       
        const contact: Contact = {
            id: "id" + this._counter,
            firstName:  firstName,
            lastName: lastName,
            phoneNo: phoneNo,
            email: email,
            isDeleted: false,
            
        };
        
        this._contact.push(contact);
        return Promise.resolve(contact);
    }
    
    public updateContact(id: string, firstName: string, lastName: string, phoneNo:  string, email: string): Promise<void>
    {
        
        given(id, "id")
        .ensureHasValue()
        .ensureIsString()
        .ensure(t => this._contact.some(u => u.id === t), "Contact not found");
         
        given(firstName, "firstName").ensureHasValue().ensureIsString();
        given(lastName, "lastName").ensureIsString();
        given(phoneNo, "phoneNo").ensureIsString();
        given(email, "email").ensureIsString();
        const contact = this._contact.find(t => t.id === id) as Contact;
        contact.firstName = firstName;
        contact.lastName = lastName;
        contact.phoneNo = phoneNo;
        contact.email = email;
        
        return Promise.resolve();
    }
    
     
    
    public deleteContact(id: string): Promise<void>
    {
        given(id, "id")
        .ensureHasValue()
        .ensureIsString()
        .ensure(t => this._contact.some(u => u.id === t), "Contact not found");
        
        const contact = this._contact.find(t => t.id === id) as Contact;
        contact.isDeleted = true;

        return Promise.resolve();
    }
}