import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  p1: boolean = false;
  p2: boolean = true;
  redlight: boolean = true;
  yellowlight: boolean = true;
  greenlight: boolean = true;
  dynName: string = 'Shahid';

  // // blub whit Two button On Off
  nameOff: any = false;
  imageone = '../../assets/lightImages/off.jpg';
  imageTwo = '../../assets/lightImages/on.jpg';
  // blub train on off  singel button
  changeimage: boolean = false;
  autoChane: boolean = false;
  off: string = '../../assets/lightImages/off.jpg';
  on: string = '../../assets/lightImages/on.jpg';
  constructor() {
    this.onOff();
    setInterval(() => {
      this.p1 = !this.p1;
    }, 1000);

    setInterval(() => {
      this.p2 = !this.p2;
    }, 2000);

    setInterval(() => {
      this.autoChane = !this.autoChane;
    }, 3000);

    // light change color
    setInterval(() => {
      this.redlight = !this.redlight;
    }, 6000);
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
  redcolor() {
    this.redlight = !this.redlight;
  }
}
