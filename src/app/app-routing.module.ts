import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { OffersComponent } from './offers/offers.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { HomeComponent } from './home/home.component';
import { CustomPreloadingService } from './shared/custom-preloading.service';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'accommodation', component: AccommodationComponent },
    { path: 'celebrations', component: CelebrationsComponent },
    { path: 'lifestyle', component: LifestyleComponent },
    { path: 'offers', component: OffersComponent },
    { path: 'weddings', component: WeddingsComponent },
    { path: 'singin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'food', data: { preload: false }, loadChildren: './food-bevarage/food-bevarage.module#FoodBevarageModule' },
    { path: '**', component: HomeComponent },
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingService })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
