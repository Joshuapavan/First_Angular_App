import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './components/header/header';
import { Greeting } from './components/greeting/greeting';

@Component({
  selector: 'app-root',
  imports: [Home, Header],
  template: `
    <app-header />
    <main>
      <app-home />
    </main>
  `,
  styles: [
     `
        main {
          padding: 16px;
        }
     `
  ],
})
export class App {
  protected title = 'first-ng-app';
}
