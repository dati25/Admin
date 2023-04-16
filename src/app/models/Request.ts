export class Request {
    public id: number;
    public name: string;
    public macAddress: string;
    public ipAddress: string;
    public status: boolean;

    public constructor(
        id: number,
        name: string,
        macAddress: string,
        ipAddress: string,
        status: boolean
    ) {
        this.id = id;
        this.name = name;
        this.macAddress = macAddress;
        this.ipAddress = ipAddress;
        this.status = status;
    }
}
