import { ComponentViewModel, template, element, bind } from "@nivinjoseph/n-app";
// import { given } from "@nivinjoseph/n-defensive";, NavigationService
import { inject } from "@nivinjoseph/n-ject";
// import { StudentService } from "../../../services/school/student/student-service";
// import { Student } from "../../../models/school/student";
// import * as Routes from "../../../pages/routes";
// import "./student-view.scss";
 import { StudentMarkEntry } from "../../../models/school/studentMarkEntry";

@template(require("./studentMark-view.html"))
@element("studentMark")
@bind("value")  
@inject("StudentService", "NavigationService")
export class StudentMarkViewModel extends ComponentViewModel
{ 
//   //  private readonly _navigationService: NavigationService;
    
    
    public get studentMarkEntry(): StudentMarkEntry {
      
     return this.getBound<StudentMarkEntry>("value"); 
    }
    
//     public constructor(studentService: StudentService, navigationService: NavigationService)
//     {
//         super();
//         given(studentService, "studentService").ensureHasValue().ensureIsObject();
//         given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
//         this._navigationService = navigationService;
//     }
    
     
    // public editStudent(): void
    // { 
    //     this._navigationService.navigate(Routes.manageStudent , { 
    //         id: this.student.id });
    // }
    
    // public deleteTeacher(): void
    // {
    //     this._teacherService.deleteTeacher(this.teacher.id)
    //         .then(() => this.teacher.isDeleted = true)
    //         .catch(e => console.log(e));
    // }
}