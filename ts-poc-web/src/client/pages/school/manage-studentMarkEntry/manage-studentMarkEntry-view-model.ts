import { template, route, PageViewModel, NavigationService } from "@nivinjoseph/n-app";
import * as Routes from "../../routes";
import "./manage-studentMarkEntry-view.scss";
import { inject } from "@nivinjoseph/n-ject";
import { StudentService } from "../../../services/school/student/student-service";
import { given } from "@nivinjoseph/n-defensive";
import { StudentMarkEntry } from "../../../models/school/studentMarkEntry";
import { Subject } from "../../../models/school/subject";


@template(require("./manage-studentMarkEntry-view.html"))
@route(Routes.manageStudentMark)
@inject("StudentService", "NavigationService")
export class ManageStudentMarkViewModel extends PageViewModel {

    private readonly _studentService: StudentService;
   // private readonly _navigationService: NavigationService;
    private _studentMarkEntry: ReadonlyArray<StudentMarkEntry>;
    public get studentMarkEntry(): ReadonlyArray<StudentMarkEntry> { return this._studentMarkEntry; }
    private _subjects: ReadonlyArray<Subject>;
    public get subjects(): ReadonlyArray<Subject> { return this._subjects; }

    private _operation: string;
    private _id: string;
    private _studentName: string;
    private _subject: string;
    private _mark: string;
    private _student_id: string;

    public get operation(): string { return this._operation; }

    public get studentName(): string { return this._studentName; }
    public set studentName(value: string) { this._studentName = value; }

    public get subject(): string { return this._subject; }
    public set subject(value: string) { this._subject = value; }

    public get mark(): string { return this._mark; }
    public set mark(value: string) { this._mark = value; }

    public get student_id(): string { return this._student_id; }
    public set student_id(value: string) { this._student_id = value; }


    public constructor(studentService: StudentService, navigationService: NavigationService) {
        super();

        given(studentService, "studentService").ensureHasValue().ensureIsObject();
        this._studentService = studentService;
        given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
       // this._navigationService = navigationService;
        this._subjects = [];
        this._studentMarkEntry = [];
        this._id = "";
        this._studentName = "";
        this._subject = "";
        this._mark = "";
        this._student_id = "";
    }

    public save(): void {

        debugger;
        const savePromise: Promise<any> = this._id
            ? this._studentService.updateStudentMarkEntry(this._id, this._studentName, this._subject, this._mark, this._student_id)
            : this._studentService.createStudentMarkEntry(this._student_id, this._studentName, this._subject, this._mark);

        savePromise
        .then(() => this._studentService.getStudentMark(this.student_id)
            .then(t => this._studentMarkEntry = t)
            .catch(e => console.log(e)));
       // .then(() => this._navigationService.navigate(Routes.manageStudentMark, {id: this._student_id})) .catch(e => console.log(e));
              debugger;
    }


    protected onEnter(id?: string): void {
debugger;
        this._studentService.getSubjects()
        .then(t => this._subjects = t)
        .catch(e => console.log(e));
        debugger;
        this._studentService.getStudent(id)
        .then(t => {
            this._student_id = t.id,
            this._studentName = t.name;
             
        })
        .catch(e => console.log(e));
         
        this._studentService.getStudentMark(id)
            .then(t => this._studentMarkEntry = t)
            .catch(e => console.log(e));
            this._operation = "Add";
        // if (markId && !markId.isEmptyOrWhiteSpace() ) {
           
        //     // this._operation = "Update";

        //     // this._studentService.getStudentMarkEntry(markId)
        //     //     .then(t => {
        //     //         this._id = t.id;
        //     //         this._student_id = id;
        //     //         this._mark = t.mark;
        //     //         this._studentName = t.studentName;
        //     //         this._subject = t.subject;

        //     //     })
        //     //     .catch(e => console.log(e));

        // }
        // else {
        //     debugger;
           
        // }
    }

}
