import { getAllRoles } from "../../src/controllers/rolesController";
import { db } from "../../src/db/config";
import Role from "../../src/models/db/roles";
import { getMockReq, getMockRes } from "@jest-mock/express";

import {Request, Response} from 'express';


describe('Roles Controller', () => {

    db.addModels([Role]);

    it('Should retrieve roles list', async () => {

        const req: Request = getMockReq();
        const res: Response = getMockRes().res;

        const roleList = await getAllRoles(req, res);
        

    });


});