import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DataStoreService } from 'src/app/store/data-store.service';
import { AccountService } from 'src/app/components/services/account-service/account.service';

@Component({
  selector: 'app-tribe',
  templateUrl: './tribe.component.html',
  styleUrls: ['./tribe.component.scss']
})
export class TribeComponent implements OnInit {
  userName: string;
  tribeCreated: boolean;
  tribeCreatedMessage: string;

  createdTribe = [];

  form: FormGroup;

  constructor(
    private account: AccountService,
    private store: DataStoreService
  ) {
    this.userName = this.store.userName;

  }

  get tribename() {
    return this.form.get('tribename');
  }

  ngOnInit() {
    this.form = new FormGroup({ tribename: new FormControl('', Validators.required) });
  }

  createTribe() {
    this.account.createTribe(this.store.userEmail, this.tribename.value)
      .subscribe(
        (tribe) => {
          this.createdTribe.push(tribe);
          this.store.createdTribe.push(tribe);

          this.tribeCreated = true;
          this.tribeCreatedMessage = `You just created ${tribe.tribeName}`;

          console.log('tribe is created' + JSON.stringify(tribe, null, 3));
        }, (err) => {
          this.tribeCreated = false;

          console.log('Tribe creation failed. ' + JSON.stringify(err, null, 3));
        });
  }
}
