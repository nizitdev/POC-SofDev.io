
// import { TeacherService } from "./teacher-service";
// import { Teacher } from "../../../models/school/user";
// import { ConfigurationManager } from "@nivinjoseph/n-config";
// import * as Axios from "axios";
// import { given } from "@nivinjoseph/n-defensive";
// import "@nivinjoseph/n-ext";
// import { inject } from "@nivinjoseph/n-ject";
// import { DialogService } from "@nivinjoseph/n-app";


// @inject("DialogService")
// export class RemoteTeacherService implements TeacherService {
//     private readonly _dialogService: DialogService;
//     private readonly _api: Axios.AxiosInstance;


//     public constructor(dialogService: DialogService) {
//         given(dialogService, "dialogService").ensureHasValue().ensureIsObject();

//         this._dialogService = dialogService;

//         let apiUrl = ConfigurationManager.getConfig<string>("apiUrl").trim();
//         if (!apiUrl.endsWith("/"))
//             apiUrl += "/";

//         this._api = Axios.default.create({
//             timeout: 60000,
//             baseURL: apiUrl
//         });
//     }


//     public async getTeachers(): Promise<ReadonlyArray<Teacher>> {
//         this._dialogService.showLoadingScreen();
//         try {
//             const response = await this._api.get<ReadonlyArray<Teacher>>("api/query/getAllTeachers");
//             return response.data.map(t => {
//                 t.isDeleted = false;
//                 return t;
//             });
//         }
//         catch (error) {
//             this.showErrorMessage(error.response.status);
//             throw error;
//         }
//         finally {
//             this._dialogService.hideLoadingScreen();
//         }
//     }

//     public async getTeacher(id: string): Promise<Teacher> {
//         given(id, "id").ensureHasValue().ensureIsString();

//         this._dialogService.showLoadingScreen();
//         try {
//             const response = await this._api.get(`api/query/getTeacher/${id.trim().toLowerCase()}`);
//             const todo: Teacher = response.data;
//             todo.isDeleted = false;
//             return todo;
//         }
//         catch (error) {
//             this.showErrorMessage(error.response.status);
//             throw error;
//         }
//         finally {
//             this._dialogService.hideLoadingScreen();
//         }
//     }

//     public async createTeacher(name: string,  sex: string): Promise<Teacher> {
//         given(name, "name").ensureHasValue().ensureIsString();
//         given(sex, "sex").ensureIsString();

//         const command = {
//             title: name.trim(),
//             sex: sex ? sex.trim() : ""
//         };

//         this._dialogService.showLoadingScreen();
//         try {
//             const response = await this._api.post("api/command/createTeacher", command);
//             this._dialogService.showSuccessMessage("Successfully created Teacher.");
//             const teacher: Teacher = response.data;
//             teacher.isDeleted = false;
//             return teacher;
//         }
//         catch (error) {
//             this.showErrorMessage(error.response.status);
//             throw error;
//         }
//         finally {
//             this._dialogService.hideLoadingScreen();
//         }
//     }

//     public async updateTeacher(id: string, name: string,  sex: string): Promise<void> {
//         given(id, "id").ensureHasValue().ensureIsString();
//         given(name, "name").ensureHasValue().ensureIsString();
//         given(sex, "sex").ensureIsString();


//         const command = {
//             id: id.trim().toLowerCase(),
//             name: name.trim(),
//             sex: sex ? sex.trim() : ""
//         };

//         this._dialogService.showLoadingScreen();
//         try {
//             // @ts-ignore
//             const response = await this._api.post("api/command/updateTeacher", command);
//             this._dialogService.showSuccessMessage("Successfully updated Teacher.");
//         }
//         catch (error) {
//             this.showErrorMessage(error.response.status);
//             throw error;
//         }
//         finally {
//             this._dialogService.hideLoadingScreen();
//         }
//     }

//     public async deleteTeacher(id: string): Promise<void> {
//         given(id, "id").ensureHasValue().ensureIsString();

//         const command = {
//             id: id.trim().toLowerCase()
//         };

//         this._dialogService.showLoadingScreen();
//         try {
//             // @ts-ignore
//             const response = await this._api.post("api/command/deleteTeacher", command);
//             this._dialogService.showSuccessMessage("Successfully deleted Teacher.");
//         }
//         catch (error) {
//             this.showErrorMessage(error.response.status);
//             throw error;
//         }
//         finally {
//             this._dialogService.hideLoadingScreen();
//         }
//     }


//     private showErrorMessage(status: number): void {
//         this._dialogService.showErrorMessage(`There was an error while processing your request. Code ${status}.`);
//     }
// }