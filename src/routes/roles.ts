import { Router } from "express";
import {  toUpperCaseBody, validateFields } from "../middlewares/validateFields";
import { createRole, deleteRole, getAllRoles, getRoleById, updateRole } from "../controllers/rolesController";
import { RoleSchema } from "../models/schema/schemaRoles";
import { ifRoleExists } from "../middlewares/validates";


const router: Router = Router();


//create Role 
router.post('/', [ toUpperCaseBody, ifRoleExists,  validateFields(RoleSchema) ], createRole);

//get Roles  
router.get('/', getAllRoles);

//get Role  by id
router.get('/:id',[ ifRoleExists ], getRoleById);

//update Role 
router.put('/:id',[toUpperCaseBody, ifRoleExists, validateFields(RoleSchema)], updateRole);

// delete role
router.delete('/:id', [ifRoleExists], deleteRole);

export {
    router
} 

