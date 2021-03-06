import { template, route, PageViewModel, NavigationService } from "@nivinjoseph/n-app";
import * as Routes from "../../routes";
import "./manage-teacher-view.scss";
import { inject } from "@nivinjoseph/n-ject";
import { TeacherService } from "../../../services/school/teacher/teacher-service";
import { given } from "@nivinjoseph/n-defensive";
import { Division } from "../../../models/school/division";
import { AdminService } from "../../../services/school/admin/admin-service";
import { Qualification } from "../../../models/school/qualification";


@template(require("./manage-teacher-view.html"))
@route(Routes.manageTeacher)
@inject("TeacherService", "NavigationService", "AdminService")
export class ManageTeacherViewModel extends PageViewModel {

    private readonly _teacherService: TeacherService;
    private readonly _navigationService: NavigationService;
    private readonly _adminService: AdminService; 
    
    private _divisions: ReadonlyArray<Division>;
    public get divisions(): ReadonlyArray<Division> {return this._divisions; }
  
    private _qualifications: ReadonlyArray<Qualification>;
    public get qualifications(): ReadonlyArray<Qualification> {return this._qualifications; }

    private _operation: string;
    private _id: string | null;
    private _name: string;
    private _userName: string;
    private _password: string;
    private _isAdmin: boolean;
    private _classInCharge:  string ;
    private _qualification:  Array<string> ;
     
    public get operation(): string { return this._operation; }

    public get name(): string { return this._name; }
    public set name(value: string) { this._name = value; }

    public get isAdmin(): boolean { return this._isAdmin; }
    public set isAdmin(value: boolean) { this._isAdmin = value; }

    public get userName(): string { return this._userName; }
    public set userName(value: string) { this._userName = value; }

    public get password(): string { return this._password; }
    public set password(value: string) { this._password = value; }

    public get  classInCharge(): string {  return this._classInCharge; }
    public set  classInCharge(value:   string ) { this._classInCharge = value; } 

    public get  qualification(): Array<string> {  return this._qualification; }
    public set  qualification(value:   Array<string>  ) { this._qualification = value; } 

    public constructor(teacherService: TeacherService, navigationService: NavigationService, adminService: AdminService,  ) {
        super();
        given(adminService, "adminService").ensureHasValue().ensureIsObject();
        this._adminService = adminService; 
        given(teacherService, "teacherService").ensureHasValue().ensureIsObject();
        this._teacherService = teacherService;
        given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;
         
        this._divisions = [];
        this._qualifications = [];
        this._operation = "";
        this._id = null;
        this._name = "";
        this._isAdmin = false;
        this._password = "";
        this._userName = "";
        this._classInCharge = "";
        this.qualification =  [];
    }

    public save(): void {
      
        
       const savePromise: Promise<any> = this._id
            ? this._teacherService.updateTeacher(this._id, this._name, this._isAdmin, this._password, this._userName, this._classInCharge, this._qualification)
            : this._teacherService.createTeacher(this._name, this._isAdmin, this._password, this._userName, this._classInCharge, this._qualification);
            
        savePromise
            .then(() => this._navigationService.navigate(Routes.listTeachers, {}))
            .catch(e => console.log(e));
    }


    protected onEnter(id?: string): void {
        this._adminService.getDivisions()
            .then(t => this._divisions = t)
            .catch(e => console.log(e));

            this._teacherService.getQualification()
            .then(t => this._qualifications = t)
            .catch(e => console.log(e));

        if (id && !id.isEmptyOrWhiteSpace()) {
            this._operation = "Update";
            
            this._teacherService.getTeacher(id)
                .then(t => {
                    this._id = t.id;
                    this._isAdmin = t.isAdmin;
                    this._name = t.name;
                    this._userName = t.userName;
                    this._password = t.password;
                    this._classInCharge = t.classInCharge;
                    this.qualification =  t.qualification;
                })
                .catch(e => console.log(e));
        }
        else {
            this._operation = "Add";
        }
    }




}