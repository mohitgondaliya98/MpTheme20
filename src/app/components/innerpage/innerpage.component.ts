import { query, stagger, style, transition, trigger, useAnimation } from '@angular/animations';
import { OnInit, ViewChild, Component, AfterViewInit } from '@angular/core';

import { fadeInAnimation, fadeUpAnimation } from 'src/app/animation';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-innerpage',
  templateUrl: './innerpage.component.html',
  styleUrls: ['./innerpage.component.scss'],
  animations: [
    trigger('animationIn', [
      transition(':enter', [
        useAnimation(fadeInAnimation, { params: { duration: '0.4s', delay: '0.3s' } })
      ])
    ]),
    trigger('animationChildIn', [
      transition(':enter', [
        query('.animation-target', [
          style({ opacity: '0' }),
          stagger(120, [
            useAnimation(fadeUpAnimation, { params: { duration: '0.6s', delay: '0.3s', offset: '50px' } })
          ])
        ])
      ])
    ]),
  ]
})
export class InnerpageComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'task', 'userType', 'status', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  keywords = new Set(['Chip 1', 'Chip 2', 'Chip 3']);
  formControl = new FormControl();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private titleService: Title) {
    this.titleService.setTitle('Mp-Theme-20 | Add Ons');
  }
  
  ngOnInit(): void {
  }

  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.add(event.value);
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }

}


export interface PeriodicElement {
  name: string;
  task: string;
  userType: string;
  status: string;
  status_class: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: "Jane Smith", task: " Lorem ipsum is dummy text", userType: "Admin", status: "Active", status_class: "success", action: "" },
  { name: "Jane Smith", task: " Lorem ipsum is dummy text", userType: "Admin", status: "Inactive", status_class: "danger", action: "" },
  { name: "Jane Smith", task: " Lorem ipsum is dummy text", userType: "Admin", status: "Active", status_class: "success", action: "" },
  { name: "Jane Smith", task: " Lorem ipsum is dummy text", userType: "Admin", status: "Inactive", status_class: "danger", action: "" },
  { name: "Jane Smith", task: " Lorem ipsum is dummy text", userType: "Admin", status: "Active", status_class: "success", action: "" },
  { name: "Jane Smith", task: " Lorem ipsum is dummy text", userType: "User", status: "Inactive", status_class: "danger", action: "" },
  { name: "Jane Smith", task: " Lorem ipsum is dummy text", userType: "User", status: "Inactive", status_class: "danger", action: "" },
  { name: "Jane Smith", task: " Lorem ipsum is dummy text", userType: "Admin", status: "Active", status_class: "success", action: "" },
  { name: "Jane Smith", task: " Lorem ipsum is dummy text", userType: "User", status: "Active", status_class: "success", action: "" },
  { name: "Jane Smith", task: " Lorem ipsum is dummy text", userType: "Admin", status: "Inactive", status_class: "danger", action: "" },
  { name: "Jane Smith", task: " Lorem ipsum is dummy text", userType: "User", status: "Active", status_class: "success", action: "" },
  { name: "Jane Smith", task: " Lorem ipsum is dummy text", userType: "User", status: "Active", status_class: "success", action: "" },
  { name: "Jane Smith", task: " Lorem ipsum is dummy text", userType: "Admin", status: "Active", status_class: "success", action: "" },
  { name: "Jane Smith", task: " Lorem ipsum is dummy text", userType: "User", status: "Active", status_class: "success", action: "" },
  { name: "Jane Smith", task: " Lorem ipsum is dummy text", userType: "Admin", status: "Active", status_class: "success", action: "" },
];
