import {template, route , ComponentViewModel, bind } from "@nivinjoseph/n-app";
import * as Routes from "../../routes";
import "./manage-teacher-view.scss";
import { inject } from "@nivinjoseph/n-ject";
 import { TeacherService } from "../../../services/school/teacher/teacher-service";
  import { given } from "@nivinjoseph/n-defensive";
import { Division } from "../../../models/school/division";
// import { AdminService } from "../../../services/school/admin/admin-service";

@template(require("./manage-teacher-view.html"))
@route(Routes.manageTeacher)
@bind("value") 
@inject("TeacherService", "NavigationService")
export class ManageTeacherViewModel extends ComponentViewModel
{
    public get division(): Division {
      
        return this.getBound<Division>("value"); 
       }
       
  private _divisions:  ReadonlyArray<Division>;
  public get divisions(): ReadonlyArray<Division> {
   
    return this._divisions; }
      
   // private readonly _teacherService: TeacherService;
   // private readonly _navigationService: NavigationService;, NavigationService
    private _operation: string;
   // private _id: string | null;
    private _name: string;
    private _userName: string;
    private _password: string;
    private _isAdmin: boolean;
     
    
    public get operation(): string { return this._operation; }

    public get name(): string { return this._name; }
    public set name(value: string) { this._name = value; }

    public get isAdmin(): boolean { return this._isAdmin; }
    public set isAdmin(value: boolean) { this._isAdmin = value; }

    public get  userName(): string { return this._userName; }
    public set  userName(value: string) { this._userName = value; }

    public get  password(): string { return this._password; }
    public set  password(value: string) { this._password = value; }
   // private readonly _adminService: AdminService;
 
 
    public constructor( teacherService: TeacherService)
    {
        super();
         given( teacherService, " teacherService").ensureHasValue().ensureIsObject();
        //  given(navigationService, "navigationService").ensureHasValue().ensureIsObject();, navigationService: NavigationService
         // given(adminService, "adminService").ensureHasValue().ensureIsObject();
       // this._adminService = adminService;, adminService: AdminService
        this._divisions = [];
       // this._teacherService =  teacherService;
     //  this._navigationService = navigationService;
        this._operation = "";
      //    this._id = null; 
        this._name = "";
        this._isAdmin = false;
        this._password = "";
        this._userName = "";

    } 
    // public save(): void
    // {
    //     debugger;
    //     const savePromise: Promise<any> = this._id
    //     ? this._teacherService.updateTeacher(this._id, this._firstName, this._lastName, this._dateOfBirth, this._sex, this._address)
    //         : this._teacherService.createTeacher(this._firstName, this._lastName, this._dateOfBirth, this._sex, this._address);
        
    //     savePromise
    //         .then(() => this._navigationService.navigate(Routes.listTeachers, {}))
    //         .catch(e => console.log(e));
    // }
    // protected onEnter(): void
    // {
    // alert("h");
    //     this._adminService.getDivisions()
    //         .then(t => this._divisions = t)
    //         .catch(e => console.log(e));
    // }
    
    //  protected onEnter(id?: string): void
    // {
    //     if (id && !id.isEmptyOrWhiteSpace())
    //     {
    //         this._operation = "Update";
            
    //         this._teacherService.getTeacher(id)
    //             .then(t =>
    //             {
    //           //      this._id = t.id;
    //                 this._isAdmin = t.IsAdmin;
    //                 this._name = t.name;
    //                 this._userName = t.userName;
    //                 this._password = t.password;
                   
    //             })
    //             .catch(e => console.log(e));
    //     }
    //     else
    //     {
    //         this._operation = "Add";
    //     }
    // }
    }

    
   
