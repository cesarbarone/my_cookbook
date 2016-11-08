import { Injectable } from '@angular/core';
import { DayOfTheWeek } from './dayOfTheWeek'

@Injectable()
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