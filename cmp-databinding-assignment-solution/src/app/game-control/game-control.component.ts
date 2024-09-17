import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  @Output() incrementNumber = new EventEmitter<number>();
  n = 0;
  ref;

  onStart() {
    this.ref = setInterval(() => {
      this.incrementNumber.emit(this.n++);
    }, 1000);
  }

  onStop() {
    clearInterval(this.ref);
  }
}
