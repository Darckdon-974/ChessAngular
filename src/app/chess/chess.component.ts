import { Component, OnInit } from '@angular/core';
import { Coup } from '../coup';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit {

  allCoup: Coup[] = [
    new Coup (1, 'Le roque'),
    new Coup (2, 'La prise en passant'),
    new Coup (3, 'La promotion'),
    new Coup (4, 'Les mats'),
    new Coup (5, 'Le coup du berger'),
    new Coup (6, 'Le baiser de la mort'),
    new Coup (7, 'Le mat du lion'),
    new Coup (8, 'Le mat arabe'),
    new Coup (9, 'Le mat de Blackburne')
];

  constructor() { }

  ngOnInit(): void {

  }

}
