import * as _ from "underscore"
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2'
import { Menu } from './menu'
import { MenuService } from './menu.service'
import { RecipeService } from '../recipe/recipe.service'
import { Recipe } from '../recipe/recipe'
import { DAYS_OF_THE_WEEK } from '../shared/constants/daysOfTheWeek'

@Component({
  selector: 'edit-menu',
  templateUrl: './edit.component.html',
  providers: [MenuService, RecipeService]
})

export class EditMenuComponent implements OnInit {

  menus: Menu[];
  menu: {};
  daysOfTheWeek: Array<any>;

  constructor(private menuService: MenuService, private recipeService: RecipeService) {
    this.daysOfTheWeek = DAYS_OF_THE_WEEK;
    this.menu = {
      'monday': new Array<Recipe>(),
      'tuesday': new Array<Recipe>(),
      'wednesday': new Array<Recipe>(),
      'thursday': new Array<Recipe>(),
      'friday': new Array<Recipe>(),
      'saturday': new Array<Recipe>(),
      'sunday': new Array<Recipe>(),
    };
  };

  public fillRecipes(menus: Menu[]) {
    this.menu = _.groupBy(menus, 'dayOfTheWeek')
    console.log(this.menu);
  }

  removeRecipe(menu, recipe) {
    this.menuService.remove(recipe)
  }

  ngOnInit() {
    this.menuService.get()
      .subscribe(
        menus => {
          this.menus = menus
          this.fillRecipes(menus)
        }
      );
  }
}