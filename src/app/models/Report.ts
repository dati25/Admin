export class Report {
  public id: number;
  public idPc: number;
  public status: boolean;
  public reportTime: Date;
  public description: string;

  public constructor(
    id: number,
    idPc: number,
    status: boolean,
    reportTime: Date,
    description: string
  ) {
    this.id = id;
    this.idPc = idPc;
    this.status = status;
    this.reportTime = reportTime;
    this.description = description;
  }
}
