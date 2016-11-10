import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2'
import { Recipe } from './recipe'

@Injectable()
export class RecipeService {

  af: AngularFire;

  constructor(af: AngularFire) {
    this.af = af;
  }

  get(): FirebaseListObservable<Recipe[]> {
    return this.af.database.list('/recipes')
  }

  create(recipe) {
    return this.af.database.list('/recipes').push(recipe)
  }
}