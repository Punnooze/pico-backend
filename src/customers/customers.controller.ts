import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './interfaces/customer.interface';
import { CustomerDto } from './dto/customer.dto';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customerService: CustomersService) {}

    @Get()
    getAllCustomers() {
        return this.customerService.findAllCustomers();
    }

    @Get(':id')
    getCustomerById(@Param('id') id): Promise<Customer | null> {
        return this.customerService.findCustomerById(id);
    }

    @Post()
    createCustomer(@Body() customerDto: CustomerDto): Promise<Customer | null> {
        return this.customerService.createCustomer(customerDto);
    } 
}
