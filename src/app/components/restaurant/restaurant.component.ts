import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  @Input() restaurants: Restaurant[];
  currentRestaurant: any;

  constructor() { }

  ngOnInit() {}

  extractRestaurantDetails(index) {

    this.currentRestaurant = this.restaurants[index];
  }

}
