import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2'

@Component({
  selector: 'new-recipe',
  templateUrl: './new.component.html',
})

export class NewComponent {

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