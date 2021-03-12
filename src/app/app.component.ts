import { Component, OnInit } from '@angular/core';

import { Card } from './models/card';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  cards: Card[] = [];

  constructor(private cardService: CardService) {}

  async ngOnInit() {
    this.cards = await this.cardService.getNewDeck();
    console.log(this.cards);
  }
}
