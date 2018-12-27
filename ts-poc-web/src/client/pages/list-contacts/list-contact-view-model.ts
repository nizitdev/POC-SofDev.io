import { PageViewModel, template, route } from "@nivinjoseph/n-app";
import * as Routes from "../routes";
import "./list-contact-view.scss";
import { inject } from "@nivinjoseph/n-ject";
import { given } from "@nivinjoseph/n-defensive";
import { Contact } from "../../models/contact";
import { ContactService } from "../../services/contact/contact-service";


@template(require("./list-contact-view.html"))
@route(Routes.listContacts)
@inject("ContactService")    
export class ListContactViewModel extends PageViewModel
{
    private readonly _contactService: ContactService;
    private _contacts:  ReadonlyArray<Contact>;
    private _searchText: string;
    
    public get contacts(): ReadonlyArray<Contact> { return this._contacts; }
    public get searchText(): string { return this._searchText; }
    public set searchText(value: string) { this._searchText = value; }
    
    public constructor(contactService: ContactService)
    {
        super();
        given(contactService, "contactService").ensureHasValue().ensureIsObject();
        this._contactService = contactService;
        this._contacts = [];
    }
    
    public search(): void
    {
        
        this._contactService.searchContacts(this.searchText)
            .then(t => this._contacts = t)
            .catch(e => console.log(e));
    }
    protected onEnter(): void
    {
        this._contactService.getContacts()
            .then(t => this._contacts = t)
            .catch(e => console.log(e));
    }
}