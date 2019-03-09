import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { UserProfile } from '../../user-account/models/user-profile.model';


@Injectable({ providedIn: 'root' })
export class AccountService {
    private baseUrl = 'https://meal-vote-api-2.herokuapp.com/api/users';

    constructor(private http: HttpClient) { }

    createUser(profile: UserProfile): Observable<any> {

        return this.http.post<any>(this.baseUrl, profile);
    }

    findUser(email: string): Observable<UserProfile> {

        return this.http.post<UserProfile>(`${this.baseUrl}/profile`, email);
    }

    updateProfile(profile: UserProfile ): Observable<any> {

        return this.http.patch<UserProfile>(this.baseUrl, profile);
    }
}
