import { ICard } from '../interfaces/ICard';

export class Card {
  Value: string;
  Suit: string;
  ImageUrl: string;

  constructor(data?: ICard) {
    this.Value = data?.value;
    this.Suit = data?.suit;
    this.ImageUrl = data?.image;
  }
}
