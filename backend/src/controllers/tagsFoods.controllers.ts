import express, { Request, Response } from "express";
import { sample_foods, sample_tags } from "../data";

export const getAllTags = (request: Request, response: Response) => {
  if (sample_tags) {
    return response.status(200).send(sample_tags);
  } else {
    return response.status(400).send("Error returning products");
  }
};

export const getProductByTag = (request: Request, response: Response) => {
  const tagName = request.params.tagName;

  if (sample_tags) {
    const foods = sample_foods.filter((food) => food.tags?.includes(tagName));
    response.send(foods);
  } else {
    return response.status(400).send("Error returning products");
  }
};
