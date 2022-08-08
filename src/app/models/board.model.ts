import { User } from "./user.model";
import { Colors } from '@models/colors.model';
import { List } from './list.model';
import { Card } from './card.model';

export interface Board {
  id: string;
  title: string;
  backgroundColor: Colors;
  members: User[];
  lists: List[];
  cards: Card[];
}
