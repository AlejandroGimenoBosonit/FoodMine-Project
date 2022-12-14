import { Injectable } from '@angular/core';
// Types
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tags';
// sample foods
import { sample_foods, sample_tags } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceTsService {

  constructor() { }

  // methods

  // get all products to the home component
  getAll(): Food[] {
    return sample_foods;
  }

  // get all products by search component
  getAllFoodsBySearchTerm( searchTerm: string ) {
    return this.getAll().filter((product: Food)=>product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  // get all tags
  getAllTags(): Tag[] {
    return sample_tags;
  }

  // get all products by Tags
  getAllFoodsByTag(tag: string) {
    return tag === "All" ?
    this.getAll() :  
    this.getAll().filter((product: Food)=>product.tags?.includes(tag))
  }

  // get product by Id
  getFoodById(id: string):Food {
    // a single food can be undefined so in this case it will return a new Food instance
    return this.getAll().find((product: Food)=> product.id === id) ?? new Food();
  }

}
