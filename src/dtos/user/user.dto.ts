import { Exclude } from "class-transformer";
import { User } from "src/entities/user.entity";

export class UserDto {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;

  constructor(user: User) {
    this.id = user.id;
    this.username = user.username;
    this.phoneNumber = user.phoneNumber
    this.firstName =user.firstName
    this.lastName = user.lastName
    this.email =user.email  
    // Assign other fields as needed, excluding the password
  }
}