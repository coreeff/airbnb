import {
  Post,
  HttpStatus,
  Controller,
  UploadedFile,
  HttpException,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file)
      throw new HttpException('File not found', HttpStatus.BAD_REQUEST);

    const fileUrl = await this.uploadService.uploadFileUsingFormData(file);

    return { url: fileUrl };
  }
}
