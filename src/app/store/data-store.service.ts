import { Injectable } from '@angular/core';
import { UserProfile } from '../components/user-account/models/user-profile.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataStoreService {

  // User profile observable
  private profileSource = new BehaviorSubject<UserProfile>(null);
  profile = this.profileSource.asObservable();

  updateProfile(profile: UserProfile) {
    this.profileSource.next(profile);

    // Updates profile in Local Storage
    localStorage.removeItem('meal-vote-profile');
    localStorage.setItem('meal-vote-profile', JSON.stringify(profile));
    console.log('DataStoreService--->> Successfully stored profile in Local Storage.');
  }

  getProfileFromLocalStorage(): UserProfile {
    const profile = JSON.parse(localStorage.getItem('meal-vote-profile'));
    return profile;
  }

}
