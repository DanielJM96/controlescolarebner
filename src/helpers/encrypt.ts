import bcryptjs from "bcryptjs";

export const encryptPass = ( password: string ): string => bcryptjs.hashSync(password, bcryptjs.genSaltSync());


