import { Group } from './Group';
import { User } from './User';

export class Task {
  public group: Group[];
  public user: User[];

  public constructor(group: Group[], user: User[]) {
    this.group = group;
    this.user = user;
  }
}
