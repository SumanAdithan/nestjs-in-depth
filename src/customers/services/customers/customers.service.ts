import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/createCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
    private customers: Customer[] = [
        {
            id: 1,
            name: 'john',
            email: 'john@gmail.com',
        },
        {
            id: 2,
            name: 'wick',
            email: 'wick@gmail.com',
        },
        {
            id: 3,
            name: 'rambo',
            email: 'rambo@gmail.com',
        },
    ];

    findCustomerById(id: number) {
        return this.customers.find((user) => user.id === id);
    }

    createCustomer(customerDto: CreateCustomerDto) {
        this.customers.push(customerDto);
    }

    getCustomers() {
        return this.customers;
    }
}
