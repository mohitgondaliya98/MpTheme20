import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'forgot-password',
    templateUrl: 'forgot-password.html',
})
export class ForgotPassword {
    constructor(public dialogRef: MatDialogRef<ForgotPassword>, private _snackBar: MatSnackBar ) { }

    closeModal() {
        this.dialogRef.close();
    }

    goOpenSnackbar() {
        this.dialogRef.close();
        this._snackBar.open('Varification Mail has been sent to your mail successfully!!!', 'close', {
        duration: 4000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['primary-snackbar', 'success']
      });
    }
}