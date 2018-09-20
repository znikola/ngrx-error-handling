import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-user></app-user>
    <br/>
    <app-vehicle></app-vehicle>
    <br/>
    <app-film></app-film>
  `
})
export class AppComponent {
  title = 'ngrx-error-handling';
}
