import { User } from "./user.model";

export interface Board {
  id: string;
  title: string;
  backgroundColor: string;
  members: User[];
}
