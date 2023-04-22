import { Computer } from './Computer';

export class Group {
  public id: number;
  public name: string;
  public pcGroups: Computer[];

  public constructor(id: number, name: string, pcGroups: Computer[]) {
    this.id = id;
    this.name = name;
    this.pcGroups = pcGroups;
  }
}
