import { Application} from "express";

export type PathObject = {
    [key: string]: string;
}
export interface ServerInterface {
    app: Application,
    port: string | number,
    paths: PathObject
}

// interfaces roles
export interface RoleAttributes {
    id_role?: number;
    name_role:string;
    status_role?: boolean;
}

// interfaces permissions
export interface PermissionAttributes {
    name_permission:string;
    status_role?: boolean;
}


// interfaces Users
export interface UserAttributes {
    name_user:string;
    pass: string;
    email: string;
    staff_id: string
}






