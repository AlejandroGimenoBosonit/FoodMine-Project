import { Component, OnInit } from '@angular/core';

// Types
import { Food } from '../../../shared/models/Food';
import { FoodServiceTsService } from '../../../services/food.service.ts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // local variable 
  foods: Food[] = [];

  // service injection to update local variable
  constructor( 
    private foodService: FoodServiceTsService, 
    // Provides access to information about a route associated with a component that is loaded in an outlet.
    private activatedRoute:ActivatedRoute
    ) { 

      activatedRoute.params.subscribe((params)=>{
        const searchTerm: string = params.searchTerm;
        
        if(searchTerm){
          // update local variable to display 
          this.foods = this.foodService.getAllFoodsBySearchTerm(searchTerm);
        }else if(params.tag) {
          this.foods = this.foodService.getAllFoodsByTag(params.tag);
        }else{
        // update local variable
        this.foods = foodService.getAll();
        }
      });

   }

  ngOnInit(): void {
  }
/**
 * TODO: Isolate product as card component
 */
}


