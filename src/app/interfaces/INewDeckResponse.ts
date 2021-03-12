import { ICard } from './ICard';

export interface INewDeckResponse {
  success: string;
  deck_id: string;
  cards: ICard[];
  remaining: number;
}
