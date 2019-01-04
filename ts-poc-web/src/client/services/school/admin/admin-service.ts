import { User } from "../../../models/school/user";
import { Division } from "../../../models/school/division";

export interface AdminService
{
    login(userName: string, password: string): Promise<ReadonlyArray<User>>;
   
    getDivisions(): Promise<ReadonlyArray<Division>>;
}