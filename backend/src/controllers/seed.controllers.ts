import { Request, Response } from "express";
// model
import { UserModel } from '../database/Schemas/User';
import { FoodModel } from "../database/Schemas/Food";
// data
import { sample_foods, sample_users } from '../data';


export const getSeededFood = async(request: Request, response: Response) => {
    try {
        // check if mongoDB collection is empty
        const foodCount = await FoodModel.countDocuments();

        if(foodCount > 0){
            return response.status(200).send('Seed is already is done!');
        }

        await FoodModel
        .create(sample_foods)
        .then(() => response.status(200).send('Seed is done!'))
        .catch(() => response.status(401).send('Error during creating collection'));

    } catch (error) {
        return response.status(500).send('Interbal Server Error');
    }
};

export const getSeededUsers = async(request: Request, response: Response) => {
    try {
        // check if mongoDB collection is empty
        const userCount = await UserModel.countDocuments();

        if(userCount > 0){
            return response.status(200).send('User seed is already is done!');
        }

        await UserModel
        .create(sample_users)
        .then(() => response.status(200).send('Seed is done!'))
        .catch(() => response.status(401).send('Error during creating collection'));

    } catch (error) {
        return response.status(500).send('Interbal Server Error');
    }
};