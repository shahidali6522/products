import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  nameOff: any = false;

  constructor() {
    this.onOff();
  }
  // blub On Off
  onOff() {
    this.nameOff = this.imageone;
  }
  ontwo() {
    this.nameOff = this.imageTwo;
  }

  imageone = '../../assets/lightImages/off.jpg';
  imageTwo = '../../assets/lightImages/on.jpg';
}
