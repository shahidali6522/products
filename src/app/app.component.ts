import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VariablesComponent } from './name/variables/variables.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prodacts';
  name: any;
  count: any;
  constructor(public dialog: MatDialog) {
    this.name = ['shahid', 'jawad', 'waseeem'];
    this.name.push('AWais', 'Lahore');
    this.count = this.name.lenth;
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    this.dialog.open(VariablesComponent, {
      width: '500',
      height: '500',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
