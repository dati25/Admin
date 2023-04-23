export class Destination {
  public id: number;
  public type: number;
  public path: string;

  public constructor(id: number, type: number, path: string) {
    this.id = id;
    this.type = type;
    this.path = path;
  }
}
