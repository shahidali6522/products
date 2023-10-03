import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss'],
})
export class DatabindingComponent {
  vereable: boolean = true;
  dyn: string = 'Shahid';
  name: string = 'Ali';
  mystyle: boolean = false;
  click() {
    return (this.vereable = !this.vereable);
  }
  changecolor() {
    this.mystyle = !this.mystyle;
  }
}
