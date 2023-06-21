import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  p: boolean = true;

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
    setInterval(() => {
      this.p = !this.p;
    }, 1000);
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
