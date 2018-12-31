import { ComponentViewModel, template, element, bind, NavigationService } from "@nivinjoseph/n-app";
import { given } from "@nivinjoseph/n-defensive";
import { inject } from "@nivinjoseph/n-ject";
import { TeacherService } from "../../../services/school/teacher/teacher-service";
import { Student } from "../../../models/school/student";
import * as Routes from "../../../pages/routes";
import "./student-view.scss";

@template(require("./student-view.html"))
@element("studentElem")
@bind("value")  
@inject("TeacherService", "NavigationService")
export class TeacherViewModel extends ComponentViewModel
{
    private readonly _teacherService: TeacherService;
    private readonly _navigationService: NavigationService;
     
    public get teacher(): Student {
      
     return this.getBound<Student>("value"); 
    }
    public constructor(teacherService: TeacherService, navigationService: NavigationService)
    {
        super();
        given(teacherService, "teacherService").ensureHasValue().ensureIsObject();
        given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._teacherService = teacherService;
        this._navigationService = navigationService;
    }
    
    
    public editTeacher(): void
    {
        this._navigationService.navigate(Routes.manageTeacher , { id: this.teacher.id });
    }
    
    public deleteTeacher(): void
    {
        this._teacherService.deleteTeacher(this.teacher.id)
            .then(() => this.teacher.isDeleted = true)
            .catch(e => console.log(e));
    }
}