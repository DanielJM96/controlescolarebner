import { UserAttributes } from "../../interfaces/interfaces";
import { JSONSchemaType } from 'ajv';


export const UserSchema: JSONSchemaType<UserAttributes> =  {
    type: "object",
    properties: {
        name_user: {
            type: "string",
            minLength: 5,
            maxLength: 50,
            pattern: "^[a-zA-Z]+$",
        },
        pass: {
            type: "string",
            minLength: 8,
            maxLength: 20,
            //pattern: "/^(?=.*[A-Z]).+$/"
        },
        email:{
            type: "string",
           // pattern: "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
        },
        staff_id: {
            type: "string",
            minLength: 9,
            maxLength: 9,
        },
        user_type: {
            type: "string"
        }
    },
    required: ["name_user", "pass", "email", "staff_id", "user_type"],
}
