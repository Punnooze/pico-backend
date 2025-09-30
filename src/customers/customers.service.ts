import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './interfaces/customer.interface';
import { Model } from 'mongoose';
import { CustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomersService {
    constructor(@InjectModel('Customer') private readonly customerModel : Model<Customer>){}

    async findAllCustomers(): Promise<Customer[]>{
        return this.customerModel.find();
    }
    
    async findCustomerById(id: string): Promise<Customer| null> {
        return await this.customerModel.findOne({_id: id});
    }

    async createCustomer(customerDto: CustomerDto): Promise<Customer | null>{
        const newCustomer =  await new this.customerModel(customerDto)
        return newCustomer.save();
    }

}
