import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginModule } from '../login.module';
import { LoginCredentials } from '../models/login.model';


@Injectable({ providedIn: LoginModule})
export class LoginService {
    private url = '';

    constructor(private http: HttpClient) {}

    login(credentials: LoginCredentials) {
        return this.http.post(this.url, credentials);
    }


}
