import { PageViewModel, template, route, } from "@nivinjoseph/n-app";
  import * as Routes from "../../routes";
import "./list-student-view.scss";
import { inject } from "@nivinjoseph/n-ject";
import { StudentService } from "../../../services/school/student/student-service";
import { given } from "@nivinjoseph/n-defensive";
import { Student } from "../../../models/school/student";


@template(require("./list-student-view.html"))
@route(Routes.listStudents)
@inject("StudentService")
export class ListStudentViewModel extends PageViewModel {
    private readonly _studentService: StudentService;
    private _students: ReadonlyArray<Student>;
    
    public get students(): ReadonlyArray<Student> {
        return this._students;
    }


    public constructor(studentService: StudentService) {
        super();
        given(studentService, "studentService").ensureHasValue().ensureIsObject();
        this._studentService = studentService;
        this._students = [];

    }
    protected onEnter(): void {

        this._studentService.getStudents()
            .then(t => this._students = t)
            .catch(e => console.log(e));
    }
}