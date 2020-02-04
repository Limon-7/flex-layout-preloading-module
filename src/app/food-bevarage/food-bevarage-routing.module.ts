import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Routes, RouterModule } from '@angular/router';


import { BarsComponent } from './bars/bars.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FoodBevarageComponent } from './food-bevarage.component';

const foodRoutes: Routes = [

    { path: '', component: FoodBevarageComponent },
    { path: 'bars', component: BarsComponent },
    { path: 'restaurant', component: RestaurantComponent }
    /*
    {
        // using child route
        path: 'food', children: [
            { path: '', component: FoodBevarageComponent },
            { path: 'bars', component: BarsComponent },
            { path: 'restaurant', component: RestaurantComponent }
        ],
    }
    */
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(foodRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class FoodBevarageRoutingModule { }
