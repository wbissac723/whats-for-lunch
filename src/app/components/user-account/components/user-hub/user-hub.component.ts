import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { LocatorService } from '../../../services/locator/locator.service';
import { SearchParams } from 'src/app/components/services/locator/search-params/search-params.model';
@Component({
  selector: 'app-user-hub',
  templateUrl: './user-hub.component.html',
  styleUrls: ['./user-hub.component.scss']
})
export class UserHubComponent implements OnInit {

  searchForm: FormGroup;
  searchQuery: SearchParams = new SearchParams();

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

    this.searchQuery.location = this.location.value;
    this.searchQuery.category = this.category.value;

    this.locator.getRestaurants(this.searchQuery)
      .subscribe(
        (response) => {
          console.log('Successfully retrieved restaurants');
        },
        (error) => {
          console.log('Service call failed. ' + JSON.stringify(error, null, 3));
        });
  }

}
