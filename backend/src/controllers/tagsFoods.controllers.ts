import express, { Request, Response } from "express";
import { sample_foods, sample_tags } from "../data";
import { FoodModel } from '../database/Schemas/Food';

export const getAllTags = async(request: Request, response: Response) => {
  try {
    const tags = await FoodModel.aggregate([
      {
        $unwind: 'tags'
      }
      ,{
        $group: {
          _id: 'tags',
          count: {
            $sum: 1
          }
        }
      },{
        $project: {
          _id: 0,
          name: '$_id',
          count: '$count'
        }
      }
    ]).sort({count: -1});
    console.log(tags);
    response.send();

  } catch (error) {
      return response.status(500).send('Internal Server Error');
  }
  // if (sample_tags) {
  //   return response.status(200).send(sample_tags);
  // } else {
  //   return response.status(400).send("Error returning products");
  // }
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
