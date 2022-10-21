import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChessComponent } from './chess.component';


@NgModule({
  declarations: [
    ChessComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  exports:[
    ChessComponent
  ]
})
export class ChessModule { }
