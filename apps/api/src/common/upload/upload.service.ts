import { Readable } from 'stream';
import * as FormData from 'form-data';
import { Injectable } from '@nestjs/common';

import axios from 'axios';
import cloudinary from './config/cloudinary.config';

@Injectable()
export class UploadService {
  // @TODO: to fix the sdk upload
  async uploadFileUsingSDK(file: Express.Multer.File): Promise<string> {
    const fileStr = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;

    const result = await cloudinary.uploader.upload(fileStr, {
      resource_type: 'auto',
    });

    return result.secure_url;
  }

  async uploadFileUsingFormData(file: Express.Multer.File) {
    const formData = new FormData();
    formData.append('file', Readable.from(file.buffer), file.originalname);
    formData.append('upload_preset', `${process.env.CLOUDINARY_UPLOAD_PRESET}`);
    const imageUploadUrl: string = `${process.env.CLOUDINARY_IMAGE_UPLOAD_LINK}/image/upload`;

    try {
      const uploadResponse = await axios.post(imageUploadUrl, formData, {
        headers: {
          ...formData.getHeaders(),
        },
      });

      const imageUrl = uploadResponse.data.secure_url;
      return imageUrl;
    } catch (error) {
      console.error('Failed to upload file:', error);
      throw new Error('Failed to upload file');
    }
  }
}
