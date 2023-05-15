import Permission from "../../models/db/permissions";


export const dbAccessCreatePermission = async (name_permission: string) => {
    try{
        const newPermission = Permission.build({name_permission});
        
        await newPermission.save();

        return { 
            message: 'Permission created successfully',
            data: newPermission
        }

    }catch(error){
        return {
            message: 'Something went wrong',
            error
        }
    }
}


export const dbAccessGetAllPermissions =  async () => {

    try{

        const permissions = await Permission.findAll({where: {status_permission: true}});

        if( !permissions ) ({message: 'Permission not found', data: null})

        return { 
            message: 'Permission listed successfully',
            data: permissions
        }

    }catch(error){

        return {
            message: 'Something went wrong',
            error
        }

    }

}


export const dbAccessGetPermissionById = async (id: string) => {
    try{

        const permissionData = await Permission.findByPk(id);
        if( !permissionData ) ({message: 'Permission not found', data: null});

        return { 
            message: 'Permission found successfully',
            data: permissionData
        }
    
    }catch(error){
        return {
            message: 'Something went wrong',
            error
        }
    }
}

export const dbAccessUpdatePermission = async (id: string, name_permission: string) => {
    try{

        const permission = await dbAccessGetPermissionById(id);

        
        if(!permission.data)  return {
            message: 'Permission not found',
            data: null
        };

        permission.data.name_permission = name_permission;

        await permission.data.save();

        return {
            message: 'Permission updated successfully',
            data: permission
        }


    }catch(error){
        return {
            message: 'Something went wrong',
            error
        }
    }
}


export const dbAccessDeletePermission = async (id_permission: string) => {
    try{

        const permission = await dbAccessGetPermissionById(id_permission);

        if(!permission.data)  return {
            message: 'Role not found',
            data: null
        };

        permission.data.status_permission = false;

        await permission.data.save();

        return { 
            message: 'Permission Deleted successfully',
            data: permission.data
        }

    }catch(error){
        return {
            message: 'Something went wrong',
            error
        }
    }
}