import { query, stagger, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { fadeInAnimation, fadeUpAnimation } from 'src/app/animation';
import { ForgotPassword } from 'src/app/modals/forgot-password';
import { SignUp } from 'src/app/modals/sign-up';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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

export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog, private titleService: Title, private router: Router) {
    this.titleService.setTitle('Mp-Theme-20 | Login');
  }

  ngOnInit(): void {
  }

  goToDashboard(){
    this.router.navigateByUrl('/home');
  }

  openForgotPassword(e: { preventDefault: () => void; }) {
    e.preventDefault();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = ['primary-modal-wrapper', 'modal-sm'];
    dialogConfig.autoFocus = false;
    this.dialog.open(ForgotPassword, dialogConfig);
  }
  openSignUp(e: { preventDefault: () => void; }) {
    e.preventDefault();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = ['primary-modal-wrapper', 'modal-md'];
    dialogConfig.autoFocus = false;
    this.dialog.open(SignUp, dialogConfig);
  }
}
