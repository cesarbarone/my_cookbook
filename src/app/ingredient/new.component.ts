import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2'
import { Ingredient } from './ingredient'
import { IngredientService } from './ingredient.service'
import { MEASURES } from '../shared/constants/measures'

@Component({
  selector: 'new-ingredient',
  templateUrl: './new.component.html',
})

export class NewIngredientComponent implements OnInit {

  ingredients: Ingredient[];
  ingredient: Ingredient;

  constructor(private ingredientService: IngredientService) {
    this.ingredient = new Ingredient('')
  };

  createIngredient() {
    this.ingredientService.create(this.ingredient);
    this.ingredient.name = ''
  }

  ngOnInit() {
    this.ingredientService.get()
    .subscribe(
      ingredients => {
        this.ingredients = ingredients
      }
    );
  }
}
