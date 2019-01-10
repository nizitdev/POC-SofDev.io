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
export class ListAdminViewModel extends PageViewModel {

    private _userName: string;
    private _password: string;
    private readonly _adminService: AdminService;
    private readonly _navigationService: NavigationService;
    private _user: User;
    public get userName(): string { return this._userName; }
    public set userName(value: string) { this._userName = value; }
    public get password(): string { return this._password; }
    public set password(value: string) { this._password = value; }

    public get user(): User { return this._user; }
    public constructor(adminService: AdminService, navigationService: NavigationService) {
        super();
        given(navigationService, "navigationService").ensureHasValue().ensureIsObject();

        this._navigationService = navigationService;
        given(adminService, "adminService").ensureHasValue().ensureIsObject();
        this._adminService = adminService;

    }
    public login(): void {
        let that = this;
        this._adminService.login(this.userName, this.password)
            .then(function (result) {
                if (result.isAdmin === true) {
                    that._navigationService.navigate(Routes.listTeachers, {});
                }
                else {

                    that._navigationService.navigate(Routes.listStudents, {});
                }
            }, function (e) {
                console.log(e);
            });
    }
}