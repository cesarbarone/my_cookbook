import { Injectable } from '@angular/core';
import { Recipe, RecipeIngredient } from '../recipe/recipe'

@Injectable()
export class Menu {

  recipe: Recipe;
  dayOfTheWeek: string;

  constructor(recipe: Recipe, dayOfTheWeek: string) {
    this.recipe = recipe;
    this.dayOfTheWeek = dayOfTheWeek;
  }
}