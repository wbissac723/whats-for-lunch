import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class AccountService {
    private url = 'https://meal-vote-api-2.herokuapp.com/api/users';

    constructor(private http: HttpClient) {}

    createUser(user: UserDetails): Observable<any> {
        const body = {
            userName: user.userName,
            email: user.userEmail
        };

        return this.http.post(this.url, body);
    }
}

export class UserDetails {
    userName: string;
    userEmail: string;
}

