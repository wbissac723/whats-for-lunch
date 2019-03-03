import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DataStoreService } from 'src/app/store/data-store.service';
import { AccountService } from 'src/app/components/services/account-service/account.service';
import { Router } from '@angular/router';
import { UserProfile } from '../../models/user-profile.model';

@Component({
  selector: 'app-tribe',
  templateUrl: './tribe.component.html',
  styleUrls: ['./tribe.component.scss']
})
export class TribeComponent implements OnInit {
  userName: string;
  tribeCreated: boolean;
  tribeCreatedMessage: string;

  form: FormGroup;

  constructor(
    private account: AccountService,
    private store: DataStoreService,
    private router: Router
  ) {
    this.userName = this.store.userName;

  }

  get tribeName() {
    return this.form.get('tribeName');
  }

  ngOnInit() {
    this.form = new FormGroup({ tribeName: new FormControl('', Validators.required) });
  }

  createTribe() {
    const user = new UserProfile();
    user.userName = this.store.userName;
    user.email = this.store.userEmail;
    user.tribe[0].creator = this.store.userName;
    user.tribe[0].name = this.tribeName.value;

    this.account.createUser(user)
      .subscribe(
        (profile) => {

          this.store.tribeMember = true;
          this.tribeCreated = true;
          this.tribeCreatedMessage = `You just created a tribe.`;
          this.store.profile = profile;

          console.log('User successful updated profile in data.');
          console.log(JSON.stringify(user, null, 3));

          this.router.navigate(['/user/' + this.store.userName]);
        }, (err) => {
          this.tribeCreated = false;
          console.log('Failed to store user in database.' + JSON.stringify(err, null, 2));
        });
  }

}
