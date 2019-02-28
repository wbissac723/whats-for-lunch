import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class AccountService {
    private usersEndpoint = 'https://meal-vote-api-2.herokuapp.com/api/users';
    private userProfileEndPoint = 'https://meal-vote-api-2.herokuapp.com/api/users/profile';

    constructor(private http: HttpClient) {}

    createUser(userName: string, email: string): Observable<any> {
        const body = { userName, email };

        return this.http.post(this.usersEndpoint, body);
    }

    findUser(email: string): Observable<any> {
        const body = { email };

        return this.http.post(this.userProfileEndPoint, body);
    }
}

