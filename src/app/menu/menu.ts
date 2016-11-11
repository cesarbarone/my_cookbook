import { Injectable } from '@angular/core';
import { DayOfTheWeek } from './dayOfTheWeek'

@Injectable()
export class Menu {

  recipe: string;
  dayOfTheWeek: string;

  constructor(recipe: string, dayOfTheWeek: string) {
    this.recipe = recipe;
    this.dayOfTheWeek = dayOfTheWeek;
  }
}