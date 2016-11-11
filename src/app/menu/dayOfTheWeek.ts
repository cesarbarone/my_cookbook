import { Injectable } from '@angular/core';
import { Recipe } from '../recipe/recipe'

@Injectable()
export class DayOfTheWeek {

  name:string;
  recipe: string;

  constructor(name: string) {
    this.name = name;
    // this.recipe = new Array<Recipe>();
  }
}
