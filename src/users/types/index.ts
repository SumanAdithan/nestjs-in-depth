import { Exclude } from 'class-transformer';

export interface User {
    username: string;
    password: string;
}

export class SearializedUser {
    username: string;

    @Exclude()
    password: string;

    constructor(partial: Partial<SearializedUser>) {
        Object.assign(this, partial);
    }
}
