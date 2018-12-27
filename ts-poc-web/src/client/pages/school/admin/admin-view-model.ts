import { PageViewModel, template, route } from "@nivinjoseph/n-app";

import "./admin-view.scss";
import { inject } from "@nivinjoseph/n-ject";
// import { given } from "@nivinjoseph/n-defensive";
// import { Contact } from "../../models/contact";
// import { ContactService } from "../../services/todo/contact-service";
import * as Routes from "../../routes";

@template(require("../admin/admin-view.html"))
@route(Routes.adminPage)
@inject("")    
export class ListAdminViewModel extends PageViewModel
{
    
}