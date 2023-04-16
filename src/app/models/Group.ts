import { User } from './User';

export class Group {
    public name: string;
    public users: User[];

    public constructor(name: string, users: User[]) {
        this.name = name;
        this.users = users;
    }
}
