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
      })
      .catch((err) => {
        console.log('Error with Google auth login.' + JSON.stringify(err, null, 3));
        this.isLoading = false;
      });
  }

  searchForUserProfile() {
    console.log('Checking database for existing profile.');

    return this.accountService.findUser(this.store.userEmail)
      .subscribe(
        (user) => {

          // Check if email property exists on response object
          if (!user.email) {
            console.log('User is not found.');

            // Store user in database
            return this.storeUserInDB();
          }

          // Add existing profile from database into StoreService
          this.store.profile = user;
          this.isLoading = false;
          console.log('User found in database. ' + JSON.stringify(user, null, 2));
        }, (err) => {
          console.log('Error occurred searching database for profile. ' + JSON.stringify(err, null, 2));
          this.isLoading = false;
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
          this.store.userStoredInDB = true;
          this.isLoading = false;
          this.navigateToUserPage();
          console.log('User successful store in database.');
        },
        (err) => {
          this.store.userStoredInDB = false;
          this.isLoading = false;
          console.log('Failed to store user in database.' + JSON.stringify(err, null, 2));
        });
  }

  cacheDataLocally() {
    localStorage.setItem('mealVoteUserName', this.user.userName);
    localStorage.setItem('mealVoteUserEmail', this.user.userEmail);
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
