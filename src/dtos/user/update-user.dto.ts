import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @MinLength(3, { message: 'firstName must have at least 3 characters.' })
  firstName: string;

  @IsString()
  @IsOptional()
  @MinLength(3, { message: 'lastName must have at least 3 characters.' })
  lastName: string;

  @IsString()
  @IsOptional()
  @MinLength(3, { message: 'Username must have at least 3 characters.' })
  username: string;

  @IsEmail(null, { message: 'Please provide valid Email.' })
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;
}