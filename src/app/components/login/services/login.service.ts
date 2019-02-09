import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userName;


  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router
  ) { }


  loginWithGoogle() {
    this.firebaseAuth.auth.signInWithPopup(new auth.GoogleAuthProvider)
      .then((data) => {
        this.userName = data.user.displayName;
        this.router.navigate(['/user/' + this.userName]);
      });
  }


  logout() {
    this.firebaseAuth.auth.signOut();
  }
}
