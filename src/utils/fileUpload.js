import { v2 } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import { config } from 'dotenv';

config();

v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: v2,
  params: {
    folder: 'jumga-server-app',
  },
});

export default {
  image: multer({
    storage,
    fileFilter: (req, file, callback) => {
      if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/gif' || file.mimetype === 'image/bmp') {
        callback(null, true);
      } else {
        callback({ message: 'Only images are allowed', status: 400 }, false);
      }
    },
  }),
};
