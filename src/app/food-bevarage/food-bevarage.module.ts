import { NgModule } from '@angular/core';

import { FoodBevarageRoutingModule } from './food-bevarage-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FoodBevarageComponent } from './food-bevarage.component';
import { BarsComponent } from './bars/bars.component';
import { RestaurantComponent } from './restaurant/restaurant.component';


@NgModule({
  declarations: [
    FoodBevarageComponent,
    BarsComponent,
    RestaurantComponent
  ],
  imports: [
    FoodBevarageRoutingModule,
    SharedModule
  ]
})
export class FoodBevarageModule { }
