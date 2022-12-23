import { model, Schema } from "mongoose";
import { FoodType } from "../../types/types";


const foodSchema = new Schema<FoodType>({
    name: { type: String, required: true },
    cookTime: { type: String, required: true },
    price: { type: Number, required: true },
    favorite: { type: Boolean, required: true },
    origins: { type: [String], required: true },
    stars: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    tags: { type: [String] }
},{
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    },
    timestamps:true
});

export const FoodModel = model('food', foodSchema);