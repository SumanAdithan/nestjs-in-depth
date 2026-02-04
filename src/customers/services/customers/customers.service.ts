import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    findCustomer() {
        return {
            id: 1,
            email: 'john@gmail.com',
            createdAt: new Date(),
        };
    }
}
