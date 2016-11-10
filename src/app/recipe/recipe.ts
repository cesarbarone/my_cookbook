import { Ingredient } from './../ingredient/ingredient'

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
