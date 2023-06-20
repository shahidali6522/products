import { Component } from '@angular/core';
import { flush, tick } from '@angular/core/testing';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  //only Number
  phoneNumber: any;
  number: number = 0;

  // Only text
  name: any;
  getnameValue = 'text';

  // OutPut two number
  getthree: number = 0;
  getfour: number = 0;
  Output: any = 0;
  Totelvalue = 'Totel value';
  validvalue: string = 'No data Found';
  please: string = 'please Add bought value';

  // get Months Name

  color: string = '';
  getColor: any;
  wrrongvlaue: string = 'unkonw Color';
  enterValue = 'please Enter value';

  // interpolation
  appStatus: boolean = false;

  constructor() {}

  //only Number
  onlyNumber() {
    if (!isNaN(this.phoneNumber)) {
      this.number = this.phoneNumber;
    }
  }

  // Only text
  OnlyText() {
    if (isNaN(this.name)) {
      this.getnameValue = this.name;
    }
  }
  // OutPut three number
  exponentiation() {
    this.Output =
      this.getthree > 0 && this.getfour > 0
        ? this.getthree ** this.getfour
        : this.validvalue && this.please;

    this.validvalue != this.Totelvalue;
  }

  // Switch Case
  clickVoot() {
    if (this.color.length > 0) {
      this.getColor = this.color || this.enterValue;
      this.color = '';
    } else {
      this.wrrongvlaue;
    }
  }
  interpolation() {
    this.appStatus = !this.appStatus;
  }
}
