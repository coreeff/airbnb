import {
  Post,
  UseGuards,
  HttpStatus,
  Controller,
  UploadedFile,
  HttpException,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { Roles } from 'src/core/auth/decorator';
import { UploadService } from './upload.service';
import { Role } from 'src/core/auth/entities/role.enum';
import { JwtGuard, RolesGuard } from 'src/core/auth/guard';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseGuards(JwtGuard, RolesGuard)
  @UseInterceptors(FileInterceptor('file'))
  @Roles(Role.ADMIN, Role.SUPER_ADMIN, Role.USER)
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file)
      throw new HttpException('File not found', HttpStatus.BAD_REQUEST);

    const fileUrl = await this.uploadService.uploadFileUsingFormData(file);

    return { url: fileUrl };
  }
}
