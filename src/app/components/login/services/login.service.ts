import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userName;

  constructor(
    private firebase: AngularFireAuth,
    private router: Router,
    private zone: NgZone,
  ) { }

  loginWithGoogle() {
    this.firebase.auth.signInWithPopup(new auth.GoogleAuthProvider)
      .then((data) => {
        this.userName = data.user.displayName;
        this.zone.run(() => {
          this.router.navigate(['/user/' + this.userName]);
        });
      });
  }

  logout() {
    this.firebase.auth.signOut();
  }
}
