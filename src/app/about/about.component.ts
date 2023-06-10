import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  name = '';
  counter: any;
  num: any = 1;
  ngOnInit(): void {
    this.counter = setInterval(() => {
      if (this.num < 5) {
        this.num = this.num + 1;
      }
    }, 1000);
  }

  value: any;
  submitValue() {
    this.value = this.name;
  }
}
