import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/store/data-store.service';
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

      // Checking DataStore to see if profile exists. Needed for browser refresh
      if (!user) {
        console.log('UserAccountComponent-->> No profile exists in DataStore.');
        // Get profile from Local Storage
        const cachedProfile = this.store.getProfileFromLocalStorage();
        this.store.updateProfile(cachedProfile);
        console.log('UserAccountComponent-->> Successfully retrieved profile from local storage.');
      }

      this.profile = JSON.parse(JSON.stringify(user));
      console.log('UserAccountComponent---> profile found in DataStore ' + JSON.stringify(this.profile, null, 2));

      // Check if user belongs to a tribe
      if (this.profile && this.profile.tribe && this.profile.tribe.length > 0) {
        this.tribeMember = true;
        console.log('UserAccountComponent-->> User belongs to a tribe.');

      } else {
        this.tribeMember = false;
        console.log('UserAccountComponent-->> User does not belong to a tribe.');
      }
    });
  }

}
