import jwt from 'jsonwebtoken';

export const generateJWT = ( id_user: number, user_name:string ) => {
    return new Promise((resolve, reject) => {

        const payLoad = { id_user, user_name };
        const privateKey = process.env.SECRETORPRIVATEKEY

        if (!privateKey) throw new Error('No se ha definido la variable de entorno DB_NAME');

        jwt.sign( payLoad, privateKey, {
            expiresIn: '1h'
        }, (err, token) => {
            if(err) {
                console.error(err);
                reject('No se pudo generar el token');
            }else{
                resolve(token);
            }
        })

    });
}

