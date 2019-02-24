import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantLocatorComponent } from './restaurant-locator.component';

describe('UserHubComponent', () => {
  let component: RestaurantLocatorComponent;
  let fixture: ComponentFixture<RestaurantLocatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantLocatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
