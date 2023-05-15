

import express, { Application } from 'express';
import  cors from 'cors';

import { ServerInterface, PathObject } from '../interfaces/interfaces';
import  {dbConnection}  from '../db/config';

import { router as routerUser } from '../routes/users';
import { router as routerRole } from '../routes/roles';
import { router as routerPermission } from '../routes/permissions';


class Server implements ServerInterface {

    public app: Application;
    public port: string | number;
    public paths: PathObject;

    constructor(){
        this.app  = express();
        this.port = process.env.PORT || 3000;
        this.paths = {
            users: '/api/users',
            roles: '/api/roles',
            permissions: '/api/permissions'
        }

        this.middlewares();

        this.connectDb();

        this.routes();
    }

    async connectDb(){
        await dbConnection();
    }

    middlewares() {

        //CORS
        this.app.use( cors() );

        //parse body
        this.app.use( express.json() );

    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Listening on: ${this.port}`)
        })
    }
    
    routes() {
        this.app.use( this.paths.users, routerUser );
        this.app.use( this.paths.roles, routerRole );
        this.app.use( this.paths.permissions, routerPermission );
    }
    

}


export default Server;