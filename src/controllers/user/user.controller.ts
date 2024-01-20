import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserRole } from 'src/decorators/role.decorator';
import { CreateUserDto } from 'src/dtos/user/create-user.dto';
import { UpdateUserDto } from 'src/dtos/user/update-user.dto';
import { UserDto } from 'src/dtos/user/user.dto';
import { Role } from 'src/enums/role.enum';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // @UserRole(Role.Admin)
  @Post()
  createUser(@Body() body: CreateUserDto) {
    const user = this.userService.createUser(body);
    return user;
  }

  @Get('/:id')
  getUser(@Param('id') id: string) {
    const user = this.userService.findOne(parseInt(id));
    return user;
  }

  @Get()
  async findAllUsers(): Promise<UserDto[]> {
    const users = await this.userService.findAll();
    return users;
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto){
    return this.userService.updateUser(parseInt(id),body)
  }


  @Delete('/:id')
  removeUser(@Param('id') id: string): Promise<{message:string }> {
return this.userService.deleteUser(parseInt(id));
  }


}
