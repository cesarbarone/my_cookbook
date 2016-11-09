import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2'

import { Menu } from './menu';

@Injectable()
export class MenuService {

  af: AngularFire;

  constructor(af: AngularFire) {
    this.af = af;
  }

  get(): FirebaseObjectObservable<Menu> {
    return this.af.database.object('/menu')
  }

  addRecipe(dayOfTheWeek, key){
    this.af.database.list("/menu/friday/recipes").push(key)
  }
}