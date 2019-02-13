import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
  public isLoading: boolean;
  public subscription$: Subscription[];

  constructor(
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
