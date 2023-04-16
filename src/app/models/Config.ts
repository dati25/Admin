export class Config {
    public id: number;
    public name: string;
    public type: string;
    public repeatPeriod: string;
    public expirationDate: string;
    public compress: boolean;
    public retention: number;
    public packageSize: number;
    public status: boolean;

    public constructor(
        id: number,
        name: string,
        type: string,
        repeatPeriod: string,
        expirationDate: string,
        compress: boolean,
        retention: number,
        packageSize: number,
        status: boolean
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.repeatPeriod = repeatPeriod;
        this.expirationDate = expirationDate;
        this.compress = compress;
        this.retention = retention;
        this.packageSize = packageSize;
        this.status = status;
    }
}
