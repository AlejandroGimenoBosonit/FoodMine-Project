import { Request, Response } from "express";
import { sample_foods } from "../data";
import { FoodModel } from "../database/Schemas/Food";

export const searchProductByName = async(request: Request, response: Response) => {
  try {
    const searchTerm = request.params.searchTerm;

    // check if there is products
    const foodContent = await FoodModel.countDocuments();
    const searchQuery = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
    
    // If there is products send them
    if(foodContent === 0){
      return response.status(401).send('There are no products');
    }
    const payload = await FoodModel.find({ name: {$regex: searchQuery, $options:'i'} });
    
    return response.status(200).send(payload);

  } catch (error) {
      return response.status(500).send('Internal Server Error');
  }
};
