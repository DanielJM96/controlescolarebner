import { NextFunction, Request, Response } from "express";
import Role from "../models/db/roles";
import Permission from "../models/db/permissions";

// validate role in db
export const ifRoleExists = async (req: Request, res: Response, next: NextFunction) => {

    const {name_role} = req.body;
    const {id} = req.params;
    
    if(id){
      const role = await Role.findOne( {where: {id_role: id} } );
      if(!role) return res.status(400).json({msg:'The role not exists in database' })
    }

    if(name_role){
      const role = await Role.findOne({where: {name_role }});
      if(role?.dataValues){
        return res.status(400).json({msg:'The role already exists in the database' })
      }

    }
    
    next()
};

export const ifPermissioneExists = async (req: Request, res: Response, next: NextFunction) => {

  const {name_permission} = req.body;

  const {id} = req.params;
  
  if(id){
    const role = await Permission.findOne( {where: {id_permission: id, status_permission: true } } );
    if(!role) return res.status(400).json({msg:'The permission not exists in database' })
  }

  if(name_permission){
    const permission = await Permission.findOne({where: {name_permission }});
    if(permission?.dataValues){
      return res.status(400).json({msg:'The permission already exists in the database' })
    }

  }
  
  next()
};


