export class PC {
    public id: number;
    public name: string;
    public mac: string;
    public ip: string;
    public status: boolean;

    public constructor(
        id: number,
        name: string,
        mac: string,
        ip: string,
        status: boolean
    ) {
        this.id = id;
        this.name = name;
        this.mac = mac;
        this.ip = ip;
        this.status = status;
    }
}
