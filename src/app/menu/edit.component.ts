import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2'
import { Menu } from './menu'
import { MenuService } from './menu.service'
import { RecipeService } from '../recipe/recipe.service'

@Component({
  selector: 'edit-menu',
  templateUrl: './edit.component.html',
  providers: [MenuService, RecipeService]
})

export class EditMenuComponent implements OnInit {

  menus: Menu[];

  constructor(private menuService: MenuService, private recipeService: RecipeService) {
  };

  ngOnInit() {
  this.menuService.get()
    .subscribe(
      menus => this.menus = menus
    );
  // this.menuService.get
  }
}