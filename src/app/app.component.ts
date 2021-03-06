import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recipes: FirebaseListObservable<any[]>;
  af: AngularFire;

  constructor(af: AngularFire) {
    this.af = af;
  };

  login() {
    this.af.auth.login();
  };
}