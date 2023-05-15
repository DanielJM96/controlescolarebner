
import { NextFunction, Request, Response } from "express";
import bodyParser from 'body-parser';

import Ajv from 'ajv';
import addFormats from "ajv-formats";


// validate schemas
const validateFields = (schema: Object) => {

    return  (req: Request, res: Response, next: NextFunction) => {

        const ajv = new Ajv( schema );
        addFormats(ajv);

        let validate =  ajv.compile( schema );

        if( validate(req.body) ){
            next();
        }else{
            return res.status(400).json({errors: validate.errors?.map( ({params, instancePath, message}) => {return {param: params, location: instancePath, msg: message}})})
        }
    }
}

// convert text to upperCase
const toUpperCaseBody = (req: Request, res: Response, next: NextFunction) => {

  bodyParser.urlencoded({ extended: true })(req, res, () => {
    for (const key in req.body) {
      if (typeof req.body[key] === 'string') {
        req.body[key] = req.body[key].toUpperCase();
      }
    }
    next();
  });
};
  

export {
    validateFields,
    toUpperCaseBody,
    
}