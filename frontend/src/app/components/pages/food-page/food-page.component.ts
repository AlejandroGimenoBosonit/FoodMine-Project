import { Component, OnInit } from '@angular/core';

// Types
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodServiceTsService } from '../../../services/food.service.ts.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  // local product information
  food!: Food;

  // inject activatedRoute to extract url's id and call a service by the id
  constructor(
    private activatedRoute:ActivatedRoute,
    private foodService: FoodServiceTsService
  ) { 
    activatedRoute.params.subscribe(params => {
      // calling injected service method with the parameter's id
      this.food = this.foodService.getFoodById(params.id);
    });
  }

  ngOnInit(): void {
  }

}
