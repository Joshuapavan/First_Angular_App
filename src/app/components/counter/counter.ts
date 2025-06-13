import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  counterValue = signal(0);

  increaseCount(){
    this.counterValue.update(count => count + 1);
  }

  resetCount(){
    this.counterValue.set(0);
  }

  decreaseCount(){
    this.counterValue.update(count => count - 1);
  }
}
