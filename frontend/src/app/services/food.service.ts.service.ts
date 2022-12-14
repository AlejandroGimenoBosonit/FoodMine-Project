import { Injectable } from '@angular/core';
// Types
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tags';
// sample foods
import { sample_foods, sample_tags } from '../../data';
import { HttpClient } from '@angular/common/http';
import { FOODS_URL, FOODS_BY_SEARCH_URL, FOODS_TAGS_URL, FOODS_BY_TAG_URL, FOOD_BY_ID_URL } from '../shared/constants/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceTsService {

  constructor(private http:HttpClient) { }

  // methods

  // get all products to the home component
  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }

  // get all products by search component
  getAllFoodsBySearchTerm( searchTerm: string ) {
    // return this.getAll().filter((product: Food)=>product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  // get all tags
  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  // get all products by Tags
  getAllFoodsByTag(tag: string): Observable<Food[]> {
    console.log(tag+'pppp');
    
    return tag === "All" ?
    this.getAll() :  
    this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }

  // get product by Id
  getFoodById(id: string):Observable<Food> {
    // a single food can be undefined so in this case it will return a new Food instance
    // return this.getAll().find((product: Food)=> product.id === id) ?? new Food();
    return this.http.get<Food>(FOOD_BY_ID_URL + id);
  }

}
