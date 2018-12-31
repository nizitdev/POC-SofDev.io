import { PageViewModel, template, route, } from "@nivinjoseph/n-app";
import * as Routes from "../../routes";
import "./list-teacher-view.scss";
import { inject } from "@nivinjoseph/n-ject";
import { TeacherService } from "../../../services/school/teacher/teacher-service";
import { given } from "@nivinjoseph/n-defensive";
import { Teacher } from "../../../models/school/teacher";

@template(require("./list-teacher-view.html"))
@route(Routes.listTeachers)
@inject("TeacherService")
export class ListTeachersViewModel extends PageViewModel
{
    private readonly _teacherService: TeacherService;
    private _teachers:  ReadonlyArray<Teacher>;
     
    public get teachers(): ReadonlyArray<Teacher> { 
        return this._teachers; }
     
    
    public constructor(teacherService: TeacherService)
    {
        super();
        given(teacherService, "teacherService").ensureHasValue().ensureIsObject();
        this._teacherService = teacherService;
        this._teachers = [];
    }
    
    
    protected onEnter(): void
    {
        this._teacherService.getTeachers()
            .then(t => this._teachers = t)
            .catch(e => console.log(e));
    }
}