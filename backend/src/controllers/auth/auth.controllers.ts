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
            res.status(200).send({
                id: user?.id,
                email: user?.email,
                name: user?.name,
                address: user?.address,
                isAdmin: user?.isAdmin,
                token
            });
        });

    } catch (error) {
        res.status(500).send('Error during login process')
    }
};

export const getUser = (req: Request, res: Response) => {
    try {
        // extract token
        const token: string = req.headers['x-access-token'] as string;
        
        // extract user id from token
        const data = jwt.verify(token, configBody.SECRET) as jwt.JwtPayload;

        // search user by extracted id
        const user = sample_users.filter((user)=>user.id === data.id);
        
        if(!user) return res.status(500).send('User not found');
        // send user info

        return res.status(200).send(user[0]);
    } catch (error) {
        res.status(500).send('Error obtaining user data')
    }
};