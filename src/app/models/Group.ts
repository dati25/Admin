import { Computers } from './Computers';

export class Group {
  public id: number;
  public name: string;
  public computers: Computers[];

  public constructor(id: number, name: string, computers: Computers[]) {
    this.id = id;
    this.name = name;
    this.computers = computers;
  }
}
