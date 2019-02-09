import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

declare const FB;
@Injectable({
  providedIn: 'root'
})
export class FacebookLoginService {

  constructor() { }

  registerFacebookSDK() {

    (window as any).fbAsyncInit = function () {

      FB.init({
        appId: '1992591394192303',
        cookie: true,
        xfbml: true,
        version: 'v3.2'
      });

      FB.AppEvents.logPageView();
      this.facebook = FB;
    };

    (function (d, s, id) {

      let js;
      const fjs = d.getElementsByTagName(s)[0];

      if (d.getElementById(id)) { return; }

      js = d.createElement(s); js.id = id;

      js.src = 'https://connect.facebook.net/en_US/sdk.js';

      fjs.parentNode.insertBefore(js, fjs);

    }

      (document, 'script', 'facebook-jssdk'));
  }

  getLoginStatus() {

    FB.getLoginStatus(function (response) {

      console.log(response);
      // statusChangeCallback(response);

    });
  }

  getUserDetails(usedId: string): Observable<string> {

    let userName: string;

    console.log('userid is' + usedId);

    return new Observable(observer => {

      FB.api('/' + usedId, {
        fields: 'id,name'
      },
        (response) => {

          console.log(response);

          if (response && !response.error) {

            userName = response.name;

            console.log('username is ' + userName);

            observer.next(userName);

          } else {

            console.log('error');

          }
        });
    });
  }
}
