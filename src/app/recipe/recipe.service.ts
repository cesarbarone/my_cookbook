import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
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

  getById(id: string): FirebaseObjectObservable<Recipe> {
    return this.af.database.object("/recipes/" + id)
  }

  create(recipe) {
    return this.af.database.list('/recipes').push(recipe)
  }
}