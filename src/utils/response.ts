import { Response } from 'express';

export const handleServerError = (res: Response, error: unknown) => {

    return res.status(500).json({
        message: 'Something went wrong',
        error: process.env.ENV === 'development' ? error: undefined
    })

}