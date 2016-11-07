import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'

@Component({
  selector: 'search-recipes',
  templateUrl: './search.component.html'
})

export class SearchComponent {

  recipes: FirebaseListObservable<any[]>;
  af: AngularFire;
  constructor(af: AngularFire) {
    this.af = af;
  };

  search() {
  };
}