import { PageViewModel, template, route, NavigationService } from "@nivinjoseph/n-app";
import * as Routes from "../../routes";
import "./manage-teacher-view.scss";
import { inject } from "@nivinjoseph/n-ject";
import { TeacherService } from "../../../services/school/teacher/teacher-service";
import { given } from "@nivinjoseph/n-defensive";


@template(require("./manage-teacher-view.html"))
@route(Routes.manageTeacher)
@inject("TeacherService", "NavigationService")
export class ManageTeacherViewModel extends PageViewModel
{
    private readonly _teacherService: TeacherService;
    private readonly _navigationService: NavigationService;
    private _operation: string;
    private _id: string | null;
    private _firstName: string;
    private _lastName: string;
    private _address: string;
    private _sex: string;
    private _dateOfBirth: string;
    
    public get operation(): string { return this._operation; }

    public get firstName(): string { return this._firstName; }
    public set firstName(value: string) { this._firstName = value; }

    public get lastName(): string { return this._lastName; }
    public set lastName(value: string) { this._lastName = value; }

    public get  sex(): string { return this._sex; }
    public set  sex(value: string) { this._sex = value; }

    public get  dateOfBirth(): string { return this._dateOfBirth; }
    public set  dateOfBirth(value: string) { this._dateOfBirth = value; }


    public get   address(): string { return this._address; }
    public set  address(value: string) { this._address = value; }

    public constructor(teacherService: TeacherService, navigationService: NavigationService)
    {
        super();
        given( teacherService, " teacherService").ensureHasValue().ensureIsObject();
        given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        
        this._teacherService =  teacherService;
        this._navigationService = navigationService;
        this._operation = "";
        this._id = null; 
        this._firstName = "";
        this._lastName = "";
        this._sex = "";
        this._address = "";
        this._dateOfBirth = "";

    } 
    

    public save(): void
    {
        debugger;
        const savePromise: Promise<any> = this._id
        ? this._teacherService.updateTeacher(this._id, this._firstName, this._lastName, this._dateOfBirth, this._sex, this._address)
            : this._teacherService.createTeacher(this._firstName, this._lastName, this._dateOfBirth, this._sex, this._address);
        
        savePromise
            .then(() => this._navigationService.navigate(Routes.listTeachers, {}))
            .catch(e => console.log(e));
    }
    
    
    protected onEnter(id?: string): void
    {
        if (id && !id.isEmptyOrWhiteSpace())
        {
            this._operation = "Update";
            
            this._teacherService.getTeacher(id)
                .then(t =>
                {
                    this._id = t.id;
                    this._firstName = t.firstName;
                    this._lastName = t.lastName;
                    this._address = t.address;
                    this._sex = t.sex;
                    this._dateOfBirth = t.dateOfBirth;
                })
                .catch(e => console.log(e));
        }
        else
        {
            this._operation = "Add";
        }
    }
}