import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>NGRX Error Handling showcase</h1>

    <app-user></app-user>
    <br/>
    <app-vehicle></app-vehicle>
    <br/>
    <app-film></app-film>
  `
})
export class AppComponent {}
