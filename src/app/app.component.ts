import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VariablesComponent } from './name/variables/variables.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    this.dialog.open(VariablesComponent, {
      width: '500',
      height: '500',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
