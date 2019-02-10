import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Services
import { LoginService } from '../login/services/login.service';
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})

export class UserAccountComponent implements OnInit {

  public username: string;
  public tribeMember: boolean;

  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService
    ) {
      this.username = this.loginService.userName;
    }

  ngOnInit() {
    this.tribeMember = true;
  }
}

