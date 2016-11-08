import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2'
import { Recipe } from '../recipe/new.component'
import { Menu } from './menu'

@Component({
  selector: 'edit-menu',
  templateUrl: './edit.component.html',
})

export class EditMenuComponent {

  menu: FirebaseObjectObservable<Menu>;
  af: AngularFire;

  constructor(af: AngularFire) {
    this.af = af;
    this.menu = this.af.database.object('/menu')
    var menu = new Menu
    this.menu.set(menu)
  };
}