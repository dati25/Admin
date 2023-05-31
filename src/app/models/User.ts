export class User {
  public id: string;
  public name: string;
  public macAddress: string;
  public ipAddress: string;
  public status: string;

  public constructor(
    id: string,
    name: string,
    macAddress: string,
    ipAddress: string,
    status: string
  ) {
    this.id = id;
    this.name = name;
    this.macAddress = macAddress;
    this.ipAddress = ipAddress;
    this.status = status;
  }
}
