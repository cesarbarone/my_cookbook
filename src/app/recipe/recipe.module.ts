import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { IngredientModule } from '../ingredient/ingredient.module';

import { NewComponent } from './new.component';
import { ListComponent } from './list.component';
import { SearchComponent } from './search.component';


@NgModule({
  declarations: [
    NewComponent,
    ListComponent,
    SearchComponent
  ],
  exports: [
    NewComponent,
    ListComponent,
    SearchComponent
  ],
  imports: [
    FormsModule,
    AngularFireModule,
    BrowserModule,
    IngredientModule
  ],
  providers: [],
  bootstrap: [NewComponent, ListComponent, SearchComponent]
})
export class RecipeModule { }
