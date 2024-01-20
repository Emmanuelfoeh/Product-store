import { Exclude } from "class-transformer";
import { Role } from "src/entities/role.entity";
import { User } from "src/entities/user.entity";

export class UserDto {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  role: Role;

  constructor(user: User) {
    this.id = user.id;
    this.username = user.username;
    this.phoneNumber = user.phoneNumber
    this.firstName =user.firstName
    this.lastName = user.lastName
    this.email =user.email  
    this.role = user.role
    // Assign other fields as needed, excluding the password
  }
}