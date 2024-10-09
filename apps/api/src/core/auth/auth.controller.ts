import {
  Req,
  Body,
  Post,
  HttpCode,
  UseGuards,
  HttpStatus,
  Controller,
  Get,
} from '@nestjs/common';
import { User } from '@prisma/client';

import { GetUser } from './decorator';
import { JwtRefreshGuard } from './guard';
import { AuthDto, SignupDto } from './dto';
import { AuthService } from './auth.service';

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

  @Get('refresh-token')
  @UseGuards(JwtRefreshGuard)
  refreshTokens(@GetUser() user: User) {
    return this.authService.signToken(user.id, user.email, user.role);
  }
}
