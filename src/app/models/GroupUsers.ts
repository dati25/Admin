import { User } from './User';

export class GroupUsers {
  public id: number;
  public name: string;
  public computers: User[];

  public constructor(id: number, name: string, computers: User[]) {
    this.id = id;
    this.name = name;
    this.computers = computers;
  }
}
