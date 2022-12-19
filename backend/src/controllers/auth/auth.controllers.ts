import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { configBody } from '../../config/config';

import { sample_users, User } from '../../data';

export const login = (req: Request, res: Response) => {
    try {
        // extract form content
        const { email, password } = req.body;
        const user = sample_users.find((user: User)=>{
            return user.email === email && user.password === password;
        });

        if(!user) res.status(400).send('User nor found');
        
        // jwt
        jwt.sign({id: user?.id}, configBody.SECRET, {expiresIn: configBody.ExpiresIn}, (err, token)=>{
            if(err) throw err;
            res.status(200).send({token});
        });

    } catch (error) {
        res.status(500).send('Error durinf login process')
    }
};