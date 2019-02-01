import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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

  constructor(private route: Router, private store: Store<AppState>) {
    this.store.select(getLoggedState)
      .subscribe((status: boolean) => this.loggedIn = status);
  }

  ngOnInit() { }

  logout() {
    this.route.navigate(['/login']);
  }
}
