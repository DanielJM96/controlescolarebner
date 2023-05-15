import Role from "../../models/db/roles"



export const dbAccessGetAllRoles =  async () => {

    try{

        const roles = await Role.findAll({where: {status_role: true}});

        if( !roles ) ({message: 'Role not found', data: null})

        return { 
            message: 'Role listed successfully',
            data: roles
        }

    }catch(error){

        return {
            message: 'Something went wrong',
            error
        }

    }

}

export const dbAccessGetRoleById = async (id: string) => {

    try{

        const roleData = await Role.findByPk(id);
        if( !roleData ) ({message: 'Role not found', data: null})

        return { 
            message: 'Role found successfully',
            data: roleData
        }

    
    }catch(error){
        return {
            message: 'Something went wrong',
            error
        }
    }

}

export const dbAccessCreateRole = async (name_role: string) => {
    try{
        const newRole = Role.build({name_role});
        
        await newRole.save();

        return { 
            message: 'Role found successfully',
            data: newRole
        }

    }catch(error){
        return {
            message: 'Something went wrong',
            error
        }
    }
}

export const dbAccessUpdateRole = async (name_role: string, id_role: string) => {
    try{

        const role = await dbAccessGetRoleById(id_role);

        if(!role.data)  return {
            message: 'Role not found',
            data: null
        };

        role.data.name_role = name_role;

        await role.data.save();

        return { 
            message: 'Role Updated successfully',
            data: role.data
        }

    }catch(error){
        return {
            message: 'Something went wrong',
            error
        }
    }
}

export const dbAccessDeleteRole = async (id_role: string) => {
    try{

        const role = await dbAccessGetRoleById(id_role);

        if(!role.data)  return {
            message: 'Role not found',
            data: null
        };

        role.data.status_role = false;

        await role.data.save();

        return { 
            message: 'Role Deleted successfully',
            data: role.data
        }

    }catch(error){
        return {
            message: 'Something went wrong',
            error
        }
    }
}