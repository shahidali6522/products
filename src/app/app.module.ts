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
import { AboutComponent } from './about/about.component';
import { MatInputModule } from '@angular/material/input';
import { Comp1Component } from './comp1/comp1.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, Comp1Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NameModule,
    FormsModule,

    // material
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
