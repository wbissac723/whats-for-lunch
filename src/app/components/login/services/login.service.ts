import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userName;
  private _authenticated: boolean;

  get authenticated(): boolean {
    return this._authenticated;
  }

  constructor(
    private firebase: AngularFireAuth,
    private router: Router,
    private zone: NgZone,
  ) { }

  loginWithGoogle() {
    this.firebase.auth.signInWithPopup(new auth.GoogleAuthProvider)
      .then((data) => {    // TODO convert promise to an observable
        this._authenticated = true;
        this.userName = data.user.displayName;

        this.zone.run(() => {
          this.router.navigate(['/user/' + this.userName]);
        });
      });
  }

  // TODO implementation not complete
  loginWithFacebook() {
    this.firebase.auth.signInWithPopup(new auth.FacebookAuthProvider)
     .then((data) => {
       console.log(JSON.stringify(data, null , 4));
     });
  }

  logout() {
    this.firebase.auth.signOut();
  }
}
