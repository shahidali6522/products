import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
})
export class VariablesComponent {
  constructor(public dialog: MatDialog) {}

  closedialog() {
    this.dialog.closeAll();
  }
}
