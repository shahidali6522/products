import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VariablesComponent } from 'src/app/name/variables/variables.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  constructor(public dialog: MatDialog) {}
  displayedColumns: string[] = [
    'first_name',
    'last_name',
    'product_Name',
    'phone_Number',
    'btn',
  ];
  dataSource: any[] = [];
  nameOne = '';
  value: any;

  submitValue() {
    this.value = this.nameOne;
  }
  openDialog() {
    const ref = this.dialog.open(VariablesComponent);

    ref.afterClosed().subscribe((res) => {
      this.dataSource.push(res);

      console.log(this.dataSource.length);
    });
  }
}
