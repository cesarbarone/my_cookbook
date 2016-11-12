import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Ingredient } from '../ingredient/ingredient'
import { Recipe, RecipeIngredient } from './recipe'
import { RecipeService } from './recipe.service'
import { IngredientService } from '../ingredient/ingredient.service'

@Component({
  selector: 'new-recipe',
  templateUrl: './new.component.html',
  providers: [RecipeService, IngredientService]
})

export class NewComponent implements OnInit {

  recipe: Recipe;
  recipeIngredient: RecipeIngredient;
  ingredients: Ingredient[];

  constructor(private recipeService: RecipeService, private ingredientService: IngredientService) {
    this.recipe = new Recipe('', '', new Array<RecipeIngredient>());
    this.recipeIngredient = new RecipeIngredient('', 0);
  };

  createRecipe() {
    this.recipeService.create(this.recipe);
  }

  addIngredient(recipeIngredient) {
    this.recipe.ingredients.push(recipeIngredient)
  }

  removeIngredient(index) {
    this.recipe.ingredients.splice(index, 1)
  }

  ngOnInit() {
    this.ingredientService.get()
      .subscribe(
        ingredients => this.ingredients = ingredients
      );
  }
}