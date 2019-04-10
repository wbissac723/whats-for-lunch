import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { DataStoreService } from 'src/app/store/data-store.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  @Input() restaurants: Restaurant[];
  currentRestaurant: any;
  chosenRestaurant: Restaurant;
  voted: boolean;

  constructor(private store: DataStoreService) {
    this.store.voted.subscribe(answer => this.voted = answer);
  }

  ngOnInit() {}

  extractRestaurantDetails(index: number) {
    this.currentRestaurant = this.restaurants[index];
  }

  vote(restaurant: Restaurant) {
    this.chosenRestaurant = restaurant;
    this.store.castVote(true);
  }

}
