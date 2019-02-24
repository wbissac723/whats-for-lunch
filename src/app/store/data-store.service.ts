import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class DataStoreService {

  userName: string;
  userEmail: string;
  userStoredInDB: boolean;
  createdTribe: string[] = [];

}
