import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from './store';
import { getLoggedState } from './components/login/store/login.selector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public loggedIn: boolean;

  constructor(private store: Store<AppState>) {
    this.store.select(getLoggedState).subscribe(
      status => {
        this.loggedIn = status;
      });
  }
}
