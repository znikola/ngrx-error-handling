import { Component } from '@angular/core';

@Component({
  selector: 'app-film',
  template: `
    <button (click)="causeError()">Cause error</button>
  `
})
export class FilmComponent {
  constructor() {}

  causeError() {
    throw new Error(`Plain JavaScript error`);
  }
}
