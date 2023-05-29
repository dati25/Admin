export class Report {
  public id: number;
  public idPc: number;
  public idConfig: number;
  public status: string;
  public reportTime: Date;
  public description: string;

  public constructor(
    id: number,
    idPc: number,
    idConfig: number,
    status: string,
    reportTime: Date,
    description: string
  ) {
    this.id = id;
    this.idPc = idPc;
    this.idConfig = idConfig;
    this.status = status;
    this.reportTime = reportTime;
    this.description = description;
  }
}
