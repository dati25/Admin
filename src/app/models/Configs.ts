import { Source } from './Source';
import { Destination } from './Destination';

export class Configs {
  public id: number;
  public name: string;
  public type: string;
  public repeatPeriod: string;
  public expirationdate: Date;
  public comprime: boolean;
  public retention: number;
  public packagesize: number;
  public status: boolean;
  public sources: Source[];
  public destinations: Destination[];

  public constructor(
    id: number,
    name: string,
    type: string,
    repeatPeriod: string,
    expirationdate: Date,
    comprime: boolean,
    retention: number,
    packagesize: number,
    status: boolean,
    sources: Source[],
    destinations: Destination[]
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.repeatPeriod = repeatPeriod;
    this.expirationdate = expirationdate;
    this.comprime = comprime;
    this.retention = retention;
    this.packagesize = packagesize;
    this.status = status;
    this.sources = sources;
    this.destinations = destinations;
  }
}
