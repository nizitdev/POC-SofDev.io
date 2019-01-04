export interface User
{
    id: string;
    name: string;
    IsAdmin: boolean;
    userName: string;
    password: string;
    classInCharge: Readonly<string>;
    isDeleted: boolean;
} 
