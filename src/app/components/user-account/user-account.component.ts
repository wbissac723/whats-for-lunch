import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})


export class UserAccountComponent implements OnInit {


  public username: string;


  constructor(private route: ActivatedRoute) {
    this.username = this.route.snapshot.paramMap.get('username');
  }


  ngOnInit() { }

}
