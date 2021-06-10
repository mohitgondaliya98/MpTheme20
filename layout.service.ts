import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public IsLogin = false;

  constructor(public route: Router) {
  }

  changeRouter() {
    const url = this.route.url;
    if (url === '/' || url.indexOf('/login') > -1) {
      this.IsLogin = true;
    }
    else {
      this.IsLogin = false;
    }
  }

  ngoninit(): void {
    this.changeRouter();
  }
}
