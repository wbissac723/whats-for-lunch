import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Router } from '@angular/router';


import { LoginService } from './services/login.service';
import { AccountService, UserDetails } from '../services/account-service/account.service';
import { DataStoreService } from 'src/app/store/data-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  public isLoading: boolean;

  public user: UserDetails = new UserDetails();

  constructor(
    private router: Router,
    private login: LoginService,
    private accountService: AccountService,
    private zone: NgZone,
    private store: DataStoreService
  ) { }

  ngOnInit() { }

  loginWithGoogle() {
    this.isLoading = true;

    this.login.loginWithGoogle()
      .then(() => {
        this.searchForUserProfile();

        // this.storeUserInDB();
      })
      .catch((err) => {
        console.log('Error ' + JSON.stringify(err, null, 3));

        this.isLoading = false;
      });
  }

  searchForUserProfile() {
    return this.accountService.findUser(this.store.userEmail)
      .subscribe(
        (user) => {

          // Check if email property exists
          if (!user.email) {
            console.log('User is not found in database.');

            return this.storeUserInDB();
          }
          this.store.profile = user;

          console.log('User exists in database. ' + JSON.stringify(user, null, 2));
        }, (err) => {

        });

  }

  storeUserInDB() {
    console.log('Storing user in database');

    this.user.userName = this.store.userName;
    this.user.userEmail = this.store.userEmail;
    this.cacheDataLocally();

    this.accountService.createUser(this.user)
      .subscribe(
        (user) => {
          console.log('User successful store in database.');

          this.store.userStoredInDB = true;
          this.isLoading = false;
          this.navigateToUserPage();
        },
        (err) => {
          this.store.userStoredInDB = false;
          this.isLoading = false;

          console.log('Failed to store user in database.' + JSON.stringify(err, null, 2));
        });
  }

  cacheDataLocally() {
    localStorage.setItem('mealVoteUserName', this.user.userName);
  }

  loginWithFacebook() {
    this.login.loginWithFacebook();
  }

  navigateToUserPage() {
    this.zone.run(() => {
      this.router.navigate(['/user/' + this.user.userName]);
    });
  }

  ngOnDestroy() { }

}
