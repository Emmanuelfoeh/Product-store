import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './signIn.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/login')
  signIn(@Body() body: SignInDto) {
    const user = this.authService.signIn(body.email, body.password);
    return user;
  }
}
