import { Injectable } from '@angular/core';
// Types
import { Food } from '../shared/models/Food';
// sample foods
import { sample_foods } from '../../data';

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

}
