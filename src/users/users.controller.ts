import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  createUser(@Body() newUser: CreateUserDTO) {
    this.userService.createUser(newUser);
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
}
