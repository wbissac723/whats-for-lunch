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
  public userProfile: UserProfile;

  constructor(
    private router: Router,
    private login: LoginService,
    private accountService: AccountService,
    private zone: NgZone,
    private store: DataStoreService
  ) { }

  ngOnInit() {
    this.store.profile.subscribe((profile: UserProfile) => {
      this.userProfile = profile;
    });
  }

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

    return this.accountService.findUser(this.userProfile.email)
      .subscribe(
        (user: UserProfile) => {
          // Check if response object has an email property
          if (user.email) {
            console.log('User located in database.');
            this.store.updateProfile(user);
            this.isLoading = false;
          }
          console.log('User not found in database.');
          this.navigateToUserPage();
        }, (err) => {
          console.log('Error occurred searching for user in database: ' + JSON.stringify(err, null, 2));
          this.isLoading = false;
        });
  }

  navigateToUserPage() {
    this.zone.run(() => {
      this.router.navigate(['/user/' + this.userProfile.userName]);
    });
  }

}
