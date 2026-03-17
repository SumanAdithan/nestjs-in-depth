import { Exclude } from 'class-transformer';

export interface User {
    id: number;
    username: string;
    password: string;
}

export class SearializedUser {
    id: number;
    username: string;

    @Exclude()
    password: string;

    constructor(partial: Partial<SearializedUser>) {
        Object.assign(this, partial);
    }
}
