import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { MOCK_RESTAURANTS } from './MOCK_RESTAURANTS';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  restaurants: Restaurant[];

  constructor() {
    // MOCK DATA until we get data from service
    this.restaurants = MOCK_RESTAURANTS;
  }

  ngOnInit() {


  }

}
