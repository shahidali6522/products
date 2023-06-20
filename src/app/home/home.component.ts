import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  // // blub whit Two button On Off
  nameOff: any = false;
  imageone = '../../assets/lightImages/off.jpg';
  imageTwo = '../../assets/lightImages/on.jpg';
  // blub train on off  singel button
  changeimage: boolean = false;
  off: string = '../../assets/lightImages/off.jpg';
  on: string = '../../assets/lightImages/on.jpg';
  constructor() {
    this.onOff();
    // setInterval(() => {
    //   this.changeOnAndOff();
    // }, 1000);
  }
  // blub whit Two button On Off
  onOff() {
    this.nameOff = this.imageone;
  }
  ontwo() {
    this.nameOff = this.imageTwo;
  }

  changeOnAndOff() {
    this.changeimage = !this.changeimage;
  }
}
