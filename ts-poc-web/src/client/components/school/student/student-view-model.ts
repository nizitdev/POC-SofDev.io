import { ComponentViewModel, template, element, bind, NavigationService } from "@nivinjoseph/n-app";
import { given } from "@nivinjoseph/n-defensive";
import { inject } from "@nivinjoseph/n-ject";
import { StudentService } from "../../../services/school/student/student-service";
import { Student } from "../../../models/school/student";
import * as Routes from "../../../pages/routes";
import "./student-view.scss";

@template(require("./student-view.html"))
@element("studentElement")
@bind("value")  
@inject("StudentService", "NavigationService")
export class StudentViewModel extends ComponentViewModel
{ 
    private readonly _navigationService: NavigationService;
    private readonly _studentService: StudentService;
    
    public get student(): Student {
      
     return this.getBound<Student>("value"); 
    }
    
    public constructor(studentService: StudentService, navigationService: NavigationService)
    {
        super();
        given(studentService, "studentService").ensureHasValue().ensureIsObject();
        given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._studentService = studentService;
        this._navigationService = navigationService;
    }
    
      public manageStudentMark(): void
    { 
        debugger;
        this._navigationService.navigate(Routes.manageStudentMark , { 
          id: this.student.id});
    }
    public editStudent(): void
    { 
        this._navigationService.navigate(Routes.manageStudent , { 
            id: this.student.id });
    }
    
    public deleteStudent(): void
    {
        debugger;
        this._studentService.deleteStudent(this.student.id)
            .then(() => this.student.isDeleted = true)
            .catch(e => console.log(e));
            
    }
}