import { Component, OnInit } from '@angular/core';

// Services
import { DataStoreService } from 'src/app/store/data-store.service';
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})

export class UserAccountComponent implements OnInit {

  public username: string;
  public tribeMember: boolean;

  constructor(private store: DataStoreService) {
    this.username = this.store.userName;

    // Gets user name from local storage when page is refreshed
    if (!this.username) {
      this.store.userName = localStorage.getItem('mealVoteUserName');
  }


    this.tribeMember = this.store.tribeMember;
  }

  ngOnInit() { }
}
