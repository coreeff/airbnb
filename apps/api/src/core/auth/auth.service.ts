import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ForbiddenException, Injectable } from '@nestjs/common';

import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { AuthDto, SignupDto } from './dto';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CustomLoggerService } from 'src/shared/logger/logger.service';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private prisma: PrismaService,
    private config: ConfigService,
    private readonly logger: CustomLoggerService,
  ) {}

  async signup(
    dto: SignupDto,
  ): Promise<{ id: string; email: string; role: string }> {
    const hashPassword = await argon.hash(dto.password);

    try {
      const user = await this.prisma.write.user.create({
        data: {
          ...dto,
          password: hashPassword,
        },

        select: {
          id: true,
          email: true,
          role: true,
        },
      });

      this.logger.log(`New User Registered, email:${user.email}`);

      return user;
    } catch (error) {
      // if the error is of prisma
      if (error instanceof PrismaClientKnownRequestError) {
        // p2002 is a specific type of error where unique entity is already present in the database
        if (error.code === 'P2002') {
          this.logger.error(
            `, Credential Already Taken!! while registering ${dto.email}`,
          );
          throw new ForbiddenException('Credential Already Taken!!');
        }
      }

      this.logger.error(`Error on new User Registered, error:${error}`);

      throw error;
    }
  }

  async login(
    dto: AuthDto,
  ): Promise<{ access_token: string; refresh_token: string }> {
    const user = await this.prisma.read.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) throw new ForbiddenException('user does not exist');

    const passwordMatch = await argon.verify(user.password, dto.password);

    if (!passwordMatch) throw new ForbiddenException('password doesnot match');

    const token = this.signToken(user.id, user.email, user.role);

    this.logger.log(`User logged in, email:${user.email}`);

    return token;
  }

  async signToken(
    userId: string,
    email: string,
    role: string,
  ): Promise<{ access_token: string; refresh_token: string }> {
    const payload = {
      sub: userId,
      email,
      role,
    };

    const accessToken = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: this.config.get('JWT_SECRET'),
    });

    const refreshToken = await this.jwt.signAsync(payload, {
      expiresIn: '7d',
      secret: this.config.get('JWT_REFRESH_SECRET'),
    });

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }
}
