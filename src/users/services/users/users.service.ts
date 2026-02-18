import { Injectable } from '@nestjs/common';
import { SearializedUser, User } from '../../types';
// import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            username: 'john',
            password: 'john',
        },
        {
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
}
