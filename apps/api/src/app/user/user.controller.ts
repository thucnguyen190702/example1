import {Body, Controller, Get, Post} from "@nestjs/common";
import {UserService} from "./user.service";
import {User} from "./user.entity";
import {CreateUser} from "./user.dto";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('/create')
  insertUser(@Body() user:CreateUser): Promise<any> {
    return this.userService.insertUser(user);
  }
}
