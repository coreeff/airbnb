import { Controller, Get } from '@nestjs/common';

@Controller('upload')
export class UploadController {
  @Get('')
  uploadFile() {
    return 'File uploaded successfully';
  }
}
