import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
})
export class Comp1Component {
  @Input() myvalue = 'Shaid';
}
