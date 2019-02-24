import { Injectable } from '@angular/core';

import { LoginService } from '../components/login/services/login.service';

@Injectable({providedIn: 'root'})
export class DataStoreService {

  userName = this.login.userName;
  userEmail = this.login.userEmail;

  userStoredInDB: boolean;
  createdTribe = [];

  constructor(private login: LoginService) { }


}
