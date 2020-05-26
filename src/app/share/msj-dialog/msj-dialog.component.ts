
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-msj-dialog',
  templateUrl: './msj-dialog.component.html',
  styleUrls: ['./msj-dialog.component.css']
})
export class MsjDialogComponent {
  title: string;
  message: string;

  constructor(public dialogRef: MatDialogRef<MsjDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MsjDialogModel) {
    // Update view with given values
    this.title = data.title;
    this.message = data.message;
  }


}

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
export class MsjDialogModel {

  constructor(public title: string, public message: string) {
  }
}

