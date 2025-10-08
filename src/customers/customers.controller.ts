import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

  @Put('/add-favourite-board/:id')
  addFavouriteBoard(
    @Body('boardId') boardId: string,
    @Param('id') id: string,
  ): Promise<Customer | null> {
    return this.customerService.addBoadToFavourites(boardId, id);
  }

  @Put('/remove-favourite-board/:id')
  removeFavouriteBoard(
    @Body('boardId') boardId: string,
    @Param('id') id: string,
  ): Promise<Customer | null> {
    return this.customerService.removeBoardFromFavourites(boardId, id);
  }

  @Get('/find-customer-by-email/:email')
  findCustomerByEmail(@Param('email') email: string): Promise<Customer | null> {
    return this.customerService.findCustomerByEmail(email);
  } 

  @Delete(':id')
  deleteCustomer(@Param('id') id: string) : Promise<Customer | null>{
    return this.customerService.deleteCustomer(id);
  }
}
