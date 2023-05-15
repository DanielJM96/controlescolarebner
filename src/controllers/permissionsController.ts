import { Request, Response } from "express";
import { handleServerError } from "../utils/response";
import { dbAccessCreatePermission, dbAccessDeletePermission, dbAccessGetAllPermissions, dbAccessGetPermissionById, dbAccessUpdatePermission } from "../helpers/dataBase/Permissions";


export const createPermission = async (req: Request, res: Response) => {

    const {name_permission} = req.body;

    try{

        const newPermission = await dbAccessCreatePermission( name_permission );

        if( newPermission.error) return handleServerError(res, newPermission);

        return res.status(200).json(newPermission);

    }catch(error){

        return handleServerError(res, error);
    
    }
}

export const getPermissions = async (req: Request, res: Response) => {

    try{
        
        const permissions = await dbAccessGetAllPermissions();

        if( permissions.error ) return handleServerError(res, permissions.error);

        return res.status(200).json(permissions);

    }catch(error){

        return handleServerError(res, error);

    }

}

export const getPermissionById = async (req: Request, res: Response) => {
    
    const {id} = req.params;

    try{

        const permissionData = await dbAccessGetPermissionById(id);

        if( !permissionData.data ) return res.status(404).json(permissionData);

        res.status(200).json(permissionData);

    }catch(error){

        return handleServerError(res, error);

    }
}

export const updatePermission = async (req: Request, res: Response) => {

    const {name_permission} = req.body;
    const {id} = req.params;

    try{

        const permissionUpdated = await dbAccessUpdatePermission(id, name_permission);

        if(!permissionUpdated.data) return res.status(404).json(permissionUpdated); 

        return res.status(200).json(permissionUpdated)


    }catch(error){

        return handleServerError(res, error);

    }

}

export const deletePermission = async (req: Request, res: Response) => {

    const {id} = req.params;
    
    try{

        const deletePermission = await dbAccessDeletePermission(id);

        if(deletePermission.error) return handleServerError(res, deletePermission.error);
        if(!deletePermission.data) return res.status(404).json(deletePermission);

        res.status(200).json(deletePermission)

    }catch(error){

        return handleServerError(res, error);

    }
}