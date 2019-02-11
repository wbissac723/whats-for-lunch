import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { LocatorService } from '../../../services/locator/locator.service';
@Component({
  selector: 'app-user-hub',
  templateUrl: './user-hub.component.html',
  styleUrls: ['./user-hub.component.scss']
})
export class UserHubComponent implements OnInit {

  searchForm: FormGroup;

  constructor(
    private locator: LocatorService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildSearchForm();
  }

  get location(): AbstractControl {
    return this.searchForm.get('location');
  }

  get category(): AbstractControl {
    return this.searchForm.get('category');
  }

  buildSearchForm() {
    this.searchForm = this.fb.group({
      location: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  onSubmit() {
    this.locator.getRestaurants(this.location.value, this.category.value)
      .subscribe(
        (response) => { console.log(JSON.stringify(response, null, 3));
        },
        (error) => { console.log('service call failed' + JSON.stringify(error, null, 3));
    });
  }

}
