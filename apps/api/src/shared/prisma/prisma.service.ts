import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  private readonly writeClient: PrismaClient;
  private readonly readClient: PrismaClient;

  constructor(private config: ConfigService) {
    this.writeClient = new PrismaClient({
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
    });

    this.readClient = new PrismaClient({
      datasources: {
        db: {
          url: config.get('READ_DATABASE_URL'),
        },
      },
    });
  }

  async onModuleInit() {
    await this.writeClient.$connect();
    await this.readClient.$connect();
  }

  async onModuleDestroy() {
    await this.writeClient.$disconnect();
    await this.readClient.$disconnect();
  }

  get read() {
    return this.readClient;
  }

  get write() {
    return this.writeClient;
  }
}
