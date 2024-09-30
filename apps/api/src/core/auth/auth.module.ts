import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';

import { JwtStrategy } from './strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/shared/prisma/prisma.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [PrismaModule, JwtModule.register({})],
})
export class AuthModule {}
