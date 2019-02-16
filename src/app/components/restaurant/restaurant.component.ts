import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { MOCK_RESTAURANTS } from './MOCK_RESTAURANTS';
import { LocatorService } from '../services/locator/locator.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  restaurants: Restaurant[];


  constructor(private locatorService: LocatorService) {
    // MOCK DATA until we get data from service
    this.restaurants = MOCK_RESTAURANTS;
  }

  ngOnInit() {
    this.locatorService.getRestaurants('Westlake,TX', 'pizza').subscribe((res) => {
      console.log(res);
    })

  }

}
