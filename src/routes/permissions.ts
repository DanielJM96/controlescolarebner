import { Router } from "express";
import {  toUpperCaseBody, validateFields } from "../middlewares/validateFields";
import { createPermission, deletePermission, getPermissionById, getPermissions, updatePermission } from "../controllers/permissionsController";

import { PermissionSchema } from '../models/schema/schemaPermissions'; 
import { ifPermissioneExists } from "../middlewares/validates";


const router: Router = Router();


//create Permission 
router.post('/',[ validateFields(PermissionSchema), toUpperCaseBody, ifPermissioneExists], createPermission);

//get Permission  
router.get('/', getPermissions);

// //get Permissions  by id
router.get('/:id',[ ifPermissioneExists ], getPermissionById);

// //update Permission 
router.put('/:id',[toUpperCaseBody, validateFields(PermissionSchema), ifPermissioneExists], updatePermission);

// // delete Permission
router.delete('/:id', [ifPermissioneExists], deletePermission);

export {
    router
} 

