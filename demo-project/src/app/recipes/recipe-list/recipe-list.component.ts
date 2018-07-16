import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'This is test recipe 1', 'https://i0.wp.com/palatablepastime.com/wp-content/uploads/2017/11/american-goulash-wide.jpg?fit=1024%2C733&ssl=1'),
    new Recipe('Test Recipe 2', 'This is test recipe 2', 'https://upload.wikimedia.org/wikipedia/commons/7/79/Goulash_from_usa.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
