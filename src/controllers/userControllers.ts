import { Request, Response } from "express"
import { dbAccessCreateUSer, dbAccessGetAllUsers, dbAccessGetUserById } from "../helpers/dataBase/users";
import { handleServerError } from "../utils/response";

// import { encryptPass, generateJWT } from "../helpers";

// user creation
export const createUser = async (req: Request, res: Response) => {

    try{

        const newUser = await dbAccessCreateUSer(req.body);
        if(newUser.error)return res.status(400);
       
        return res.status(200).json(newUser)

    }catch(error){
        return handleServerError(res, error);

    }

}

export const getAllUsers = async (req: Request, res: Response) => {
    try{

        const users = await dbAccessGetAllUsers();

        if(!users.data) return res.status(400);

        return res.status(200).json(users);
        
    }catch(error){
        return handleServerError(res, error);

    }
}


export const getUserById = async (req: Request, res:Response) => {

    const { id_user } = req.body;
    try{

        const user = await dbAccessGetUserById(id_user);

        return res.status(200).json(user);

    }catch(error){
        return handleServerError(res, error);

    }
}