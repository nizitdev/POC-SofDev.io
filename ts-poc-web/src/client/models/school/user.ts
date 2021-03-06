export interface User
{
    id: string;
    name: string;
    isAdmin: boolean;
    userName: string;
    password: string;
    classInCharge: string;
    qualification: Array<string>;
    isDeleted: boolean;
} 
