import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginModule } from '../login.module';
import { LoginCredentials } from '../models/login.model';
import { Router } from '@angular/router';


@Injectable({ providedIn: LoginModule})
export class LoginService {
    private url = '';

    constructor(private http: HttpClient, private router: Router) {}

    login(credentials: LoginCredentials) {
        const username = credentials.username;

        this.router.navigate([`/user/${username}`]);
        return this.http.post(this.url, credentials);

    }


}
