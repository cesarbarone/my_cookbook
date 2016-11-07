import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2'
import { Ingredient } from '../ingredient/new.component'

@Component({
  selector: 'new-recipe',
  templateUrl: './new.component.html',
})

export class NewComponent {

  recipes: FirebaseListObservable<Recipe[]>;
  recipe: Recipe;
  recipeIngredient: RecipeIngredient;
  ingredients: FirebaseListObservable<Ingredient[]>;
  af: AngularFire;

  constructor(af: AngularFire) {
    this.af = af;
    this.recipe = new Recipe('', '', new Array<RecipeIngredient>());
    this.recipeIngredient = new RecipeIngredient(new Ingredient(''), 0);
    this.recipes = this.af.database.list('/recipes');
    this.ingredients = this.af.database.list('/ingredients')
  };

  createRecipe() {
    this.recipes.push(this.recipe);
  }

  addIngredient(recipeIngredient) {
    this.recipe.ingredients.push(recipeIngredient)
  }

  removeIngredient(index) {
    this.recipe.ingredients.splice(index, 1)
  }

  formatIngredient(i) {
    return i.name
  }
}

export class Recipe {
  name: string;
  method: string;
  ingredients: Array<RecipeIngredient>;

  constructor(name: string, method: string, ingredients: Array<RecipeIngredient>) {
    this.name = name;
    this.method = method;
    this.ingredients = ingredients;
  }
}

export class RecipeIngredient {
  ingredient: Ingredient;
  quantity: number;

  constructor(ingredient:Ingredient, quantity:number) {
    this.ingredient = ingredient;
    this.quantity = quantity;
  }
}
