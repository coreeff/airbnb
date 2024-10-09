import {
  Post,
  HttpStatus,
  Controller,
  UploadedFile,
  HttpException,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtGuard, RolesGuard } from 'src/core/auth/guard';
import { Roles } from 'src/core/auth/decorator';
import { Role } from 'src/core/auth/entities/role.enum';

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
