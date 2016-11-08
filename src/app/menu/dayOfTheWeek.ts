import { Injectable } from '@angular/core';
import { Recipe } from '../recipe/new.component'

@Injectable()
export class DayOfTheWeek {

  name:string;
  recipes: Array<Recipe>;

  constructor(name: string) {
    this.name = name;
    this.recipes = new Array<Recipe>();
  }
}
