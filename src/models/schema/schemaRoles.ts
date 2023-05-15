import { RoleAttributes } from "../../interfaces/interfaces";
import { JSONSchemaType } from 'ajv';


export const RoleSchema: JSONSchemaType<RoleAttributes> =  {
    "type": "object",
    "properties": {
        "id_role": {
            "type": "number",
            "nullable": true,
        },
        "name_role": {
            "type": "string",
            "minLength": 5,
            "maxLength": 20,
            "pattern": "^[a-zA-Z]+$",
        },
        "status_role": {
            "type": "boolean",
            "nullable": true,
            "default": false

        }
    },
    "required": ["name_role"],
}


  
