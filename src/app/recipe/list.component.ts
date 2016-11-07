import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'

@Component({
  selector: 'list-recipes',
  templateUrl: './list.component.html'
})

export class ListComponent {

  recipes: FirebaseListObservable<any[]>;
  af: AngularFire;
  constructor(af: AngularFire) {
    this.af = af;
    this.listAllRecipes();
  };

  listAllRecipes() {
    this.recipes = this.af.database.list('/recipes');
  };
}