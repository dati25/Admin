import { Source } from './Source';
import { Destination } from './Destination';
import { Task } from './Task';

export class Config {
  public id: number;
  public name: string;
  public type: string;
  public repeatPeriod: string;
  public expirationDate: string;
  public compress: boolean;
  public retention: number;
  public packageSize: number;
  public createdBy: number;
  public status: boolean;
  public sources: Source[];
  public destinations: Destination[];
  public tasks: Task[];

  public constructor(
    id: number,
    name: string,
    type: string,
    repeatPeriod: string,
    expirationDate: string,
    compress: boolean,
    retention: number,
    packageSize: number,
    createdBy: number,
    status: boolean,
    sources: Source[],
    destinations: Destination[],
    tasks: Task[]
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.repeatPeriod = repeatPeriod;
    this.expirationDate = expirationDate;
    this.compress = compress;
    this.retention = retention;
    this.packageSize = packageSize;
    this.createdBy = createdBy;
    this.status = status;
    this.sources = sources;
    this.destinations = destinations;
    this.tasks = tasks;
  }
}
