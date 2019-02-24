import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { DataStoreService } from 'src/app/store/data-store.service';


@Injectable({providedIn: 'root'})
export class TribeService {
    private url = 'https://meal-vote-api-2.herokuapp.com/api/tribes';

    constructor(private http: HttpClient, private store: DataStoreService) {}

    createTribe(tribeName: string): Observable<any> {
        const body = {
            tribeName: tribeName,
            tribeCreator: this.store.userName,
            tribeMember: this.store.userName
        };

        return this.http.post(this.url, body);
    }
}

