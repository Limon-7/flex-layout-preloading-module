import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingService implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    // if the data property exists on the route of the lazy loaded module
    if (route.data && route.data['preload']) {
      return fn();
      // if data property not exists then preload==false
    } else {
      return of(null);
    }
  }
  constructor() { }
}



