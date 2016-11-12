import * as _ from "underscore"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';

import { EditMenuComponent } from './edit.component';

@NgModule({
  declarations: [
    EditMenuComponent,
  ],
  exports: [
    EditMenuComponent,
  ],
  imports: [
    AngularFireModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [EditMenuComponent]
})
export class MenuModule { }
