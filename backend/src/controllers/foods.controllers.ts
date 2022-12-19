import { Request, Response } from "express";

// provisional ddbb
import { sample_foods } from "../data";

export const getAllProducts = (request: Request, response: Response) => {
  if (sample_foods) {
    return response.status(200).send(sample_foods);
  } else {
    return response.status(400).send("Error returning products");
  }
};

export const getProductById = (request: Request, response: Response) => {
  const foodId = request.params.id;
  if (sample_foods) {
    const food = sample_foods.find((food) => food.id === foodId);
    return response.send(food);
  } else {
    return response.status(400).send("Error returning products");
  }
};
