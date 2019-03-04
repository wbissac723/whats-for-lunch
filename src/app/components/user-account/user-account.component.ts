import { Component, OnInit } from '@angular/core';

// Services
import { DataStoreService } from 'src/app/store/data-store.service';
import { UserProfile } from './models/user-profile.model';
import * as _ from 'lodash';
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})

export class UserAccountComponent implements OnInit {

  public username: string;
  public tribeMember: boolean;
  public profile: UserProfile;
  public cachedProfile: UserProfile;
  public cachedUserDetails: any;

  constructor(private store: DataStoreService) {
    this.username = this.store.userName;
    this.profile = this.store.profile;
    this.tribeMember = this.store.tribeMember;

    // Gets user name from local storage when page is refreshed
    if (!this.username) {
      this.cachedProfile = JSON.parse(localStorage.getItem('cachedProfile'));
      this.cachedUserDetails = JSON.parse(localStorage.getItem('cachedUserDetails'));

      if (!_.isEmpty(this.cachedProfile)) {
        this.store.userName = this.cachedProfile.userName;
        this.store.userEmail = this.cachedProfile.email;
      } else {
        this.store.userName = this.cachedUserDetails.userName;
        this.store.userEmail = this.cachedUserDetails.userEmail;
      }
    }
  }

  ngOnInit() {
    this.checkForTribe();
  }

  checkForTribe() {
    if (this.profile && this.profile.tribe.length > 0) {
      this.tribeMember = true;
    } else {
      this.tribeMember = false;
      console.log('User does not currently belong to a tribe.');
    }
  }
}
