import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameModule } from './name/name.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './home/home.component';

import { MatInputModule } from '@angular/material/input';
import { Comp1Component } from './comp1/comp1.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, Comp1Component, ProductComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NameModule,
    ReactiveFormsModule,
    FormsModule,

    // material
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
