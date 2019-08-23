import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/shared/store/data-store.service';
import { UserProfile } from './models/user-profile.model';
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})

export class UserAccountComponent implements OnInit {

  public tribeMember: boolean;
  public profile: UserProfile;

  constructor(private store: DataStoreService) { }

  ngOnInit() {
    this.checkStoreForProfile();
  }

  checkStoreForProfile() {
    this.store.profile.subscribe((user: UserProfile) => {

      // Handles lost profile when browser is refreshed
      if (!user) { this.getProfileFromLocalStorage(); }

      // Clone the profile found in the DataStore
      if (user) { this.profile = JSON.parse(JSON.stringify(user)); }

      // Check if user belongs to a tribe
      this.checkForTribe();
    });
  }

  getProfileFromLocalStorage() {
    console.log('UserAccountComponent-->> No profile exists in DataStore.');

    const cachedProfile = this.store.getProfileFromLocalStorage();
    this.store.updateProfile(cachedProfile);
    console.log('UserAccountComponent-->> Successfully retrieved profile from local storage.');
  }

  checkForTribe() {
    if (this.profile && this.profile.tribe && this.profile.tribe.length > 0) {
      this.tribeMember = true;
      console.log('UserAccountComponent-->> User belongs to a tribe.');

    } else {
      this.tribeMember = false;
      console.log('UserAccountComponent-->> User does not belong to a tribe.');
    }

  }

}
