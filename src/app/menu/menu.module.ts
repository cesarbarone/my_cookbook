import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { RecipeModule } from '../recipe/recipe.module'

import { EditMenuComponent } from './edit.component';

@NgModule({
  declarations: [
    EditMenuComponent
  ],
  exports: [
    EditMenuComponent,
  ],
  imports: [
    AngularFireModule,
    BrowserModule,
    RecipeModule
  ],
  providers: [],
  bootstrap: [EditMenuComponent]
})
export class MenuModule { }
