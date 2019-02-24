import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DataStoreService } from 'src/app/store/data-store.service';
import { TribeService } from '../../../services/tribe-service/tribe.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {
  userName: string;
  tribeCreated: boolean;

  createdTribe = [];

  form: FormGroup;

  constructor(
    private tribeService: TribeService,
    private store: DataStoreService
    ) { }

    get tribename() {
      return this.form.get('tribename');
    }

    ngOnInit() {
      this.userName = this.store.userName;
      this.form = new FormGroup({ tribename: new FormControl('', Validators.required) });
  }

  createTribe() {
    this.tribeService.createTribe(this.tribename.value)
      .subscribe(
        (tribe) => {
        this.tribeCreated = true;
        this.createdTribe.push(tribe);
        this.store.createdTribe.push(tribe);

        console.log('tribe is created' + JSON.stringify(tribe, null, 3));
      }, (err) => {
        this.tribeCreated = false;

        console.log('Tribe creation failed. ' + JSON.stringify(err, null, 3));
    });
  }
}
