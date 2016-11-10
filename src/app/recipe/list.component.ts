import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { MenuService } from '../menu/menu.service'
import { Menu } from '../menu/menu'
import { Recipe } from './new.component'
import { RecipeService } from './recipe.service'

@Component({
  selector: 'list-recipes',
  templateUrl: './list.component.html',
  providers: [RecipeService]
})

export class ListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
  };

  listAllRecipes() {
  };

  ngOnInit() {
    this.recipeService.get()
      .subscribe(
        recipes => this.recipes = recipes
      );
  }
  addRecipe(recipe) {
    // console.log(recipe)
    // var copy = Object.assign({}, recipe)
    // this.menuService.addRecipe('friday', recipe)
  }
}