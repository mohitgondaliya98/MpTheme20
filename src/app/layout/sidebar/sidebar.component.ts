import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalMethods } from 'globalMethods';
import { LayoutService } from 'layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public currentURL: string;

  constructor(private router: Router, public globalMethodObject: GlobalMethods, public layoutService: LayoutService ) {
    this.currentURL = this.router.url;
  }

  ngOnInit(): void {
  }

}
