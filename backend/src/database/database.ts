// mongoose
import mongoose from "mongoose";
// config
import {configBody} from '../config/config';
// dotenv
import dotenv from 'dotenv';
dotenv.config();

mongoose.set('strictQuery', false);

// mongoose connection
mongoose.connect(configBody.Mongo_URI!)
        .then((): void => console.log('Connected to FoodMine database!'))
        .catch((err: string) => console.log(err));

