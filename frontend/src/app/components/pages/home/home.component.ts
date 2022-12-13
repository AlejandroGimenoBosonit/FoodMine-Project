import { Component, OnInit } from '@angular/core';

// Types
import { Food } from '../../../shared/models/Food';
import { FoodServiceTsService } from '../../../services/food.service.ts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // local variable 
  foods: Food[] = [];

  // service injection to update local variable
  constructor( private foodService: FoodServiceTsService ) { 
    // update local variable
    this.foods = foodService.getAll();
   }

  ngOnInit(): void {
  }
/**
 * TODO: Isolate product as card component
 */
}


