import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import * as firebase from 'firebase';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { RecipeModule } from './recipe/recipe.module';
import { MenuModule } from './menu/menu.module';

import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""
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
