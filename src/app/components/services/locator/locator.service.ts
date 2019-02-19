import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { SearchParams } from './search-params/search-params.model';

@Injectable({
    providedIn: 'root'
})
export class LocatorService {
    private appEnvironment: boolean = environment.production;
    private url: string;

    constructor(private http: HttpClient) {
        this.url = (this.appEnvironment) ? 'productionURL' : '/api/restaurants/';
    }

    getRestaurants(search: SearchParams): Observable<any> {
        const endpoint = 'https://api.yelp.com/v3/businesses/search?location=';
        const request = `${endpoint}${search.location},${search.zipcode}&categories=${search.category}`;

        const body = { url: request };

        return this.http.post(this.url, body);
    }
}
