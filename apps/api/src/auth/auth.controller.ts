import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { AuthDto, SignupDto } from './dto';
import { AuthService } from './auth.service';

// @TODO: Implement refresh tokens

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  login(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }

  @Post('signup')
  signup(@Body() dto: SignupDto) {
    return this.authService.signup(dto);
  }
}
