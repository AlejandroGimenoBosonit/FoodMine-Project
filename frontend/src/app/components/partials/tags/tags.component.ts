import { Component, OnInit } from '@angular/core';

import { Tag } from '../../../shared/models/Tags';

import { FoodServiceTsService } from 'src/app/services/food.service.ts.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags?:Tag[];

  constructor( private foodService: FoodServiceTsService ) { 
    this.tags = foodService.getAllTags();
  }

  ngOnInit(): void {
  }

}
