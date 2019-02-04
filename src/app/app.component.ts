import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from './store';
import { getLoggedState } from './components/login/store/login.selector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public loggedIn: boolean;
  public showLoginText: boolean;
  public showCreateAccountText: boolean;


  constructor(private router: Router, private store: Store<AppState>) {
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

    this.router.navigate(['/create_account']);
  }

  showLogin() {
    this.showLoginText = false;
    this.showCreateAccountText = true;

    this.router.navigate(['/login']);

  }

  logout() {
    this.router.navigate(['/login']);
  }
}
