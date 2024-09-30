import { Injectable } from '@nestjs/common';
import cloudinary from './config/cloudinary.config';

@Injectable()
export class UploadService {
  async uploadFile(file: Express.Multer.File) {
    const result = await cloudinary.uploader.upload(file.path);
    return result.secure_url;
  }
}
