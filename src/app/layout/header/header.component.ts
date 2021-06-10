import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalMethods } from 'globalMethods';

export interface notification {
  title: string;
  description: string;
  time: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public globalMethodObject: GlobalMethods, private router: Router) { }

  ngOnInit(): void {
  }

  public notificationData: notification[] = [
    { title: "This is notification heading", description: "lorem ipsume dummy text to decription", time: "1" },
    { title: "This is notification heading", description: "lorem ipsume dummy text to decription", time: "3" },
    { title: "This is notification heading", description: "lorem ipsume dummy text to decription", time: "4" },
    { title: "This is notification heading", description: "lorem ipsume dummy text to decription", time: "6" },
    { title: "This is notification heading", description: "lorem ipsume dummy text to decription", time: "9" },
    { title: "This is notification heading", description: "lorem ipsume dummy text to decription", time: "12" },
    { title: "This is notification heading", description: "lorem ipsume dummy text to decription", time: "18" },
  ];

  toggleSearch() {
    document.body.classList.toggle("search-toggle");
  }

  signOut(){
    this.router.navigateByUrl('/');
  }

}
