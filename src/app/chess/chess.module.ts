import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChessComponent } from './chess.component';


@NgModule({
  declarations: [
    ChessComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports:[
    ChessComponent
  ]
})
export class ChessModule { }
