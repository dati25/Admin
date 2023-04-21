export class Destination {
  public id: number;
  public idConfig: number;
  public type: number;
  public path: string;

  public constructor(id: number, idConfig: number, type: number, path: string) {
    this.id = id;
    this.idConfig = idConfig;
    this.type = type;
    this.path = path;
  }
}
