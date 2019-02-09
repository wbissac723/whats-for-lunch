import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/services/login.service';



@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})


export class UserAccountComponent implements OnInit {


  username: string;


  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService
    ) { this.username = this.loginService.userName; }


  ngOnInit() { }

}
