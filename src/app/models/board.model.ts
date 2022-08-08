import { User } from "./user.model";

export interface Board {
  id: string;
  title: string;
  backgroundColor: 'sky' | 'yellow' | 'green' | 'red' | 'violet' | 'gray';
  members: User[];
}
