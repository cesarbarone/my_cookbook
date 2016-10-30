import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';

import { NewComponent } from './new.component';
import { ListComponent } from './list.component';


@NgModule({
  declarations: [
    NewComponent,
    ListComponent
  ],
  exports: [
    NewComponent,
    ListComponent
  ],
  imports: [
    FormsModule,
    AngularFireModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [NewComponent, ListComponent]
})
export class RecipeModule { }
