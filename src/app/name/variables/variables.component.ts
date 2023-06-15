import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
})
export class VariablesComponent {
  information = {
    first_name: 'shahid',
    last_name: 'Ali',
    product_Name: 'One',
    phone_Number: '0310',
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<VariablesComponent>
  ) {}

  save() {
    this.dialogRef.close(this.information);
  }
}
