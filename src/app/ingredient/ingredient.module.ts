import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';

import { NewIngredientComponent } from './new.component';

@NgModule({
  declarations: [
    NewIngredientComponent
  ],
  exports: [
    NewIngredientComponent
  ],
  imports: [
    FormsModule,
    AngularFireModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [NewIngredientComponent]
})
export class IngredientModule { }
