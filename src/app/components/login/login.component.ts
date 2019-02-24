import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Router } from '@angular/router';


import { LoginService } from './services/login.service';
import { AccountService, UserDetails } from '../services/account-service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  public isLoading: boolean;
  public userSaved: boolean;

  public user: UserDetails = new UserDetails();

  constructor(
    private router: Router,
    private login: LoginService,
    private accountService: AccountService,
    private zone: NgZone
  ) { }

  ngOnInit() { }

  loginWithGoogle() {
    this.isLoading = true;

    this.login.loginWithGoogle()
      .then(() => this.storeUserInDB())
      .catch((err) => {
        console.log('Error ' + JSON.stringify(err, null, 3));
        this.isLoading = false;
      });
  }

  storeUserInDB() {
     this.user.userName = this.login.userName;
     this.user.userEmail = this.login.userEmail;

     this.accountService.createUser(this.user)
      .subscribe(
        (user) => {
          this.userSaved = true;
          this.isLoading = false;
          this.navigateToUserPage();
      },
        (err) => {
          this.userSaved = false;
          this.isLoading = false;
          console.log('Failed to store user in database.' + JSON.stringify(err, null, 2));
      });
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
