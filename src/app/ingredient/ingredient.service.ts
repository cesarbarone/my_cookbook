import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2'
import { Ingredient } from './ingredient'

@Injectable()
export class IngredientService {

  af: AngularFire;

  constructor(af: AngularFire) {
    this.af = af;
  }

  get(): FirebaseListObservable<Ingredient[]> {
    return this.af.database.list('/ingredients')
  }

  create(ingredient) {
    return this.af.database.list('/ingredients').push(ingredient)
  }
}