import { PermissionAttributes } from "../../interfaces/interfaces";
import { JSONSchemaType } from 'ajv';


export const PermissionSchema: JSONSchemaType<PermissionAttributes> =  {
    type: "object",
    properties: {
        name_permission: {
            type: "string",
            minLength: 4,
            maxLength: 15,
            pattern: "^[a-zA-Z]+$",
        },
        status_role: {
            "type": "boolean",
            "nullable": true,
            "default": false
        }
    },
    required: ["name_permission"],
}
