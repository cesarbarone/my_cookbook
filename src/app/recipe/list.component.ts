import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods } from 'angularfire2'

@Component({
  selector: 'list-recipes',
  templateUrl: './list.component.html'
})

export class ListComponent {

  recipes: FirebaseListObservable<any[]>;
  af: AngularFire;
  constructor(af: AngularFire) {
    this.af = af;
    af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    });
  };

  listAllRecipes() {
    this.recipes = this.af.database.list('/recipes');
  };
}