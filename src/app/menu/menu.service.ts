import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2'

import { Menu } from './menu';

@Injectable()
export class MenuService {

  af: AngularFire;

  constructor(af: AngularFire) {
    this.af = af;
  }

  get(): FirebaseListObservable<Menu[]> {
    return this.af.database.list('/menus')
  }

  addRecipe(dayOfTheWeek, recipe){
    delete(recipe.$key)
    delete(recipe.$exists)
    const menu = new Menu(recipe, dayOfTheWeek)
    this.af.database.list("/menus").push(menu)
  }

  remove(recipe){
    this.af.database.list("/menus").remove(recipe.$key)
  }
}