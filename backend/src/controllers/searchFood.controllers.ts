import { Request, Response } from "express";
import { sample_foods } from "../data";

export const searchProductByName = (request: Request, response: Response) => {
  const searchTerm = request.params.searchTerm;
  const foods = sample_foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  response.send(foods);
};
