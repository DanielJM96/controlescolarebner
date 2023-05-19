import User from "../../models/db/users";

interface UserInterface {
    name_user:string
    pass: string;
    email: string;
    staff_id: string;
    user_type: string;
}

export const dbAccessCreateUSer = async ({name_user, email, pass, staff_id, user_type}: UserInterface) => {
    try{

        const newUser = User.build({name_user, email, pass, staff_id, user_type});
        await newUser.save();

        return {
            message:'User created successfully',
            data: newUser
        }

    }catch(error){
        return {
            message: 'Something went wrong',
            error
        }
    }
}

export const dbAccessGetAllUsers = async () => {

    try{    

        const users = await User.findAll();
        if(!users) return {
            message: 'Users not found',
            data: null
        }

        return {
            message: 'Users found successfully',
            data: users
        }

    }catch(error){
        
        return {
            message: 'Something went wrong',
            error
        }
    }

}

export  const dbAccessGetUserById = async (id_user: string) => {
    try {

        const user = await User.findByPk(id_user);

        if( !user ) ({message: 'User not found', data: null})

        return { 
            message: 'User found successfully',
            data: user
        }
        
    } catch (error) {

        return {
            message: 'Something went wrong',
            error
        }
    }
}