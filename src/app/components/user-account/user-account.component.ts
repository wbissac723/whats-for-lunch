import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from '../../store';
import * as fromLogin from '../login/store/login.actions';


@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})

export class UserAccountComponent implements OnInit {

  public username: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.username = this.route.snapshot.paramMap.get('username');
  }




  ngOnInit() {
    // this.store.dispatch(new fromLogin.LoginSuccess);
  }

}
