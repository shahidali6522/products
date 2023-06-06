import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariablesComponent } from './variables/variables.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [VariablesComponent],
  imports: [
    CommonModule,

    // material
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
  ],
})
export class NameModule {}
