import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';;

@Injectable({
    providedIn: 'root'
})
export class LocatorService {
    private url = 'https://api.yelp.com/v3/businesses/search?location=';
    constructor(private http: HttpClient) { }

    getRestaurants(location: string, category: string): Observable<any> {
        const url = this.url + location + '&categories=' + category;

        return this.http.get(url);
    }
}
