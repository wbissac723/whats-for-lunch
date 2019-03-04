import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';


import { LoginService } from './services/login.service';
import { AccountService } from '../services/account-service/account.service';
import { DataStoreService } from 'src/app/store/data-store.service';
import { UserProfile } from '../user-account/models/user-profile.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public isLoading: boolean;

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
    console.log('Searching database for user.');

    return this.accountService.findUser(this.store.userEmail)
      .subscribe(
        (user) => {
          // Check if response object has an email property
          if (user.email) {
            console.log('User located in database.');
            this.store.profile = user;
            this.isLoading = false;
          }
          console.log('User not found in database.');
          this.cacheUserProfileInLocalStore(user);
          this.navigateToUserPage();
        }, (err) => {
          console.log('Error occurred searching for user in database: ' + JSON.stringify(err, null, 2));
          this.isLoading = false;
        });
  }


  cacheUserProfileInLocalStore(profile?: UserProfile) {
    if (!_.isEmpty(profile)) {
      localStorage.setItem('cachedProfile', JSON.stringify(profile));
    } else {
      const userDetails = {
        'userName': this.store.userName,
        'userEmail': this.store.userEmail
      };

      localStorage.setItem('cachedUserDetails', JSON.stringify(userDetails));
    }
  }

  navigateToUserPage() {
    this.zone.run(() => {
      this.router.navigate(['/user/' + this.store.userName]);
    });
  }

}
