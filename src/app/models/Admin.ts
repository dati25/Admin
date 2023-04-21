export class Admin {
  public id: number;
  public password: string;
  public username: string;
  public email: string;
  public repeatPeriod: string;

  public constructor(
    id: number,
    password: string,
    username: string,
    email: string,
    repeatPeriod: string
  ) {
    this.id = id;
    this.password = password;
    this.username = username;
    this.email = email;
    this.repeatPeriod = repeatPeriod;
  }
}
