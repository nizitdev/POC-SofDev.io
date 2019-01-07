import { template, route, PageViewModel, NavigationService } from "@nivinjoseph/n-app";
import * as Routes from "../../routes";
import "./manage-student-view.scss";
import { inject } from "@nivinjoseph/n-ject";
import { StudentService } from "../../../services/school/student/student-service";
import { given } from "@nivinjoseph/n-defensive";
import { Division } from "../../../models/school/division";
import { AdminService } from "../../../services/school/admin/admin-service";


@template(require("./manage-student-view.html"))
@route(Routes.manageStudent)
@inject("StudentService", "NavigationService", "AdminService")
export class ManageStudentViewModel extends PageViewModel {

    private readonly _studentService: StudentService;
    private readonly _navigationService: NavigationService;
    private readonly _adminService: AdminService; 
    
    private _divisions: ReadonlyArray<Division>;
    public get divisions(): ReadonlyArray<Division> {return this._divisions; }
  
    private _operation: string;
    private _id: string | null;
    private _name: string;
    private _sex: string;
    private _division: string;
     
    public get operation(): string { return this._operation; }

    public get name(): string { return this._name; }
    public set name(value: string) { this._name = value; }

    public get sex(): string { return this._sex; }
    public set sex(value: string) { this._sex = value; }

    public get division(): string { return this._division; }
    public set division(value: string) { this._division = value; }


    public constructor(studentService: StudentService, navigationService: NavigationService, adminService: AdminService,  ) {
        super();
        given(adminService, "adminService").ensureHasValue().ensureIsObject();
        this._adminService = adminService; 
        given(studentService, "studentService").ensureHasValue().ensureIsObject();
        this._studentService = studentService;
        given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;
         
        this._divisions = [];
        this._operation = "";
        this._id = null;
        this._name = "";
        this._sex = " ";
        this._division = "";
         
    }

    public save(): void {
     //   let s = this._classInCharge;
        debugger;
       const savePromise: Promise<any> = this._id
            ? this._studentService.updateStudent(this._id, this._name, this._sex, this._division)
            : this._studentService.createStudent(this._name, this._sex, this._division);
            
        savePromise
            .then(() => this._navigationService.navigate(Routes.listStudents, {}))
            .catch(e => console.log(e));
    }


    protected onEnter(id?: string): void {
        this._adminService.getDivisions()
            .then(t => this._divisions = t)
            .catch(e => console.log(e));

        if (id && !id.isEmptyOrWhiteSpace()) {
            this._operation = "Update";
            
            this._studentService.getStudent(id)
                .then(t => {
                    this._id = t.id;
                    
                    this._name = t.name;
                    this._sex = t.sex;
                    this._division = t.division;
                     
                })
                .catch(e => console.log(e));
        }
        else {
            this._operation = "Add";
        }
    }




}