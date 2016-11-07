import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2'

@Component({
  selector: 'new-ingredient',
  templateUrl: './new.component.html',
})

export class NewIngredientComponent {

  ingredients: FirebaseListObservable<Ingredient[]>;
  ingredient: Ingredient;
  af: AngularFire;

  constructor(af: AngularFire) {
    this.af = af;
    this.ingredients = this.af.database.list('/ingredients')
    this.ingredient = new Ingredient('')
  };

  createIngredient() {
    this.ingredients.push(this.ingredient);
    this.ingredient.name = ''
  }
}

export class Ingredient {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}