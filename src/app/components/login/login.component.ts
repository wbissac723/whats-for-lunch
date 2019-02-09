import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { FacebookLoginService } from './services/facebook-login.service';


declare const FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
  public isLoading: boolean;
  public subscription$: Subscription;


  constructor(
    private zone: NgZone,
    private router: Router,
    private facebookLoginService: FacebookLoginService,
  ) { }


  ngOnInit() {
    this.facebookLoginService.registerFacebookSDK();
  }


  submitLogin() {
    console.log('submit login to fb');
    FB.login((response) => {
      console.log('submitlogin', response);
      if (response.authResponse) {

        this.facebookLoginService.getUserDetails(response.authResponse.userID).subscribe((data) => {

          if (data != null) {
            console.log('data is ' + data);

            // Reference :https://stackoverflow.com/questions/44745354/ngoninit-not-being-called-after-router-navigate/47480431#47480431

            this.zone.run(() => {
              this.router.navigate([`/user/${data}`]);
            });
          }

        });
      } else {
        console.log('user login failed');
      }
    });
  }


  ngOnDestroy() {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }

  }
}
