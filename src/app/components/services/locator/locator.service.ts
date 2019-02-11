import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LocatorService {
    private yelpUrl = 'https://api.yelp.com/v3/businesses/search?';

    constructor(private http: HttpClient) { }

    getRestaurants(location: string, category: string) {
        const url = `${this.yelpUrl}location=${location}&categories=${category}`;
        return this.http.get(url);
    }
}
