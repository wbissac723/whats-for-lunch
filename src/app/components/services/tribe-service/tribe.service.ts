import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { LoginService } from '../../login/services/login.service';


@Injectable({providedIn: 'root'})
export class TribeService {
    private url = 'https://meal-vote-api-2.herokuapp.com/api/tribes';

    constructor(private http: HttpClient, private login: LoginService) {}

    createTribe(tribeName: string): Observable<any> {
        const body = {
            tribeName: tribeName,
            tribeCreator: this.login.userName,
            tribeMemeber: this.login.userName
        };

        return this.http.post(this.url, body);
    }
}

