import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AccountService } from '../services/account-service/account.service';
import { DataStoreService } from 'src/app/shared/store/data-store.service';
import { LoginService } from './services/login.service';

// Models
import { UserProfile } from '../user-account/models/user-profile.model';


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
      if (profile) { this.userProfile = profile; }
    });
  }

  loginWithGoogle() {
    this.isLoading = true;

    this.login.loginWithGoogle()
      .then(() => this.searchDBForProfile())
      .catch((err) => {
        console.log('LoginComponent-->> Error with Google auth login.' + JSON.stringify(err, null, 3));
        this.isLoading = false;
      });
  }

  searchDBForProfile() {
    console.log('LoginComponent-->> Searching database for user email: ' + this.userProfile.email);

    return this.accountService.findUser(this.userProfile.email)
      .subscribe(
        (user: UserProfile) => {

          // Check if response object has an email property
          if (user && user.email) {
            this.store.updateProfile(user);
            this.isLoading = false;
            console.log('LoginComponent-->> User located in database.');
          }

          console.log('LoginComponent-->> User not found in database.');
          this.navigateToUserPage();
        }, (err) => {
          console.log('LoginComponent-->> Error occurred searching for user in database: ' + JSON.stringify(err, null, 2));
          this.isLoading = false;
        });
  }

  navigateToUserPage() {
    this.zone.run(() => {
      this.router.navigate(['/user/' + this.userProfile.userName]);
    });
  }

}
