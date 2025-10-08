import { Injectable } from '@nestjs/common';
import { CustomersService } from 'src/customers/customers.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly customerService: CustomersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<string | null> {
    const customer = await this.customerService.findCustomerByEmail(
      loginDto.email,
    );
    if (!customer) {
      return null;
    }

    // Compare the plain password with the hashed password from database
    const isPasswordValid = await this.customerService.comparePassword(
      loginDto.password,
      customer.password,
    );

    if (!isPasswordValid) {
      return null;
    }

    const tokenPayload = {
      name: customer.name,
      email: customer.email,
      customerId: customer.id,
      generatedAt: new Date(),
    };

    return this.jwtService.sign(tokenPayload);
  }
}
