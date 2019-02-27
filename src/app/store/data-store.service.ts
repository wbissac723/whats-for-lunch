import { Injectable } from '@angular/core';
import { UserProfile } from '../components/user-account/models/user-profile.model';

@Injectable({ providedIn: 'root' })
export class DataStoreService {

  userName: string;
  userEmail: string;

  userStoredInDB: boolean;
  tribeMember = false;

  createdTribe: string[] = [];

  profile: UserProfile;

}
