import { List } from "./list.model";

export interface Card {
  id: string;
  title: string;
  description?: string;
  position: number;
  list: List;
}

// export interface CreateCardDto {
//   title: string;
//   position: number;
//   description?: string;
//   listId: string;
//   boardId: string;
// }

export interface CreateCardDto extends Omit<Card, 'id' | 'list'> {
  listId: string;
  boardId: string;
}

export interface UpdateCardDto {
  title?: string;
  description?: string;
  position?: number;
  listId?: string | number;
  boardId?: string;
}
