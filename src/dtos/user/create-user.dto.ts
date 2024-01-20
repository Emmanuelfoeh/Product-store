import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { Role } from 'src/entities/role.entity';

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'firstName must have at least 3 characters.' })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'lastName must have at least 3 characters.' })
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'Username must have at least 3 characters.' })
  username: string;

  @IsEmail(null, { message: 'Please provide valid Email.' })
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  //   @Matches(passwordRegEx, {
  //     message: `Password must contain Minimum 8 and maximum 20 characters,
  //     at least one uppercase letter,
  //     one lowercase letter,
  //     one number and
  //     one special character`,
  //   })

  @IsNotEmpty()
  phoneNumber: string;

  role: Role;
}
