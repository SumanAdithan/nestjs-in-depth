import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    private users = [
        {
            id: 1,
            email: 'john@gmail.com',
            createdAt: new Date(),
        },
        {
            id: 2,
            email: 'wick@gmail.com',
            createdAt: new Date(),
        },
        {
            id: 3,
            email: 'rambo@gmail.com',
            createdAt: new Date(),
        },
    ];

    findCustomerById(id: number) {
        return this.users.find((user) => user.id === id);
    }
}
