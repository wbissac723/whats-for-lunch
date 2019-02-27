import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

import { DataStoreService } from 'src/app/store/data-store.service';

@Injectable({providedIn: 'root'})
export class LoginService {

  private _authenticated: boolean;

  get authenticated(): boolean {
    return this._authenticated;
  }

  constructor(
    private firebase: AngularFireAuth,
    private store: DataStoreService
    ) { }

  loginWithGoogle() {
    return this.firebase.auth.signInWithPopup(new auth.GoogleAuthProvider)
      .then((data) => {
        this._authenticated = true;

        this.store.userName = data.user.displayName;
        this.store.userEmail = data.user.email;
      })
      .catch((err) => {
        this._authenticated = false;
        console.log('Google Authentication failed. ' + JSON.stringify(err, null, 2));
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
