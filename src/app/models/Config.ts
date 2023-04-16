export class Config {
    public id: number;
    public pc: string;
    public type: string;
    public repeatPeriod: string;
    public expirationDate: Date;
    public compress: boolean;
    public retention: number;
    public packageSize: number;
    public status: boolean;

    public constructor(
        id: number,
        pc: string,
        type: string,
        repeatPeriod: string,
        expirationDate: Date,
        compress: boolean,
        retention: number,
        packageSize: number,
        status: boolean
    ) {
        this.id = id;
        this.pc = pc;
        this.type = type;
        this.repeatPeriod = repeatPeriod;
        this.expirationDate = expirationDate;
        this.compress = compress;
        this.retention = retention;
        this.packageSize = packageSize;
        this.status = status;
    }
}
