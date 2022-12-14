// import another class
import { Food } from './Food';

export class CartItem{
    // declare constructor to define a variable named 'food' as Food type
    constructor(public food:Food){}

    quantity: number = 1;
    price: number = this.food.price;
}