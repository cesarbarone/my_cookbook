import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2'
import { Menu } from './menu'
import { MenuService } from './menu.service'

@Component({
  selector: 'edit-menu',
  templateUrl: './edit.component.html',
  providers: [MenuService]
})

export class EditMenuComponent {

  menu: FirebaseObjectObservable<Menu>;
  recipes: FirebaseListObservable<any[]>;

  constructor(menuService: MenuService, af: AngularFire) {
    this.menu = menuService.get()
  };
}