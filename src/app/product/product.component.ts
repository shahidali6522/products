import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  name: string = 'shahid';
  constructor() {
    console.log(typeof this.name);
  }
}
