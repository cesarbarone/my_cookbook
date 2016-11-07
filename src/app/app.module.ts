import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import * as firebase from 'firebase';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { RecipeModule } from './recipe/recipe.module';
import { MenuModule } from './menu/menu.module';

import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: "AIzaSyCL0LhoHZ_nnzmj1FCJEogw43jQR3w8JUs",
  authDomain: "my-cookbook-8a2d2.firebaseapp.com",
  databaseURL: "https://my-cookbook-8a2d2.firebaseio.com",
  storageBucket: "my-cookbook-8a2d2.appspot.com",
  messagingSenderId: "912964350150"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    RecipeModule,
    MenuModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
