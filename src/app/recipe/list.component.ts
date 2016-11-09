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
  menuService: MenuService;

  constructor(af: AngularFire, menuService: MenuService) {
    this.menuService = menuService;
    this.af = af;
    this.listAllRecipes();
  };

  listAllRecipes() {
    this.recipes = this.af.database.list('/recipes');
  };

  addRecipe(recipe) {
    this.menuService.addRecipe('friday', recipe.$key)
  }
}