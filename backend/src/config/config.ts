import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

interface Config {
    "SECRET": string;
    "ExpiresIn": number;
}

export const configBody: Config = {
    "SECRET": "Food-Mine",
    "ExpiresIn": 3600
};

