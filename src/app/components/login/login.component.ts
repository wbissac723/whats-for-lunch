import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../core/store';
import { Login } from './store/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.store.select<any>('login').subscribe(state => {
      console.log(state);
    });
  }

  login(username: string, password: string) {
    this.store.dispatch(new Login({ username, password }));
  }

}
