import { Request, Response } from "express";

// provisional ddbb
import { sample_foods } from "../data";
import { FoodModel } from '../database/Schemas/Food';

export const getAllProducts = async(request: Request, response: Response) => {
  try {
    // check if there is products
    const foodContent = await FoodModel.countDocuments();
    // If there is products send them
    if(foodContent === 0){
      return response.status(401).send('There are no products');
    }
    const paylaod = await FoodModel.find();
    return response.status(200).send(paylaod);

  } catch (error) {
      return response.status(500).send('Internal Server Error');
  }
};

export const getProductById = async(request: Request, response: Response) => {
  try {
    const id = request.params.id;
    
    // check if there is products
    const foodContent = await FoodModel.countDocuments();
    // If there is products send them
    if(foodContent === 0){
      return response.status(401).send('There are no products');
    }
    const payload = await FoodModel.findById({_id:id});
    
    return response.status(200).send(payload);

  } catch (error) {
    return response.status(500).send('Internal Server Error');
  }
}; 



