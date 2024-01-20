import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dtos/user/create-user.dto';
import { UpdateUserDto } from 'src/dtos/user/update-user.dto';
import { UserDto } from 'src/dtos/user/user.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  createUser(body: CreateUserDto) {
    try {
      const user = this.repo.create(body);
      return this.repo.save(user);
    } catch (error) {
      console.log('error creating user', error);
      throw new Error('error creating user');
    }
  }

  async findAll(): Promise<UserDto[]> {
    try {
      const users = await this.repo.find();
      console.log('all users found', users);
      return users.map((user) => new UserDto(user));
    } catch (error) {
      //   console.log('error fetching users', error);
      throw new Error('error fetching users');
    }
  }

  async findOne(id: number): Promise<UserDto> {
    const user = await this.repo.findOne({ where: { id } });
    console.log(' user found', user);
    if (!user) throw new NotFoundException(`user with id: ${id} not found`);
    let savedUser = new UserDto(user);
    return savedUser;
  }

  async updateUser(id: number, updateBody: Partial<User>) {
    // Get the user
    const user = await this.repo.findOne({ where: { id } });
    if (!user) throw new NotFoundException(`user with id: ${id} not found`);
    Object.assign(user, updateBody);
    return this.repo.save(user);
  }

  async deleteUser(id: number): Promise<{ message: string }> {
    try {
      const user = await this.repo.findOne({ where: { id } });

      if (!user) throw new NotFoundException(`User with ID ${id} not found`);

      const deleteResult = await this.repo.delete(id);

      if (deleteResult.affected === 0)
        throw new Error(`Failed to delete user with ID ${id}`);
      return { message: `User with ID ${id} has been deleted successfully` };
    } catch (error) {
      console.log('the delete error: ', error);
      throw error;
    }
  }
}
