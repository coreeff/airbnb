import { ConfigService } from '@nestjs/config';
import { ForbiddenException, Injectable } from '@nestjs/common';

import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    config: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      // passReqToCallback: true, // getting full request
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.getOrThrow('JWT_REFRESH_SECRET'),
    });
  }

  async validate(payload: { sub: string; email: string }) {
    const user = await this.prisma.read.user.findUnique({
      where: {
        id: payload.sub,
      },
    });

    if (!user) throw new ForbiddenException('User not found');

    delete user.password;
    return user; // Attaching the user to the request object
  }
}
