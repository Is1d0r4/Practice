import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  evenArr = [];
  oddArr = [];

  printValue(i: number) {
    if (i % 2 == 0) {
      this.evenArr.push(i);
      if (this.evenArr.length > 5) {
      }
    } else {
      this.oddArr.push(i);
      if (this.oddArr.length > 5) {
        this.oddArr.splice(0, 1);
      }
    }

    if (this.evenArr.length + this.oddArr.length > 10) {
    }
  }
}
