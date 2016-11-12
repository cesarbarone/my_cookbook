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
  name: string;
  quantity: number;

  constructor(name:string, quantity:number) {
    this.name = name;
    this.quantity = quantity;
  }
}
