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
    }

  ngOnInit() {
    this.tribeMember = true;
  }
}

