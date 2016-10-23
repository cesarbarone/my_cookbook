import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2'

@Component({
  selector: 'new-recipe',
  templateUrl: './new-recipe.component.html',
})

export class NewRecipeComponent {

  recipes: FirebaseListObservable<Recipe[]>;
  recipe: Recipe = {
    name: ''
  };
  af: AngularFire;

  constructor(af: AngularFire) {
    this.af = af;
    this.recipes = this.af.database.list('/recipes');
  };

  createRecipe() {
    this.recipes.push(this.recipe);
  }
}

export class Recipe {
  name: string;
}