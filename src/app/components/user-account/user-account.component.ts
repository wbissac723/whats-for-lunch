import { Component, OnInit } from '@angular/core';

// Services
import { DataStoreService } from 'src/app/store/data-store.service';
import { UserProfile } from './models/user-profile.model';
import { Profile } from 'selenium-webdriver/firefox';
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})

export class UserAccountComponent implements OnInit {

  public username: string;
  public tribeMember: boolean;
  public profile: UserProfile;

  constructor(private store: DataStoreService) {
    this.username = this.store.userName;
    this.profile = this.store.profile;

    // Gets user name from local storage when page is refreshed
    if (!this.username) {
      this.store.userName = localStorage.getItem('mealVoteUserName');
    }
  }

  ngOnInit() {
    this.checkForTribe();
   }

   checkForTribe() {
     if (this.profile.tribe.length > 0) {
      this.tribeMember = true;
     } else {
       this.tribeMember = false;
     }
   }
}
