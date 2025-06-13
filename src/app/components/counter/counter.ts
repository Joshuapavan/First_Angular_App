import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  count = signal(0);

  increaseCount(){
    this.count.update(count => count + 1);
  }

  resetCount(){
    this.count.set(0);
  }

  decreaseCount(){
    this.count.update(count => count - 1);
  }
}
