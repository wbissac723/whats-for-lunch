import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const data = [
      {
        users: [
          { id: 1, username: 'draymond', password: 'abc123'},
          { id: 2, username: 'johndoe', password: 'abc123'},
          { id: 3, username: 'mikelarry', password: 'abc123'},
          { id: 4, username: 'stephcurry', password: 'abc123'},
          { id: 5, username: 'kevdurant', password: 'abc123'},
        ],
      }
    ];

    return {data};
  }
}
