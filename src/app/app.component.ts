import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LayoutService } from 'layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  constructor(
    private titleService: Title,
    readonly viewportScroller: ViewportScroller,
    public route: Router,
    public layoutService: LayoutService,
    ){

    titleService.setTitle("Theme 18");

    route.events.subscribe((event) => {
      this.viewportScroller.scrollToPosition([0, 0]);
      this.layoutService.changeRouter();
    });

  }
}
