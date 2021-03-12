import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Card } from '../models/card';
import { INewDeckResponse } from '../interfaces/INewDeckResponse';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  async getNewDeck(): Promise<Card[]> {
    const res = await this.http
      .get<INewDeckResponse>(
        'https://deckofcardsapi.com/api/deck/new/draw/?count=52'
      )
      .toPromise();
    return res.cards.map((x) => new Card(x));
  }
}
