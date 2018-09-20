import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-user></app-user>
    <app-vehicle></app-vehicle>
  `
})
export class AppComponent {
  title = 'ngrx-error-handling';
}
