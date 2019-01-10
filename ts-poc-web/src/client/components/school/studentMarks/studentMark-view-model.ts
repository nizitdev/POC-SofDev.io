import { ComponentViewModel, template, element, bind } from "@nivinjoseph/n-app";
import { inject } from "@nivinjoseph/n-ject";

@template(require("./studentMark-view.html"))
@element("studentMark")
@bind("value")  
@inject("StudentService", "NavigationService")
export class StudentMarkViewModel extends ComponentViewModel
{ 
    
}