import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TribeService } from '../../../services/tribe-service/tribe.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {
  
  form = new FormGroup({ tribename: new FormControl('', Validators.required) })
  constructor(private tribeService: TribeService) { }

  get tribename() {
    return this.form.get('tribename');
  }
  ngOnInit() {
  
  }
  createTribe() {
    this.tribeService.createTribe(this.tribename.value).subscribe(() => {
      console.log('tribe is created');
    });
  }
}