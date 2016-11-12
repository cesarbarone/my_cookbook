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
  measure: string;

  constructor(name:string, quantity:number, measure: string) {
    this.name = name;
    this.quantity = quantity;
    this.measure = measure;
  }
}
