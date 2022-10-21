import { Component, OnInit } from '@angular/core';
import { Coup } from '../coup';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit {
  allCoups: Coup[] = [
    new Coup (1, 'Le roque', 'Le roque consiste à déplacer votre roi de deux cases vers la tour. Ensuite, vous devez faire passer cette dernière à côté du roi. Il existe deux types de roques'),
    new Coup (2, 'La prise en passant', 'Il s’agit d’un coup de pion réalisable lorsqu’un pion blanc se trouve à la 5e rangée, tandis que le pion noir à la 4e rangée. Le pion adverse se déplace de deux cases parce qu’il n’a pas encore bougé.'),
    new Coup (3, 'La promotion', 'Ce coup spécial consiste à échanger un pion contre une tour, une dame, un fou ou un cavalier'),
    new Coup (4, 'Les mats', 'Dans les jeux d’échecs, le vainqueur est déclaré lorsque le Roi est menacé. Dans ce jeu, il est rare pour un joueur d’attraper le Roi.'),
    new Coup (5, 'Le coup du berger', 'Les joueurs utilisent cette technique vers la fin d’une partie. Il met à profit ses deux Tours pour réaliser un échec et mat. La Tour se déplace uniquement de manière latérale.'),
    new Coup (6, 'Le baiser de la mort', 'Tous les joueurs d’échecs connaissent ce piège. Il s’agit d’un coup classique où vous exploitez votre Fou et votre Dame afin de neutraliser le pion en f7.'),
    new Coup (7, 'Le mat du lion', 'Ce coup porte également le nom du mat de l’écolier ou du mat du sot. Il est considéré comme le mat le plus rapide dans une partie.'),
    new Coup (8, 'Le mat arabe', 'Ce coup est réalisé à partir d’une Tour et d’un Cavalier. Dans cette situation, le Roi noir ne peut plus fuir, puisqu’ils ne peuvent pas prendre la Tour blanche sans passer par le Cavalier.'),
    new Coup (9, 'Le mat de Blackburne', 'Ce mat arrive lorsque le Fou met en échec le Roi tout en étant protégé par le Cavalier. De son côté, le Roi noir ne peut pas s’enfuir, puisqu’il sera attaqué par les Fous en g7 ou en h8.')
  ];

  viewAddOnList: boolean = false;
  viewList: boolean = false;
  viewError: boolean = false;
  viewValidatorAdd: boolean = false;
  nameModel: string= '';
  descriptionModel: string= '';

  constructor() { }
  
  ngOnInit(): void {
    this.viewList = true;
  }

  displayList(): void {
    this.viewList = true;
    this.viewAddOnList = false;
  }

  displayAddCoup(): void {
    this.viewAddOnList = true;
    this.viewList = false;
  }
  
  addCoup() {
    var id = this.allCoups[this.allCoups.length - 1].id
    if (this.nameModel.length < 2 || this.descriptionModel.length < 8) {
      this.viewError = true;
      return;
    }
    else {
      this.allCoups.push(new Coup(id + 1, this.nameModel, this.descriptionModel));
      this.viewError = false;
      this.viewList = true;
      this.viewAddOnList = false;
      this.viewValidatorAdd = true;
      setTimeout(()=>{
        this.viewValidatorAdd = false;
      }, 5000);
    }
  }
}
