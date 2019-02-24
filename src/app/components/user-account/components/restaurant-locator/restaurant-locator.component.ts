import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

// Services
import { LocatorService } from 'src/app/components/services/locator-service/locator.service';

// Models
import { Address, Restaurant } from 'src/app/components/models/restaurant.model';
import { SearchParams } from 'src/app/components/services/locator-service/search-params/search-params.model';

@Component({
  selector: 'app-restaurant-locator',
  templateUrl: './restaurant-locator.component.html',
  styleUrls: ['./restaurant-locator.component.scss']
})
export class RestaurantLocatorComponent implements OnInit {

  searchForm: FormGroup;
  searchQuery: SearchParams = new SearchParams();
  restaurants: Restaurant[];
  searchSuccess: boolean;

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
  get zipCode(): AbstractControl {
    return this.searchForm.get('zipCode');
  }

  get category(): AbstractControl {
    return this.searchForm.get('category');
  }

  buildSearchForm() {
    this.searchForm = this.fb.group({
      location: ['', Validators.required],
      zipCode: [''],
      category: ['', Validators.required]
    });
  }

  onSubmit() {

    this.searchQuery.location = this.location.value;
    this.searchQuery.zipcode = this.zipCode.value;
    this.searchQuery.category = this.category.value;

    this.locator.getRestaurants(this.searchQuery)
      .subscribe(
        (response) => {
          this.restaurants = this.createListOfRestaurants(response);
          this.searchSuccess = true;
          console.log('Successfully retrieved restaurants');
        },
        (error) => {
          this.searchSuccess = false;
          console.log('Service call failed. ' + JSON.stringify(error, null, 3));
        });
  }

  createListOfRestaurants(response: any[]): Restaurant[] {
    const restaurants = [];

    response.forEach(obj => {
      const restaurant = new Restaurant();
      restaurant.imgURL = obj.image_url;
      restaurant.isClosed = obj.is_closed;
      restaurant.name = obj.name;
      restaurant.phoneNumber = obj.display_phone;
      restaurant.rating = obj.rating;
      restaurant.location = new Address();
      restaurant.location.line1 = obj.location.display_address[0];
      restaurant.location.line2 = obj.location.display_address[1];
      restaurants.push(restaurant);
    });

    return restaurants;
  }

}
