import { Contact } from "../../models/contact";


export interface ContactService
{
    getContacts(): Promise<ReadonlyArray<Contact>>;
    searchContacts(text: string): Promise<ReadonlyArray<Contact>>;
    getContact(id: string): Promise<Contact>;
    createContact(firstName: string, lastName: string, phoneNo: string, email: string): Promise<Contact>;
    updateContact(id: string, firstName: string, lastName: string, phoneNo: string, email: string): Promise<void>;
    deleteContact(id: string): Promise<void>;
}