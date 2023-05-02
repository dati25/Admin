import { Group } from './Group';
import { Computer } from './Computer';

export class Task {
  public computer: Computer;
  public group: Group;

  public constructor(computer: Computer, group: Group) {
    this.computer = computer;
    this.group = group;
  }
}
