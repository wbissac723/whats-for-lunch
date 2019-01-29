import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { LoginState } from './store';
import { Login } from './store/login.actions';
import { isLoading } from './store/login.selector';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading: boolean;

  constructor(private store: Store<LoginState>) { }

  ngOnInit() {
    this.store.select(isLoading)
      .subscribe((status: boolean) =>  this.isLoading = status);
  }

  login() {
    this.store.dispatch(new Login({username: 'asdd', password: 'afafds'}));

  }


}
