import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Ingredient } from '../ingredient/ingredient'
import { Recipe, RecipeIngredient } from './recipe'
import { RecipeService } from './recipe.service'
import { IngredientService } from '../ingredient/ingredient.service'
import { MarkdownParser } from '../markdown/markdownParser'
import { MEASURES } from '../shared/constants/measures'

@Component({
  selector: 'new-recipe',
  templateUrl: './new.component.html',
  providers: [RecipeService, IngredientService, MarkdownParser]
})

export class NewComponent implements OnInit {

  recipe: Recipe;
  recipeIngredient: RecipeIngredient;
  ingredients: Ingredient[];
  measures: Array<any>;
  methodPreview: string;

  constructor(private recipeService: RecipeService, private ingredientService: IngredientService, private markdownParser: MarkdownParser) {
    this.recipe = new Recipe('', '', new Array<RecipeIngredient>());
    this.recipeIngredient = new RecipeIngredient('', 0, '');
    this.measures = MEASURES;
    this.methodPreview = ''
  };

  createRecipe() {
    this.recipeService.create(this.recipe);
  }

  updatePreview() {
    this.methodPreview = this.markdownParser.parse(this.recipe.method);
  }
  addIngredient(recipeIngredient) {
    this.recipe.ingredients.push(recipeIngredient)
    this.recipeIngredient = new RecipeIngredient('', 0, '');
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