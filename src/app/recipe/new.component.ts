import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2'

@Component({
  selector: 'new-recipe',
  templateUrl: './new.component.html',
})

export class NewComponent {

  recipes: FirebaseListObservable<Recipe[]>;
  recipe: Recipe;
  ingredient: Ingredient;
  af: AngularFire;

  constructor(af: AngularFire) {
    this.af = af;
    this.recipe = new Recipe('', '', new Array<Ingredient>());
    this.ingredient = new Ingredient('', 0);
    this.recipes = this.af.database.list('/recipes');
  };

  createRecipe() {
    this.recipes.push(this.recipe);
  }

  addIngredient(ingredient) {
    var i = new Ingredient(ingredient.name, ingredient.quantity)
    this.recipe.ingredients.push(i)
    console.log(this.recipe)
  }
}

export class Recipe {
  name: string;
  method: string;
  ingredients: Array<Ingredient>;

  constructor(name: string, method: string, ingredients: Array<Ingredient>) {
    this.name = name;
    this.method = method;
    this.ingredients = ingredients;
  }
}

export class Ingredient {
  name: string;
  quantity: number;

  constructor(name:string, quantity:number) {
    this.name = name;
    this.quantity = quantity;
  }
}