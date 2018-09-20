import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FilmComponent],
  exports: [FilmComponent]
})
export class FilmModule {}
