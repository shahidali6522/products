import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  //only Number
  phoneNumber: any;
  number: any;
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
  // get Color
  color: string = '';
  getColor: any;
  wrrongvlaue: string = 'unkonw Color';
  enterValue = 'please Enter value';

  // disabled value
  btn: string = '';
  vl: any;
  // addcardmessage
  addcardmessage: string = '';
  tv: any;
  // toggle button
  istoggle: boolean = false;

  constructor() {}

  //only Number
  onlyNumber() {
    if (!isNaN(this.phoneNumber)) {
      this.number = !this.phoneNumber;
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
  clickcolor() {
    if (this.color.length > 0) {
      this.getColor = this.color || this.enterValue;
      this.color = '';
    } else {
      this.wrrongvlaue;
    }
  }

  showvalue() {
    this.vl = this.btn;
  }
  onClick(event: any) {
    this.addcardmessage = 'click  ' + event.target.value;
  }
  nname: any;
  freezerClick(name: any) {
    this.nname = name.name;
  }
  // }Toggle button
  toggle() {
    this.istoggle = !this.istoggle;
  }
}
