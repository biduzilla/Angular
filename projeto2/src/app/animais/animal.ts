import { AnimalComponent } from "./animal/animal.component";

export interface Animal {
  id: number;
  postDate: Date;
  urk: string;
  description: string;
  allowComments: boolean;
  likes: number;
  comments: number;
  userID: number;
}

export type Animais =  Array<Animal>;
