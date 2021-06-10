import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
    selector: 'sign-up',
    templateUrl: 'sign-up.html',
})
export class SignUp {
    passwordHide = true;
    confirmPasswordHide = true;

    constructor(public dialogRef: MatDialogRef<SignUp>, public dialog: MatDialog, private _snackBar: MatSnackBar, private _router: Router) { }

    closeModal() {
        this.dialogRef.close();
    }

    goTODashboard() {
        this.dialogRef.close();
        this._snackBar.open('Varification Mail has been sent to your mail successfully!!!', 'close', {
            duration: 4000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['primary-snackbar', 'success']
        });
    }
}