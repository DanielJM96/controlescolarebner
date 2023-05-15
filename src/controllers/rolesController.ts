import { Request, Response } from "express"
import { RoleAttributes } from "../interfaces/interfaces";
import { dbAccessCreateRole, dbAccessDeleteRole, dbAccessGetAllRoles, dbAccessGetRoleById, dbAccessUpdateRole } from "../helpers/dataBase/Roles";
import { handleServerError } from "../utils/response";

// const xForwardedFor = req.headers['x-forwarded-for'];
// const clientIp = typeof xForwardedFor === 'string' ? xForwardedFor.split(',')[0] : req.socket.remoteAddress;

// user creation
export const createRole = async (req: Request, res: Response) => {

    const {name_role}: RoleAttributes = req.body;
    
    try{

        const newRole = await dbAccessCreateRole(name_role);	
        
        if( newRole.error) return handleServerError(res, newRole);

        res.status(200).json(newRole);


    }catch(error){
        return handleServerError(res, error);

    }
}



// get Roles
export const getAllRoles = async (req: Request, res: Response) => {
 
    try{

        const rolesData = await dbAccessGetAllRoles();

        if( rolesData.error) return handleServerError(res, rolesData);

        res.status(200).json(rolesData);

    }catch(error){
        return handleServerError(res, error);
    }

}


// get role by id
export const getRoleById = async (req: Request, res:Response) => {

    try{

        const {id} = req.params;

        const roleData = await dbAccessGetRoleById(id);

        if( roleData.error ) return handleServerError(res, roleData);

        res.status(200).json(roleData);

    }catch(error){
        return handleServerError(res, error);
    }

}

// update roles
export const updateRole = async (req: Request, res: Response) => {
 
    const {id} = req.params;
    const {name_role} = req.body;
    try{

        const roleUpdated = await dbAccessUpdateRole(name_role, id);

        if(roleUpdated.error) return handleServerError(res, roleUpdated.error);
        if(!roleUpdated.data) return res.status(404).json(roleUpdated);

        res.status(200).json(roleUpdated)

    }catch(error){
        return handleServerError(res, error);
    }
}

// update roles
export const deleteRole = async (req: Request, res: Response) => {
 
    const {id} = req.params;
    try{

        const lastRole = await dbAccessDeleteRole(id);

        if(lastRole.error) return handleServerError(res, lastRole.error);
        if(!lastRole.data) return res.status(404).json(lastRole);

        res.status(200).json(lastRole)

    }catch(error){
        res.status(400).json({
            error
        })
    }
}