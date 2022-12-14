import { Component, OnInit } from '@angular/core';

// Types
import { Food } from '../../../shared/models/Food';
import { FoodServiceTsService } from '../../../services/food.service.ts.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

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
      // let foodObservable: Observable<Food[]>;
      activatedRoute.params.subscribe((params)=>{

        const searchTerm: string = params.searchTerm;
        const tag: string = params.tag;
        
        if(searchTerm){
          // update local variable to display 
          this.foodService
              .getAllFoodsBySearchTerm(searchTerm)
              .subscribe((element)=> {
                this.foods = element;
              });
        }else if(tag) {
          this.foodService
              .getAllFoodsByTag(params.tag)
              .subscribe(element => {
                this.foods = element;
              });
         
          
        }else{
          // update local variable
          foodService
          .getAll()
          .subscribe((element)=>{
            this.foods = element;
          });
        }
      });

   }

  ngOnInit(): void {
  }
/**
 * TODO: Isolate product as card component
 */
}


