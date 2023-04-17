export class Computer {
    public id: number;
    public name: string;
    public macAddress: string;
    public ipAddress: string;
    public status: string;

    public constructor(
        id: number,
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
