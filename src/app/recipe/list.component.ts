import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { MenuService } from '../menu/menu.service'
import { Menu } from '../menu/menu'

@Component({
  selector: 'list-recipes',
  templateUrl: './list.component.html',
  providers: [MenuService]
})

export class ListComponent {

  recipes: FirebaseListObservable<any[]>;
  af: AngularFire;
  menu: FirebaseObjectObservable<Menu>;

  constructor(af: AngularFire, menuService: MenuService) {
    this.menu = menuService.get();
    this.af = af;
    this.listAllRecipes();
  };

  listAllRecipes() {
    this.recipes = this.af.database.list('/recipes');
  };

  setFriday() {
    this.menu.update({friday: {name: 'sexta uhul'}})
  }
}