import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AccountService {
    private baseUrl = 'https://meal-vote-api-2.herokuapp.com/api/users';

    constructor(private http: HttpClient) { }

    createUser(userName: string, email: string): Observable<any> {
        const body = { userName, email };

        return this.http.post(this.baseUrl, body);
    }

    findUser(email: string): Observable<any> {
        const body = { email };

        return this.http.post(`${this.baseUrl}/profile`, body);
    }

    createTribe(email: string, tribeName: string): Observable<any> {
        const body = {
            email,
            tribeName: [
                { name: tribeName }
            ]
        };

        return this.http.patch(this.baseUrl, body);
    }
}
