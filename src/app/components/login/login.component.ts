import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginState } from './store';

import { Observable } from 'rxjs';
import { getLoggedState } from './store/login.selector';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<LoginState>) { }

  ngOnInit() {
    this.loggedIn$ = this.store.select(getLoggedState);

  }


}
