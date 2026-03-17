import { Injectable } from '@nestjs/common';
import { SearializedUser, User } from '../../types';
// import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id: 1,
            username: 'john',
            password: 'john',
        },
        {
            id: 2,
            username: 'wick',
            password: 'wick',
        },
    ];

    // getUsers() {
    //     return this.users.map((user) => plainToClass(SearializedUser, user));
    // }

    getUsers() {
        return this.users.map((user) => new SearializedUser(user));
    }

    getUserByUsername(username: string) {
        return this.users.find((user) => user.username === username);
    }

    getUserById(id: number) {
        return this.users.find((user) => user.id === id);
    }
}
