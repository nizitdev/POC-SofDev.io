import { PageViewModel, template, route, NavigationService } from "@nivinjoseph/n-app";
import "../admin/admin-view.scss";
import * as Routes from "../../routes";
import { AdminService } from "../../../services/school/admin/admin-service";
import { User } from "../../../models/school/user";
import { given } from "@nivinjoseph/n-defensive";
import { inject } from "@nivinjoseph/n-ject";

@template(require("../admin/admin-view.html"))
@route(Routes.adminPage)
@inject("AdminService", "NavigationService")
export class ListAdminViewModel extends PageViewModel
{
    private _userName: string | null;
    private _password: string | null;
    private readonly _adminService: AdminService;
    private readonly _navigationService: NavigationService;
    private _user: User | null;


    public get userName(): string | null { return this._userName; }
    public set userName(value: string | null) { this._userName = value; }

    public get password(): string | null { return this._password; }
    public set password(value: string | null) { this._password = value; }

    public get user(): User | null { return this._user; }


    public constructor(adminService: AdminService, navigationService: NavigationService)
    {
        super();

        given(adminService, "adminService").ensureHasValue().ensureIsObject();
        this._adminService = adminService;

        given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;

        this._userName = null;
        this._password = null;
        this._user = null;

    }
    

    // public async login(): Promise<void>
    // {
    //     given(this, "this")
    //         .ensure(t => t._userName != null && this._password != null, "username and password must be set");

    //     try 
    //     {
    //         this._user = await this._adminService.login(this.userName as string, this.password as string);
    //         if (this._user.isAdmin === true)
    //         {
    //             this._navigationService.navigate(Routes.listTeachers, {});
    //         }
    //         else
    //         {
    //             this._navigationService.navigate(Routes.listStudents, {});
    //         }
    //     }
    //     catch (error)
    //     {
    //         console.log(error);
    //     }
    // }

    public async login(): Promise<void>
    {
        given(this, "this")
            .ensure(t => t._userName != null && this._password != null, "username and password must be set");

        this._adminService.login(this.userName as string, this.password as string)
            .then(t =>
            {
                this._user = t;
                if (this._user.isAdmin === true)
                {
                    this._navigationService.navigate(Routes.listTeachers, {});
                }
                else
                {
                    this._navigationService.navigate(Routes.listStudents, {});
                }
            })
            .catch(e => console.log(e));
        
        console.log("I am executing");
    }
}