import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2'
import { Recipe } from '../recipe/new.component'

@Component({
  selector: 'edit-menu',
  templateUrl: './edit.component.html',
})

export class EditMenuComponent {

  menu: FirebaseObjectObservable<Recipe>;
  af: AngularFire;

  constructor(af: AngularFire) {
    this.af = af;
    this.menu = this.af.database.object('/menu')
    var menu = new Menu
    this.menu.set(menu)
  };
}

export class Menu {

  monday: DayOfTheWeek;
  tuesday: DayOfTheWeek;
  wednesday: DayOfTheWeek;
  thursday: DayOfTheWeek;
  friday: DayOfTheWeek;
  saturday: DayOfTheWeek;
  sunday: DayOfTheWeek;

  constructor() {
    this.monday = new DayOfTheWeek('monday');
    this.tuesday = new DayOfTheWeek('tuesday');
    this.wednesday = new DayOfTheWeek('wednesday');
    this.thursday = new DayOfTheWeek('thursday');
    this.friday = new DayOfTheWeek('friday');
    this.saturday = new DayOfTheWeek('saturday');
    this.sunday = new DayOfTheWeek('sunday');
  }
}

export class DayOfTheWeek {

  name:string;
  recipes: Array<Recipe>;

  constructor(name: string) {
    this.name = name;
    this.recipes = new Array<Recipe>();
  }
}