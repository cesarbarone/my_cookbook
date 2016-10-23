import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { NewRecipeComponent } from './new-recipe.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCL0LhoHZ_nnzmj1FCJEogw43jQR3w8JUs",
  authDomain: "my-cookbook-8a2d2.firebaseapp.com",
  databaseURL: "https://my-cookbook-8a2d2.firebaseio.com",
  storageBucket: "my-cookbook-8a2d2.appspot.com",
  messagingSenderId: "912964350150"
};

@NgModule({
  declarations: [
    AppComponent,
    NewRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent, NewRecipeComponent]
})
export class AppModule { }
