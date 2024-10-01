import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy, RefreshTokenStrategy } from './strategy';
import { PrismaModule } from 'src/shared/prisma/prisma.module';

@Module({
  controllers: [AuthController],
  imports: [PrismaModule, JwtModule.register({})],
  providers: [AuthService, JwtStrategy, RefreshTokenStrategy],
})
export class AuthModule {}
