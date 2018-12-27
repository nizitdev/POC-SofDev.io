import { PageViewModel, template, route, NavigationService } from "@nivinjoseph/n-app";
import * as Routes from "../routes";
import "./manage-contact-view.scss";
import { inject } from "@nivinjoseph/n-ject";
import { ContactService } from "../../services/contact/contact-service";
import { given } from "@nivinjoseph/n-defensive";


@template(require("./manage-contact-view.html"))
@route(Routes.manageContact)
@inject("ContactService", "NavigationService")
export class ManageContactViewModel extends PageViewModel
{
    private readonly _contactService: ContactService;
    private readonly _navigationService: NavigationService;
    private _operation: string;
    private _id: string | null;
    private _firstName: string;
    private _lastName: string;
    private _phoneNo: string;
    private _email: string;

    
    public get operation(): string { return this._operation; }

    public get firstName(): string { return this._firstName; }
    public set firstName(value: string) { this._firstName = value; }

    public get lastName(): string { return this._lastName; }
    public set lastName(value: string) { this._lastName = value; }

    public get email(): string { return this._email; }
    public set email(value: string) { this._email = value; }

    public get phoneNo(): string { return this._phoneNo; }
    public set phoneNo(value: string) { this._phoneNo = value; }


    public constructor(contactService: ContactService, navigationService: NavigationService)
    {
        super();
        given(contactService, "contactService").ensureHasValue().ensureIsObject();
        given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        
        this._contactService = contactService;
        this._navigationService = navigationService;
        this._operation = "";
        this._id = null; 
        this._firstName = "";
        this._lastName = "";
        this._email = "";
        this._phoneNo = "";
    }


    public save(): void
    {
        const savePromise: Promise<any> = this._id
        ? this._contactService.updateContact(this._id, this._firstName, this._lastName, this._phoneNo, this._email)
            : this._contactService.createContact(this._firstName, this._lastName, this._phoneNo, this._email);
        
        savePromise
            .then(() => this._navigationService.navigate(Routes.listContacts, {}))
            .catch(e => console.log(e));
    }
    
    
    protected onEnter(id?: string): void
    {
        if (id && !id.isEmptyOrWhiteSpace())
        {
            this._operation = "Update";
            
            this._contactService.getContact(id)
                .then(t =>
                {
                    this._id = t.id;
                    this._firstName = t.firstName;
                    this._lastName = t.lastName;
                    this._phoneNo = t.phoneNo;
                    this._email = t.email;
                })
                .catch(e => console.log(e));
        }
        else
        {
            this._operation = "Add";
        }
    }
}