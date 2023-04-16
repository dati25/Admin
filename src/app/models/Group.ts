import { PC } from './PC';

export class Group {
    public name: string;
    public pcs: PC[];

    public constructor(name: string, pcs: PC[]) {
        this.name = name;
        this.pcs = pcs;
    }
}
