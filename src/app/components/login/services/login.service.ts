import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

import { DataStoreService } from 'src/app/store/data-store.service';
import { UserProfile } from '../../user-account/models/user-profile.model';

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

        // Create user profile
        const profile = new UserProfile();
        profile.userName = data.user.displayName;
        profile.email = data.user.email;

        this.store.updateProfile(profile);
      })
      .catch((err) => {
        this._authenticated = false;
        console.log('Google Authentication failed. ' + JSON.stringify(err, null, 2));
      });
  }

  logout() {
    this.firebase.auth.signOut();
  }
}
