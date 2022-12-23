import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

interface Config {
    "SECRET": string;
    "ExpiresIn": number;
    "Mongo_URI"?: string;
}

export const configBody: Config = {
    "SECRET": "Food-Mine",
    "ExpiresIn": 3600,
    "Mongo_URI": process.env.MONGO_URI
};

