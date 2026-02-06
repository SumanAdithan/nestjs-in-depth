import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Req,
    Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/createCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService) {}

    @Get(':id')
    getCustomer(
        @Param('id', ParseIntPipe) id: number,
        @Req() req: Request,
        @Res() res: Response,
    ) {
        const customer = this.customersService.findCustomerById(id);

        if (!customer) {
            return res.status(400).send({ msg: 'Customer not found!' });
        }

        return res.send(customer);
    }

    @Get('/search/:id')
    searchCustomerById(@Param('id', ParseIntPipe) id: number) {
        const customer = this.customersService.findCustomerById(id);

        if (!customer)
            throw new HttpException(
                'Customer not found!',
                HttpStatus.NOT_FOUND,
            );

        return customer;
    }

    @Get('')
    getAllCustomers() {
        return this.customersService.getCustomers();
    }

    @Post('create')
    createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
        this.customersService.createCustomer(createCustomerDto);
    }
}
