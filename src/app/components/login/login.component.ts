import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { LoginService } from './services/login.service';




declare const FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
  public isLoading: boolean;
  public subscription$: Subscription[];


  constructor(
    private zone: NgZone,
    private router: Router,
    private loginService: LoginService
  ) { }


  ngOnInit() { }


  loginGoogle() {
    this.loginService.loginWithGoogle();
  }

  ngOnDestroy() {
    if (this.subscription$) {
      // this.subscription$.unsubscribe();
    }

  }
}
