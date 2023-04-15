export class Config {
    public pc: string;
    public group: string;
    public type: string;
    public expiration: string;
    public source: string;
    public destination: string;
    public compress: string;
    public retention: string;
    public packagesize: string;
    public status: string;

    public constructor(
        pc: string,
        group: string,
        type: string,
        expiration: string,
        source: string,
        destination: string,
        compress: string,
        retention: string,
        packagesize: string,
        status: string
    ) {
        this.pc = pc;
        this.group = group;
        this.type = type;
        this.expiration = expiration;
        this.source = source;
        this.destination = destination;
        this.compress = compress;
        this.retention = retention;
        this.packagesize = packagesize;
        this.status = status;
    }
}
