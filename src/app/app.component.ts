import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './store';
import { getLoggedState } from './components/login/store/login.selector';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public loggedIn: boolean;
  public showLoginText: boolean;
  public showCreateAccountText: boolean;


  constructor(private route: Router, private store: Store<AppState>) {
    this.store.select(getLoggedState)
      .subscribe((status: boolean) => this.loggedIn = status);
  }

  ngOnInit() {
    this.showLoginText = false;
    this.showCreateAccountText = true;
  }

  showCreateAccount() {
    this.showLoginText = true;
    this.showCreateAccountText = false;

    this.route.navigate(['/create_account']);
  }

  showLogin() {
    this.showLoginText = false;
    this.showCreateAccountText = true;

    this.route.navigate(['/login']);

  }

  logout() {
    this.route.navigate(['/login']);
  }
}
