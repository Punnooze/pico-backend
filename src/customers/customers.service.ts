import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './interfaces/customer.interface';
import { Model } from 'mongoose';
import { CustomerDto } from './dto/customer.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
  ) {}

  async findAllCustomers(): Promise<Customer[]> {
    return this.customerModel.find();
  }

  async findCustomerById(id: string): Promise<Customer | null> {
    return await this.customerModel.findOne({ _id: id });
  }

  async createCustomer(customerDto: CustomerDto): Promise<Customer | null> {
    // Hash the password before saving
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(customerDto.password, saltRounds);

    const customerData = {
      ...customerDto,
      password: hashedPassword,
    };

    const newCustomer = await new this.customerModel(customerData);
    return newCustomer.save();
  }

  async deleteCustomer(id): Promise<Customer | null> {
    return await this.customerModel.findByIdAndDelete({ _id: id });
  }

  async addBoadToFavourites(
    boardId: string,
    id: string,
  ): Promise<Customer | null> {
    return await this.customerModel.findByIdAndUpdate(
      id,
      { $addToSet: { favouriteBoards: boardId } },
      { new: true },
    );
  }

  async removeBoardFromFavourites(
    boardId: string,
    id: string,
  ): Promise<Customer | null> {
    return await this.customerModel.findByIdAndUpdate(
      id,
      { $pull: { favouriteBoards: boardId } },
      { new: true },
    );
  }

  async findCustomerByEmail(email: string): Promise<Customer | null> {
    return await this.customerModel
      .findOne({ email: email })
      .select('+password');
  }

  async comparePassword(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }
}
