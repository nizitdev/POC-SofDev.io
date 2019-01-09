import { PageViewModel, template, route, } from "@nivinjoseph/n-app";
  import * as Routes from "../../routes";
import "./list-studentMarks-view.scss";
import { inject } from "@nivinjoseph/n-ject";
import { StudentService } from "../../../services/school/student/student-service";
import { given } from "@nivinjoseph/n-defensive";
import { StudentMarkEntry } from "../../../models/school/studentMarkEntry";


@template(require("./list-studentMarks-view.html"))
@route(Routes.listStudentMarks)
@inject("StudentService")
export class ListStudentMarkViewModel extends PageViewModel {
    private readonly _studentService: StudentService;
    private _studentMarkEntry: ReadonlyArray<StudentMarkEntry>;
    
    public get studentMarkEntry(): ReadonlyArray<StudentMarkEntry> {
        return this._studentMarkEntry;
    }


    public constructor(studentService: StudentService) {
        super();
        given(studentService, "studentService").ensureHasValue().ensureIsObject();
        this._studentService = studentService;
        this._studentMarkEntry = [];

    }
    protected onEnter(): void {
debugger;
        this._studentService.getStudentMarkEntries()
            .then(t => this._studentMarkEntry = t)
            .catch(e => console.log(e));
    }
}